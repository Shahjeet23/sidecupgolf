var crsr=document.querySelector("#cursor")
var blur=document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+"px"
    crsr.style.top=dets.y+"px"
    blur.style.left=dets.x-200+"px"
    blur.style.top=dets.y-200+"px"
})
var h4nav_all=document.querySelectorAll("#nav h4")
h4nav_all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=3;
        crsr.style.border="1px solid #fff";
        crsr.style.backgroundColor="transparent";
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1;
        crsr.style.border="0px solid #95C11E";
        crsr.style.backgroundColor="#95C11E";
    })
})



gsap.to("#nav",{
    backgroundColor:"rgba(0,0,0,0.950)",
    duration :8,
    height:"120px",
    scrollTrigger:{
        trigger: "#nav",
        scroller:"body",
        // markers:true,
        start :"top -10%",
        end: "top -11%",
        scrub:1
        
    }
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -50%",
        scrub:2,
    }
})
gsap.from("#aboutus img,#aboutus",{
    y:50,
    
    opacity:1,
    backgroundColor:"transperent",
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#aboutus",
        scroller :"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:2,
        
    }

})
gsap.from(".card",{
    scale:0.8,
    stagger:0.4,
    
    
    duration:0.5,
    // stagger:0.4,
    scrollTrigger:{
        trigger:".card",
        scroller :"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:1,
        
    }

})
gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger : "#colon1" ,
        scroller : "body ",
        //         markers: true,
        start: "top 50%",
        end:"top 45%",
        scrub:2,
    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger : "#colon1" ,
        scroller : "body ",
        //         markers: true,
        start: "top 50%",
        end:"top 45%",
        scrub:2,
    }
})
gsap.from("#page4 h1",{
    y:50,
    color:"#fff",
    duration:5,
    scrollTrigger:{
        trigger : "#page4 h1" ,
        scroller : "body ",
        //         markers: true,
        start: "top 75%",
        end:"top 70%",
        scrub:2,
    }
})