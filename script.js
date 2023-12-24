
function playVideo(link) {
    var videoElement = document.getElementById('video');
    videoElement.src = link;
    videoElement.load();
    videoElement.play();
}
