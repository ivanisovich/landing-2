let navigation = document.querySelector(".navigation");
let checkout = document.querySelector(".checkout");
let shipment = document.querySelector(".shipment__inner");
let footerText = document.querySelector(".footer__text");

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

document.addEventListener("click", (e) => {
  if (e.target.closest(".header__burger")) {
    navigation.classList.add("visible");
    document.querySelector("body").classList.add("no-scroll");
  }

  if (
    e.target.closest(".navigation__close-button") ||
    e.target.closest(".navigation__link")
  ) {
    navigation.classList.remove("visible");
    document.querySelector("body").classList.remove("no-scroll");
  }

  if (e.target.className == "sale__button") {
    checkout.classList.add("visible");
  }

  if (e.target.closest(".checkout__close-button")) {
    checkout.classList.remove("visible");
  }

  if (e.target.closest(".shipment__title-wrapper")) {
    if (shipment.classList.contains("visible")) {
      shipment.classList.remove("visible");
      document.querySelector(".shipment__arrow").style.transform =
        "rotate(180deg)";
    } else {
      shipment.classList.add("visible");
      document.querySelector(".shipment__arrow").style.transform =
        "rotate(0deg)";
    }
  }

  if (e.target.className == "footer__button") {
    if (footerText.classList.contains("hidden")) {
      footerText.classList.remove("hidden");
      e.target.innerText = "Read less";
    } else {
      footerText.classList.add("hidden");
      e.target.innerText = "Read more";
    }
  }
});

function countdown(startTime) {
  let parts = startTime.split(":");
  let hours = parseInt(parts[0], 10);
  let minutes = parseInt(parts[1], 10);
  let seconds = parseInt(parts[2], 10);
  let totalSeconds = hours * 3600 + minutes * 60 + seconds;

  let timer = setInterval(function () {
    totalSeconds--;
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds - hours * 3600) / 60);
    let seconds = totalSeconds - hours * 3600 - minutes * 60;

    let formattedTime = [
      hours.toString().padStart(2, "0"),
      minutes.toString().padStart(2, "0"),
      seconds.toString().padStart(2, "0"),
    ].join(":");

    document.querySelector(".sale__time").innerText = formattedTime;
    if (totalSeconds <= 0) {
      clearInterval(timer);
      console.log("Время вышло!");
    }
  }, 1000);
}

countdown("17:34:53");
