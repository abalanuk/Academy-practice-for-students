
/**
 * Created by acm1899.3 on 09.10.2016.
 */
function playVideo(){
    var video = document.getElementById("video_on_click");
    document.getElementById("play_video").style.display = "block";
    video.play();
    video.currentTime = 0;
    video.muted = false;
    document.getElementById("header_top").style.position = "relative";
}
function closeVideo(){
    document.getElementById("play_video").style.display = "none";
    document.getElementById("video_on_click").pause();
    document.getElementById("header_top").style.position = "fixed"
}