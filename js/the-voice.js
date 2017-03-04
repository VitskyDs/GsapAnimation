var tmln = new TimelineMax();
var preTmln = new TimelineMax();

//animation functions and eases

CustomEase.create("","");

//animation

tmln.paused(true);

tmln.timeScale(1);

tmln.addLabel("start", "0").addLabel("middle", "+0.1").addLabel("end", "+1.5")
    .to(superContainer, 0.001,{autoAlpha:1, delay: 0.1})
    //super enters
    .to(".flah", 0,{className:"+=clip-path-start"}, "start")
    .from(".super-text", 0.45, {x:-300}, "start")
    //flahs enter
    .to(".small-flah", 0, {x: 100, className:"+=clip-path-start"}, "middle")
    .to(".small-flah", 0, {className:"+=clip-path-end"},"middle+=0.4" )
    //close
    .addDelay(2)
    .to(superBg, 0,{className:"+=clip-path-end"}, "end")
    .to(superBg, 0, {x: 70}, "end+=0.2")
    .to(".super-bg-backdrop", 0, {className:"+=clip-path-end-delay"}, "end")
    .to(".super-bg-backdrop", 0, {x: 85}, "end+=0.2")
    ;

