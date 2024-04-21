//set music variable to the music file
let music = new Audio("music.mp3");
//set the audio instance to loop
music.loop = true;
//play the music and send log to the console if it started or failed
music.play().then(() => console.log("Music playback started")).catch((error) => console.error("Playback failed:", error));

