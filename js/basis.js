var superContainer = $(".super-container")
    , playPauseBtn = $("#play-pause-button")
    , restartBtn = $("#restart-button");

//buttons

playPauseBtn.on('click', function (e) {
    //  play button class toggle
    $(this).toggleClass("playButtonActive");
    e.preventDefault();
    //  play pause function
    video.paused ? video.play() : video.pause();
    tmln.paused(!tmln.paused())
});

restartBtn.on('click', function (e) {
        e.preventDefault();
        tmln.restart();
        video.currentTime = 0;
        video.play();
});

document.onkeypress = function (e) {
    if ((e || window.event).keyCode === 32) {
        video.paused ? video.play() : video.pause();
        tmln.paused(!tmln.paused());
    }
};

//delay function

TimelineLite.prototype.addDelay = function (delay, position) {
    var delayAttr;
    if (typeof delay === 'undefined' || isNaN(delay)) {
        return this; //skip if invalid parameters
    }
    if (typeof position === 'undefined') {
        delayAttr = '+=' + delay; //add delay at the end of the timeline
    }
    else if (typeof position === 'string') {
        delayAttr = position + '+=' + delay; //add delay after label
    }
    else if (!isNaN(position)) {
        delayAttr = delay + position; //if they're both numbers, assume absolute position
    }
    else {
        return this; //nothing done
    }
    return this.set({}, {}, delayAttr);
};
