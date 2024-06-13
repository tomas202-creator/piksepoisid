const text = new SplitType('#heading1')

gsap.fromTo('#heading1 .char',{y:130},{
    duration: 0.5,    
    y:0
})

 gsap.fromTo('.box',{y:30, opacity:0},{
     stagger: 0.2,
       delay:.2,
       duration: 0.6,    
       y: 0,
       opacity:1,
})

const text1 = new SplitType('#heading2')

gsap.fromTo('#heading2 .char',{y:130},{
    duration: 0.5,    
    y:0
})
const text2 = new SplitType('#heading')

gsap.fromTo('#heading .char',{y:230},{
    duration: 0.8,    
    y:0
})
gsap.fromTo('#text1',{opacity:0},{
    delay:0.9,
    duration: 1,    
    opacity:1
})
let heading3 = gsap.utils.toArray('#heading3')

heading3.forEach(item => {
    gsap.fromTo(item,{x:-100, opacity:0},{
     ease: "power3.inOut",
     stagger: 0.1,
       delay:0.2,
       duration: 0.8, 
       x:0,   
       opacity:1,
         scrollTrigger:{
           trigger: item,
           start: '100 bottom',
           scrub: false,
           markers: false,
           once: true


      }
    })
  })
gsap.fromTo('#heading3',{},{
})

