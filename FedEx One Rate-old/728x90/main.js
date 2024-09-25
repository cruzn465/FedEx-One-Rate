var tl = new TimelineMax({ onComplete: endFrame, repeat: 0, repeatDelay: 3 });
window.onload = function () {
  initAd();
};

function endFrame() {
  console.log("endFrame()");
}


function initAd() {

  document.getElementById("banner").addEventListener('mouseover', ctaOver, false);
  document.getElementById("banner").addEventListener('mouseout', ctaOut, false);

  // Helper function
  let domReady = (cb) => {
    document.readyState === 'interactive' || document.readyState === 'complete'
      ? cb()
      : document.addEventListener('DOMContentLoaded', cb);
  };

  domReady(() => {
    // Display body when DOM is loaded
    document.body.style.visibility = 'visible';
  });

  //---------- START ANIMATION ------------
  tl.addLabel("start")
    .set("#c1_a, #c1_b, #c2_a, #c2_b, #legal, #ctaCopy, #ctaArrow", { opacity: 0, force3D: true })
    .set(" #c1_a, #c1_b, #c2_a, #c2_b", { x: 80, force3D: true })


  // ----------Frame 1 ------------
  tl.addLabel("frame1", "")
    .to('#logo', 0, { opacity: 1, ease: Power4.easeInOut }, "frame1")
    .staggerTo("#c1_a, #c1_b", .5, { x: 0, opacity: 1, ease: Quad.easeOut }, .2, "frame1+=0.5")
    .to("#legal", .5, { opacity: 1, ease: Quad.easeIn }, "frame1+=1");

  //---------- Frame 2 ------------
  tl.addLabel("frame2", "3")
    .to(' #c1_a, #c1_b', 0.5, { opacity: 0, ease: Power4.easeInOut }, "frame2+=0")
    .staggerTo("#c2_a, #c2_b", .5, { x: "0", opacity: 1, ease: Quad.easeOut }, .2, "frame2+=0.8")
    .staggerTo("#ctaCopy, #ctaArrow", 1.0, { x: "0", opacity: 1, ease: Power1.easeInOut }, 0, "frame2+=1.5")
    .fromTo('#ctaArrow', .5, { x: "0" }, { rotationZ: '0deg', x: 10, ease: Quad.easeOut, force3D: true }, "frame2+=2.5")
    .to('#ctaArrow', .3, { rotationZ: '0deg', x: 0, ease: Quad.easeIn }, "frame2+=3");

  var ctaArrow = document.getElementById("ctaArrow");

  function ctaOver(e) {
    if (ctaArrow.style.opacity == 1) {
      TweenLite.fromTo('#ctaArrow', .5, { rotationZ: '0deg' }, { rotationZ: '0deg', x: 10, ease: Quad.easeOut, force3D: true });
      // tl
      //   .fromTo(" #ctaArrow", 0.5, { x: 0 }, { x: 10, ease: Power2.easeOut, force3D: true })
    }
  }

  function ctaOut(e) {
    if (ctaArrow.style.opacity == 1) {
      TweenLite.to('#ctaArrow', .3, { rotationZ: '0deg', x: 0, ease: Quad.easeIn });
      // tl
      //   .to(" #ctaArrow", 0.3, { x: 0, ease: Power1.easeIn, force3D: true })
    }

  }

}
