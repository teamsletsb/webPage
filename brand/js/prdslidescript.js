function init() {
  //GSDevTools.create();

  gsap.set(".cards", { autoAlpha: 1 });
  gsap.set(".card", { x: "-100%" });

  let currentStep = 0;
  const totalSlides = document.querySelectorAll(".card").length;

  const wrapper = gsap.utils.wrap(0, totalSlides);

  createTimelineIn("next", currentStep);

  function createTimelineIn(direction, index) {
    const goPrev = direction === "prev";

    const element = document.querySelector("div.card0" + index);
    const cardClasses = element.className.split(" ");
    const cardClass = cardClasses[1];
    const title = element.querySelector(".card-title");
    const subtitle = element.querySelector(".card-subtitle");
    const button = element.querySelector(".button-container");
    const splitHeadline = new SplitText(title, { type: "words, chars" });
    const chars = splitHeadline.chars;

    const letters = goPrev ? chars.reverse() : chars;

    const tlIn = gsap.timeline({
      defaults: {
        modifiers: {
          x: gsap.utils.unitize(function (x) {
            return goPrev ? Math.abs(x) : x;
          }),

          rotation: gsap.utils.unitize(function (rotation) {
            return goPrev ? -rotation : rotation;
          })
        }
      }
    });
    tlIn
      .fromTo(
        element,
        {
          autoAlpha: 0,
          x: "-100%"
        },
        {
          duration: 0.7,
          x: 0,
          autoAlpha: 1,
          onStart: updateClass,
          onStartParams: [cardClass]
        }
      )
      .from(letters, {
        x: -20,
        y: 30,
        autoAlpha: 0,
        scale: 0.1,
        rotation: "60deg",
        transformOrigin: "0 100% 0",
        stagger: 0.02,
        duration: 0.25,
        ease: Power1.out
      })
      .from(
        [subtitle, button],
        {
          duration: 0.2,
          x: -20,
          autoAlpha: 0,
          stagger: 0.1
        },
        "-=0.1"
      );

    return tlIn;
  }

  function createTimelineOut(direction, index) {
    const goPrev = direction === "prev";
    const element = document.querySelector("div.card0" + index);
    const tlOut = gsap.timeline();
    tlOut.to(element, {
      duration: 0.7,
      x: 250,
      autoAlpha: 0,
      modifiers: {
        x: gsap.utils.unitize(function (x) {
          return goPrev ? -x : x;
        })
      },
      ease: "back.in(2)"
    });
    return tlOut;
  }

  function updateCurrentStep(goToIndex) {
    currentStep = goToIndex;

    document.querySelectorAll(".dot").forEach(function (element, index) {
      element.setAttribute("class", "dot");
      if (index === currentStep) {
        element.classList.add("active");
      }
    });
    positionDot();
  }

  function transition(direction, toIndex) {
    const tlTransition = gsap.timeline({
      onStart: function () {
        updateCurrentStep(toIndex);
      }
    });

    const tlOut = createTimelineOut(direction, currentStep);
    const tlIn = createTimelineIn(direction, toIndex);

    tlTransition.add(tlOut).add(tlIn);

    return tlTransition;
  }

  function isTweening() {
    return gsap.isTweening(".card");
  }

  document.querySelector("button.next").addEventListener("click", function (e) {
    e.preventDefault();

    const nextStep = wrapper(currentStep + 1);

    !isTweening() && transition("next", nextStep);
  });

  document.querySelector("button.prev").addEventListener("click", function (e) {
    e.preventDefault();

    const prevStep = wrapper(currentStep - 1);

    !isTweening() && transition("prev", prevStep);
  });

  function updateClass(cardClass) {
    document.querySelector("body").className = cardClass;
  }

  function createNavigation() {
    const newDiv = document.createElement("div");
    newDiv.setAttribute("class", "dots");

    const spot = document.createElement("div");
    spot.setAttribute("class", "spot");

    for (let index = 0; index < totalSlides; index++) {
      const element = document.createElement("button");
      const text = document.createTextNode(index);
      element.appendChild(text);
      element.setAttribute("class", "dot");
      if (currentStep === index) {
        element.classList.add("active");
      }

      element.addEventListener("click", function () {
        if (!isTweening() && currentStep !== index) {
          const direction = index > currentStep ? "next" : "prev";
          transition(direction, index);
        }
      });
      newDiv.appendChild(element);
    }

    //append to container
    newDiv.appendChild(spot);
    document.querySelector(".cards").appendChild(newDiv);
    positionDot();
  }

  function positionDot() {
    const activeDotX = document.querySelector(".dot.active").offsetLeft;
    console.log(activeDotX);
    const spot = document.querySelector(".spot");
    const spotX = spot.offsetLeft;
    const destinationX = Math.round(activeDotX - spotX + 5);

    const dotTl = gsap.timeline();
    dotTl
      .to(spot, {
        duration: 0.4,
        x: destinationX,
        scale: 2.5,
        ease: "power1.Out"
      })
      .to(spot, {
        duration: 0.2,
        scale: 1,
        ease: "power1.in"
      });
  }

  createNavigation();
}

window.addEventListener("load", function () {
  init();
});