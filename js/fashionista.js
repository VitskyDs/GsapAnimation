var tmln = new TimelineMax();
var preTmln = new TimelineMax();
//animation functions and eases


CustomEase.create("rectangleLeft","M0,0 C0.078,0.004 0.148,-0.1 0.2,-0.1 0.41,-0.1 0.559,0.602 0.598,0.779 0.656,1.034 0.938,0.998 1,1");



//animation

//preTmln.set(superBg, {scale:0, autoAlpha:0}).set(superContainer, {autoAlpha:0});

tmln.paused(true);

tmln.addLabel("start", "0").addLabel("middle", "+0.9").addLabel("text", "+1.5")
    .set(superBg, {scale:0, autoAlpha:1}).set(superContainer, {autoAlpha:1})
    //retangles grow
    .fromTo(superBg , 0.5, {scale:0, rotation: 45, x:255}, {scale: 0.8, ease: Back.easeOut.config(1.3)},"start")
    .fromTo(".fashionista-rectangle", 0.5,{scale: 0, x:320}, {scale: 0.5, ease: Back.easeOut.config(1.3)},"start+=0.1")
    .fromTo(".fashionista-inner-rectangle-1", 0.5, {scale:0}, {scale: 1, ease: Back.easeOut.config(1.3)}, "start+=0.2")
    .fromTo(".fashionista-inner-rectangle-2", 0.5, {scale:0}, {scale: 1, ease: Back.easeOut.config(1.3)}, "start+=0.3")
    //retangles go left
        //rotate
    .fromTo(superBg, 0.5,{rotation: -45}, {rotation: 0, ease:"rectangleLeft"}, "middle-=0.2")
    .fromTo(".fashionista-rectangle", 0.5,{rotation: 45}, {rotation: 135, ease:"rectangleLeft"}, "middle-=0.2")
        //go left
    .fromTo(superBg, 0.5,{x:255, scale:0.8}, {x:0, scale:1, ease:Circ.easeInOut}, "middle")
    .fromTo(".fashionista-rectangle", 0.5,{ x:320 , scale:0.5}, {x: 1, scale:1, ease:Circ.easeInOut}, "middle")
    //super enlarges
    .to(".super-headline, .super-subtitle",0.5, {className:"+=font-large", ease: Circ.easeInOut}, "-=0.3")
    //text enters
    .fromTo(".super-headline", 0.5, {y:-200, x:25}, {y:0, ease:Back.easeOut.config(1)}, "text")
    .fromTo(".super-subtitle", 0.5, {y:200, x:25}, {y:0, ease:Back.easeOut.config(1.2)}, "text+=0.2")
    //reverse
    .addDelay(1)
    .to(superBg,0,{x:0, onComplete:reverse})
    ;

//ease: Back.easeIn.config(1.4)

/*    .fromTo(superBg, 0.5,{x:255, rotation: 45, scale:0.8}, {x:0, rotation: 0,scale:1, ease:"rectangleLeft"}, "middle")
    .fromTo(".fashionista-rectangle", 0.5,{ x:320 , rotation: 45, scale:0.5}, {x: 1, rotation: -135,scale:1, ease:"rectangleLeft"}, "middle")*/
