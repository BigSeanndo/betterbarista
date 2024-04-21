//function to show the overlay with the text of the clicked element
function showOverlay(element) {
    var text = element.getAttribute("data-text");
    document.querySelector(".overlay_text").innerText = text;
    document.getElementById("overlay").style.display = "block";
}

//function to hide the overlay
function hideOverlay() {
    document.getElementById("overlay").style.display = "none";
}