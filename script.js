





// var path = "M 0 50 Q 500 100 500 100"

// var finalPath = "M 0 50 Q 500 100 500 100"

// var string = document.querySelector('.detail-sec2');

// string.addEventListener("mouseenter", function(){
//     // console.log("entered")
// })

// string.addEventListener("mouseleave", function(){
//     // console.log("leaved")
// })
// string.addEventListener("mousemove", function(dets){
//     path = `M 0 100 Q ${dets.x} ${dets.y} 500 100`
    
//     gsap.to("svg path", {
//         attr: {d:path},
//         duration:0.2,
//         ease:"power3.out"
//     })

// })

// string.addEventListener("mouseleave", function(){
    
//     gsap.to("svg path", {
//         attr: {d:finalPath},
//         duration:1.5,
//         ease:"elastic.out(1,0.2)"
//     })

// })





let slideText = document.querySelectorAll('.contact-section > *');

anime({
    targets: slideText,
    translateX: '-100%',
    duration: 1200,
    easing: 'linear',
    loop: true,
  });




  function breakTheText() {
    let h1 = document.querySelector("ul li a")
    let h1Text = h1.textContent

    let splittedText = h1Text.split("");

    let clutter = ""

    splittedText.forEach(function (elem) {

            clutter += `<span>${elem}</span>`
        


    })


    h1.innerHTML = clutter
}

breakTheText()


//   gsap.from("h1 span",{
//     y:50,
//     opacity:0,
//     duration:0.8,
//     delay:0.5,
//     stagger:0.15
// })


// let tl2 = gsap.timeline({
//     scrollTrigger:{
//         trigger:".section",
//         scroller:"body",
//         // markers:true,
//         start:"top 50%",
        
        
//     },
// }

// )




// For Multiple Elements Of Section

const contactSectionTl = gsap.timeline({
    scrollTrigger:{
        trigger:'.ready-section',
        start:'top center',
        // markers:true,
    }
})

contactSectionTl.from('.ready-section-title',{
    opacity:0,
    yPercent:50,
    duration:.3,
}).from('.ready-section-desc',{
    opacity:0,
    yPercent:30,
    duration:.3,
    ease:'none'
})

// For Single Section
// gsap.from('.ready-section',{
//     opacity:0,
//     duration:.3,
//     scale:0.2,
//     yPercent:100,
//     easy:"sine.in",
//     scrollTrigger:{
//         trigger:'.ready-section',
//         start:'top bottom',
//         // markers:true,
//     }
// })

let i = document.querySelector(" .hamburger");
let navMenu = document.querySelector(" nav ul") 

i.addEventListener("click", ()=>{
    i.classList.toggle("active");
    navMenu.classList.toggle("active");

})
document.querySelectorAll("li a").forEach(n => n.addEventListener("click", ()=>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))


// Animations

// Hero sectin Animation

const heroSectionTl = gsap.timeline({
    scrollTrigger:{
        trigger:"header",
        start:"top center",
        // markers:true,
        onComplete:()=>{
            console.log("Hero Section Animation Done.")
        }
    }
});

heroSectionTl.from("nav",{
    opacity:0,
    duration:.5,
}).from('.heading-text',{
    stagger:0.1,
    yPercent:100,

}).from('.para-desc',{
    opacity:0,
},"start_with_event")

.from('.event-disc',{
    opacity:0,
    xPercent:-10,
    duration:.5,
    ease:"power2"
},"start_with_event")


const sectiontl = gsap.timeline({
    scrollTrigger:{
        trigger:".technis-event",
        start:"top center",
        // markers:true,

    }
});

sectiontl.from(".technis-event h1",{
    yPercent:100,
    
}).from(".technis-event p , .technis-para p",{
      opacity:0,
      duration:.3
}).from(".detail-sec1 img ",{
    yPercent:100,
    stagger:.5,
    opacity:0
},"startwithpara").from(".detail-sec2",{
    yPercent:100,
    stagger:.5,
    opacity:0
},"startwithpara")




const solutionstl = gsap.timeline({
    scrollTrigger:{
        trigger:".solutions",
        start:"top center",
        // markers:true
    }
});

solutionstl.from(".solution-1 h1",{
    yPercent:100,
    duration:.5
}).from(".solution-1 p",{
    opacity:0
})


const solutionstl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".solutions",
        start:"top center",
        // markers:true
    }
});

solutionstl2.from(".solution-2",{
    opacity:0
    // y:100
}).from(".solution-2 h3",{
    yPercent:100,
}).from(".solution-desc p",{
    stagger:0.2,
    yPercent:100,
    duration:0.3,
    easy:"sine.in",
})

gsap.from(".marketing p",{
    stagger:.3,
    yPercent:100,
    duration:0.5,
    easy:"sine.in",
        scrollTrigger:{
            trigger:'.marketing  ',
            start:'top center',
            // markers:true,
        }
})


const eventDesc = gsap.timeline({
    scrollTrigger:{
        trigger:".event-desc",
        start:"top center",
        // markers:true
    }
});

eventDesc.from(".event-desc h1",{
    yPercent:100,
    duration:0.5,
    ease:"sine.in"

}).from(".event-desc p",{
    opacity:0,
    duration:.6
})


// gsap.from(".card",{
//     stagger:.3,
//     yPercent:100,
//     duration:0.5,
//     easy:"sine.in",
//         scrollTrigger:{
//             trigger:'.cards  ',
//             start:'top center',
//             markers:true,
//         }
// })



const cardsTl = gsap.timeline({
    scrollTrigger:{
        trigger:".card-head",
        start:"top center",
        // markers:true
    }
});

cardsTl.from(".card",{
    stagger:.3,
    yPercent:100,
    duration:.5,
    opacity:0,

})


