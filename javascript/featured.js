'use strict'

// Obtener elementos del DOM
const reproducirButton = document.querySelector(".reproducir");
const videoPlayer = document.getElementById("videoPlayer");


// Reproducit trailer
function reproducirVideo() {
    const videoURL = "https://www.youtube.com/watch?v=MgzHRIeaOL8";
    videoPlayer.src = videoURL;
};

reproducirButton.addEventListener("click", reproducirVideo);
