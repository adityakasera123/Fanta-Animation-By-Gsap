
gsap.registerPlugin(ScrollTrigger);
let tl=gsap.timeline({scrollTrigger:{
    trigger:".two",
    start:"5% 95%",
    end:"67% 60%",
    scrub:true,
   
}})

tl.to("#fanta",{
    top:"115%",
    width:"33%",
    left:"5%"
},'orange')

tl.to("#orange-cut",{
    top:"112%",
    left:"23%"
},'orange')
tl.to("#orange",{
    width:"18%",
    top:"165%",
      
    right:"10%"
},'orange')
tl.to("#leaf",{
   width:"10%",
    top:"170%",
    rotate:"180deg",
    left:"28.5%"
},'orange')
tl.to("#leaf1",{
 rotate:"400deg",
    top:"102%",
    left:"74%"
},'orange')


let tl2=gsap.timeline({scrollTrigger:{
    trigger:".three",
    start:"0% 85%",
    end:"70% 50%",
    scrub:true
   
}})

tl2.to("#fanta",{
    width:"29%",
    top:"208%",
    left:"36%"
},'orange1')
tl2.to("#orange-cut",{
    width:"19%",
    top:"205%",
    left:"41%"
},'orange1')


tl2.from("#pepsi",{
    x: 140,
    rotation: 75,
    transformOrigin: "bottom center",
    duration: 1.2,
    ease: "power3.out"
}, "orange1");

tl2.from("#sprite",{
     y: -80,
    rotation: -75,
    transformOrigin: "bottom center",
    duration: 1.2,
    ease: "power3.out"
}, "orange1");

