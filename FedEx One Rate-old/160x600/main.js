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
    .set("#c1_a, #c1_b, #c1_c, #c1_d, #c1_e, #c1_f, #c1_g, #c2_a, #c2_b, #c2_c, #c2_d, #c2_e, #c2_f,#legal, #ctaCopy, #ctaArrow", { opacity: 0, force3D: true })
    .set(" #c1_a, #c1_b, #c1_c, #c1_d, #c1_e, #c1_f, #c1_g, #c2_a, #c2_b, #c2_c, #c2_d, #c2_e, #c2_f", { x: 80, force3D: true })


  // ----------Frame 1 ------------
  tl.addLabel("frame1", "")
    .to('#logo', 0, { opacity: 1, ease: Power4.easeInOut }, "frame1")
    .to('#c1_a', 0.5, { x: 0, opacity: 1, ease: Quad.easeOut }, "frame1+=0.5")
    .staggerTo("#c1_b, #c1_c, #c1_d, #c1_e, #c1_f, #c1_g", .5, { x: 0, opacity: 1, ease: Quad.easeOut }, .1, "frame1+=0.8")
    .to('#legal', 0.5, { x: 0, opacity: 1, ease: Quad.easeOut }, "frame1+=1.75");

  //---------- Frame 2 ------------
  tl.addLabel("frame2", "3")
    .to(' #c1_a, #c1_b, #c1_c, #c1_d, #c1_e, #c1_f, #c1_g ', 0.5, { opacity: 0, ease: Power4.easeInOut }, "frame2+=0")
    .to('#c2_a', 0.5, { x: 0, opacity: 1, ease: Quad.easeOut }, "frame2+=0.8")
    .staggerTo("#c2_b, #c2_c, #c2_d, #c2_e, #c2_f ", .5, { x: "0", opacity: 1, ease: Quad.easeOut }, .1, "frame2+=1.1")
    .staggerTo("#ctaCopy, #ctaArrow", 1.0, { x: "0", opacity: 1, ease: Power1.easeInOut }, 0, "frame2+=2")
    .fromTo('#ctaArrow', .5, { x: "0" }, { rotationZ: '0deg', x: 5, ease: Quad.easeOut, force3D: true }, "frame2+=3")
    .to('#ctaArrow', .3, { rotationZ: '0deg', x: 0, ease: Quad.easeIn }, "frame2+=3.5");

  var ctaArrow = document.getElementById("ctaArrow");

  function ctaOver(e) {
    if (ctaArrow.style.opacity == 1) {
      TweenLite.fromTo('#ctaArrow', .5, { rotationZ: '0deg' }, { rotationZ: '0deg', x: 5, ease: Quad.easeOut, force3D: true });
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
