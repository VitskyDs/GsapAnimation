var userHeadline = "Your headline goes here"
    , userSubtitle = "Your subtitle goes here"
    , superContainer = $(".super-container")
    , superBg = $(".super-bg")
    , superText = $(".super-text")
    , playPauseBtn = $("#play-pause-button")
    , restartBtn = $("#restart-button");
var reverse = function () {
        tmln.reverse();
    }

//set text

document.getElementById("super-headline").innerHTML = userHeadline;
document.getElementById("super-subtitle").innerHTML = userSubtitle;

//change text

$("#userHeadline").keyup(function () {
    userHeadline = this.value;
    document.getElementById("super-headline").innerHTML = userHeadline;
});
$("#userSubTitle").keyup(function () {
    userSubtitle = this.value;
    document.getElementById("super-subtitle").innerHTML = userSubtitle;
});

//button

playPauseBtn.on('click', function (e) {
    document.getElementById("super-headline").innerHTML = userHeadline;
    document.getElementById("super-subtitle").innerHTML = userSubtitle;
    //  play button class toggle
    $(this).toggleClass("playButtonActive");
    e.preventDefault();
    //  play pause function 
    video.paused ? video.play() : video.pause();
    tmln.paused(!tmln.paused())
});

document.onkeypress = function (e) {
    if ((e || window.event).keyCode === 32) {
        video.paused ? video.play() : video.pause();
        tmln.paused(!tmln.paused());
    }
};

restartBtn.on('click', function (e) {
        e.preventDefault();
        tmln.restart();
        video.currentTime = 0;
        video.play();
    })

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