const trustedTl = gsap.timeline({
    scrollTrigger:{
        trigger:".trusted",
        start:"top center",
        // markers:true
    }
})

 trustedTl.from(".trusted",{
    opacity:0,
 }).from(".trusted h1",{
    yPercent:100,
    opacity:0,
 }).from(".trusted-desc-1",{
    opacity:0,
 },"startWithHeading").from(".trusted-desc-2",{
    opacity:0,
 },"startWithHeading").from(".profile",{
    opacity:0,
 },"startWithHeading")


 
 const caseStudies = gsap.timeline({
    scrollTrigger:{
        trigger:".case-studies",
        start:"top center",
        // markers:true
    }
})

 caseStudies.from(".case-studies-head h1",{
    yPercent:100,
    duration:.5

 }).from(".case-studies p",{
    opacity:0,
    duration:0.3,
 }).from('.paris-expo',{
    yPercent:50,
    opacity:0,
    duration:0.5,
    ease:"sine.in",
 })

gsap.from(".contact-section",{
    stagger:.3,
    yPercent:200,
    duration:0.5,
    easy:"sine.in",
        scrollTrigger:{
            trigger:'.cotact-section  ',
            start:'top center',
            // markers:true,
        }
})



const footerSectiontl = gsap.timeline({
    scrollTrigger:{
        trigger:"#contact",
        start:"top bottom",
        // markers:true
    }
})

footerSectiontl.from(".footer-logo",{
    yPercent:100,
    duration:.3
}).from(".footer-sec",{
    // stagger:.3,
    yPercent:100,

}).from(".navigate",{
    // stagger:.5,
    duration:0.3,
    yPercent:100,
    opacity:0,
    ease:"sine.out"
},"startwithnavigation").from(".copyright",{
    duration:0.5,
    opacity:0,
    ease:"sine.out"
},"startwithnavigation")



// About us Animation

// gsap.from(".Welcome",{
//     // stagger:.3,
//     yPercent:100,
//     duration:0.5,
//     easy:"sine.in",
//         scrollTrigger:{
//             trigger:'.welcome  ',
//             start:'top center',
//             markers:true,
//         }
// })

let welcomeTl = gsap.timeline({
    scrollTrigger:{
                    trigger:'.welcome  ',
                    start:'top center',
                    // markers:true,
                }
})

welcomeTl.from(".welcome h1",{
    yPercent:100,
    opacity:0,
    
}).from(".welcome p",{
    opacity:0
}).from(".welcome-section",{
    yPercent:100,
    opacity:0,
    duration:.3
})


let ourStorytl = gsap.timeline({
    scrollTrigger:{
        trigger:".our-story",
        start:"top center",
        // markers:true
    }
})
 
ourStorytl.from(".our-story h1",{
    yPercent:100,
    opacity:0,
    duration:.5
}).from(".our-story span",{
    opacity:0
}).from(".evolution-sec1",{
    // yPercent:100,
    opacity:0,
    duration:.5
},"start").from(".evolution-section img",{
    opacity:0,
    duration:.5

},"start").from(".our-section h1",{
    yPercent:100,
    opacity:0,
    ease:"sine-in",
    // duration:.5
}).from(".our-section span",{
    opacity:0
}).from(".our-mission h1",{
    yPercent:100,
    opacity:0,
    duration:.5,
    ease: "sine-in"
 }).from(".our-mission span",{
    opacity:0
 }).from('.mission-sec1,.mission-sec2,.mission-sec3',{
    yPercent:100,
    opacity:0,
    duration:.5,
    ease:'power3',
    // stagger:.3
 })
 
 gsap.from('.mission2-sec1 , .our-mission button',{
    yPercent:100,
    opacity:0,
    duration:.5,
    scrollTrigger:{
        trigger:".our-mission2",
        start:'top center',
        // markers:true

    }
 })

gsap.from('.ourlast-sec,.our-lastsec',{
    opacity:0,
    duration:.5,
    scrollTrigger:{
        trigger:'.ourlast-sec',
        start:'top center',
        // markers:true
    }
})

let leaderTl = gsap.timeline({
    scrollTrigger:{
        trigger:'.leadership',
        start:'top center',
        // markers:true
    }
})
leaderTl.from('.leadership h1',{
    yPercent:100,
    opacity:0,
    duration:.3,
    ease:'power2',

}).from('.leadership span',{
    opacity:0
}).from('.memeber',{
    opacity:0,
    ease:'sine-in',
    // scale:.3,
    stagger:.2,
    duration:.5
})

// Usecases animation

gsap.from(".welcome-sections p",{
    opacity:0,
    scrollTrigger:{
        trigger:'.welcome-sections',
        start:'top center',
        // markers:true
    }

})


let exploreTl = gsap.timeline({
    scrollTrigger:{
        trigger:".Explore-sections",
        start:'top center',
        // markers:true
    }
})

exploreTl.from('.Explore-sections h1',{
    yPercent:100,
    opacity:0
}).from('.Explore-sections p , .Explore-sec2',{
    opacity:0
})

gsap.from('.searches .search-sec1',{
    yPercent:100,
    opacity:0,
    duration:.5,
    stagger:.4,
    scrollTrigger:{
        trigger:'.searches',
        start:'top center',
        // markers:true
    }
},'start')
gsap.from('.searches2 .search-sec1',{
    yPercent:100,
    opacity:0,
    duration:.5,
    stagger:.4,
    scrollTrigger:{
        trigger:'.searches2',
        start:'top center',
        // markers:true
    }
},'start')

gsap.from('.search-button button',{
    opacity:0,
    scrollTrigger:{
        trigger:'.search-button ',
        start:'top center',
        // markers:true
    }
})
