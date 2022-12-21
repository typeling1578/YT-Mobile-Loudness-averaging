let window_ = window.wrappedJSObject;
let document_ = window_.document;

setInterval(function(){
    let video_elem = document_.querySelector(".video-stream.html5-main-video");
    let playerResponse = document_.querySelector("#movie_player").getPlayerResponse();
    let loudness = 10 ** ((playerResponse["playerConfig"]["audioConfig"]["loudnessDb"] * -1) / 20);
    if (loudness > 1) {
        loudness = 1;
    }
    video_elem.volume = loudness;
}, 100);