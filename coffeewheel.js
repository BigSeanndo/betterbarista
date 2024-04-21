//a dictionary of coffee flavours and the text relevant to improving them
var flavours = { "Sour" : " Try grinding the coffee more finely and increase the brew time",
"Bitter" : "Use a coarser grind, decrease the brew time, or lower the water temperature.",
"Salty" : "Try using a finer grind, increasing the brew time, or raising the water temperature.",
"Sweet" : "This is a good sign! You've hit the sweet spot. Keep doing what you're doing.",
"Savory" : "This could be due to under-extraction. Try using a finer grind, increasing the brew time, or raising the water temperature.",
"Earthy" : "This could be due to the coffee's origin. Try a different coffee or ensure your storage is airtight and dry.",
"Acidic" : "Lower Brewing Temperature.",
"Flat" : "Increase Brewing Temperature.",
"Smokey" : "This is from over-roasting. Use a lower temperature.",
"Watery" : "Increase the coffee to water ratio.",
"Muddy" : "Use a coarser grind.",
"Weak" : "Increase the coffee to water ratio.",
}
  
//gets all the coffee flavours
var flavourNames = Object.keys(flavours);

//this is the initial angle of the wheel
var currentRotate = 0;

//sets the sound of the wheel
var wheelSound = new Audio("coffeewheel.mp3");

//function to update the tasteselected class
function updateFlavourText(flavourName) {
  var flavourDescription = flavours[flavourName];
  document.querySelector(".tasteselected p").textContent = flavourName + " - " + flavourDescription;
}

//function to create the coffee wheel
function createWheel() {
  //Initialises svg size
  var svg = d3.select(".wheel").append("svg")
    .attr("width", 300)
    .attr("height", 300);

  //initialises the group element and ensures it is centered
  var group = svg.append("g")
    .attr("transform", "translate(150,150)");

  //initialises the how each sector looks
  var arcGenerator = d3.arc()
    .innerRadius(0)
    .outerRadius(150);

  //creates the sectors
  var pieGenerator = d3.pie()
    .value(constantValue); //sets all the sectors to the same size

  //creates the individual coffee wheel sections and makes them seperate
  var arcs = group.selectAll(".arc")
    .data(pieGenerator(flavourNames))
    .enter()
    .append("g")
    .attr("class", "arc");

  //draws the sectors of the wheel
  arcs.append("path")
    .attr("d", arcGenerator)
    .attr("fill", "#cbba9b")
    .attr("stroke", "#8C6F4F")
    .attr("stroke-width", "1px")
    .on("click", function(clicked, flavour) { //allows each section to be clicked to show its details
      updateFlavourText(flavour.data);
    });

    //adds text to each of the sector
  arcs.append("text")
  .attr("transform", function(flavors) { //finds the center of each section
    var centerPoint = arcGenerator.centroid(flavors);
    return "translate(" + centerPoint[0] + "," + centerPoint[1] + ")"; //moves the text to the center of each section
    })
    .attr("text-anchor", "middle")
    .text(function(flavors) { return flavors.data; }) //sets the text to the name of each sector
    .style("fill", "#8C6F4F")
    .style("font-size", "10px");
}

//functions returns a constant value for the equal sections of the wheel
function constantValue() {
  return 1;
}


//
function spinWheel() {
  //chooses a random value to spin and adds a bunch more rotations to it
  var additionalRotate =Math.floor(Math.random()*360) + 3600;
  var newRotate = currentRotate+additionalRotate;

  //plays the wheel of fortune sound
  wheelSound.play();

  //rotates the wheel
  d3.select('.wheel svg g')
    .transition()
    .duration(8500)
    .attrTween("transform", function() {
      //interpolate will help us go from the current rotation to the new rotation
      var interpolate =d3.interpolateString("rotate("+currentRotate+")", "rotate("+newRotate+")");
      //calculates rotation at each point of the transition
      return function(t) { //t represents how far along the transition it is (from 0 to 1)
        //moves wheel to the center of the screen and rotates it
        return "translate(150,150) " + interpolate(t);
      };
    })

    .on("end", function() {
      //resets current position of the wheel to within 
      currentRotate = newRotate % 360;
      //calculate how many degrees each flavour takes up
      var degreesPerFlavour = 360/flavourNames.length;
      //calculates which flavour is selected
      var selectedFlavourNum = Math.floor(currentRotate/degreesPerFlavour);
      //gets the name of the selected flavour
      var selectedFlavour = flavourNames[selectedFlavourNum];
      //changes the text to the selected flavour
      updateFlavourText(selectedFlavour);
    });
}

//creates the wheel
createWheel();

//creates event listener for the spin button, to spin wheel
document.getElementById("spinbutton").addEventListener("click", spinWheel);