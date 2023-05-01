const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const manFrames = 300;

const currentFrame = (index) => `./images/${(index + 1).toString()}.png`;
const images = [];
let man = { frame: 0 };

for (let i = 0; i < manFrames; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  images.push(img);
}

gsap.to(man, {
  frame: manFrames - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
    scrub: true,
    pin: "canvas",
    end: "500%",
  },
  onUpdate: render,
});

images[0].onload = render;

function render() {
  context.canvas.width = images[0].width;
  context.canvas.height = images[0].height;
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[man.frame], 0, 0);
}

// window.addEventListener('resize', ()=>{
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

// })

gsap.to("#page1", {
  scrollTrigger: {
    trigger: "#page1",
    start: "top top",
    end: "bottom top",
    pin: true,
    scroller: `#main`,
  },
});
gsap.to("#page2", {
  scrollTrigger: {
    trigger: "#page2",
    start: "top top",
    end: "bottom top",
    pin: true,
    scroller: `#main`,
  },
});
gsap.to("#page3", {
  scrollTrigger: {
    trigger: "#page3",
    start: "top top",
    end: "bottom top",
    pin: true,
    scroller: `#main`,
  },
});

gsap.fromTo(
  "#head",
  {
    opacity: 1,
  },
  {
    opacity: 0,
    scrollTrigger: {
      scrub: true,
      start: "15%",
      end: "20%",
    },
    onComplete: () => {
      gsap.to("#head", {
        opacity: 0,
      });
    },
  }
);

gsap.fromTo(
  "#card-first",
  {
    opacity: 0,
    scale: 0.2,
  },
  {
    opacity: 1,
    scale: 1,
    scrollTrigger: {
      scrub: true,
      start: "40%",
      end: "80%",
    },
    onComplete: () => {
      gsap.to("#card-first", {
        opacity: 0,
      });
    },
  }
);

gsap.fromTo(
  "#card-sec",{
  opacity: 0,
},{
  opacity: 1,
  scrollTrigger:{
    scrub: true,
    start: "top top",
    end: "+=700",
  },
  onComplete: () => {
    gsap.to("#card-sec", {
      opacity: 0,
    })
  }
}
)

// console.log(window.location);
