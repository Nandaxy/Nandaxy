// Check if the screen width is greater than or equal to 768 pixels (desktop)
if (window.matchMedia("(min-width: 768px)").matches) {
  // Get the video element
  const bgVideo = document.getElementById("bgVideo");

  // Change the source of the video
  bgVideo.src = "bg_desktop.mp4";
}
