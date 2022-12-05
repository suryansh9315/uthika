import gsap from "gsap"

export const textIntro = (elems) => {
  elems.forEach(element => {
    gsap.fromTo(element.current, {
      opacity: 0,
      y:20
    },{
      opacity:1,
      y:0,
      duration: 1
    });
  })
};

export const textIntro2 = (elems) => {
  elems.forEach(element => {
    gsap.fromTo(element.current, {
      opacity: 0,
      y:30
    },{
      opacity:1,
      y:0,
      duration: 2
    });
  })
};

export const titleIntro = (elems) => {
  elems.forEach(element => {
    gsap.fromTo(element.current, {
      opacity: 0,
      y:100
    },{
      opacity:1,
      y:0,
      duration: 2
    });
  })
};

export const descIntro = (elems) => {
  elems.forEach(element => {
    gsap.fromTo(element.current, {
      opacity: 0,
      y:50
    },{
      opacity:1,
      y:0,
      duration: 2
    });
  })
};
