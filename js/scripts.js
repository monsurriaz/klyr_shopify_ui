
document.addEventListener("DOMContentLoaded", function () {
  
  // product slider js 
let swiper = new Swiper(".ff-product-slider", {
  slidesPerView: 2.5,
  spaceBetween: 8,
  pagination: {
    el: ".ff-pagination",
    type: "progressbar"
  },
  breakpoints: {
    0: {
      slidesPerView: 1.5,
      spaceBetween: 8
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 8
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 8
    },
    1200: {
      slidesPerView: 2.5,
      spaceBetween: 8
    }
  }
});

// accordion js 
function setupAccordions(containerSelector) {
	const accordions = document.querySelectorAll(`${containerSelector} .accordion`);

	const openAccordion = (accordion) => {
		const content = accordion.querySelector(".accordion__content");
		accordion.classList.add("accordion__active");
		content.style.maxHeight = content.scrollHeight + "px";
	};

	const closeAccordion = (accordion) => {
		const content = accordion.querySelector(".accordion__content");
		accordion.classList.remove("accordion__active");
		content.style.maxHeight = null;
	};

	accordions.forEach((accordion) => {
		const intro = accordion.querySelector(".accordion__intro");
		const content = accordion.querySelector(".accordion__content");

		intro.onclick = () => {
			if (content.style.maxHeight) {
				closeAccordion(accordion);
			} else {
				accordions.forEach((acc) => closeAccordion(acc));
				openAccordion(accordion);
			}
		};
	});

	if (accordions.length > 0) {
		openAccordion(accordions[0]);
	}
}

// Call this function for each accordion section separately
setupAccordions(".product-main-faq"); 
setupAccordions(".product-main-faq02"); 
setupAccordions(".footer-links-acc");  




// Offcanvas sidebar
document.querySelectorAll(".menu-toggle").forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetId = btn.getAttribute("data-target");
    document.getElementById(targetId).classList.add("active");

    // Activate related overlay
    document.querySelector(`.overlay[data-target="${targetId}"]`).classList.add("active");
  });
});

// Close sidebar
document.querySelectorAll(".close-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetId = btn.getAttribute("data-target");
    document.getElementById(targetId).classList.remove("active");

    // Deactivate related overlay
    document.querySelector(`.overlay[data-target="${targetId}"]`).classList.remove("active");
  });
});

// Close on overlay click
document.querySelectorAll(".overlay").forEach((overlay) => {
  overlay.addEventListener("click", () => {
    const targetId = overlay.getAttribute("data-target");
    document.getElementById(targetId).classList.remove("active");
    overlay.classList.remove("active");
  });
});


// product increment decrement
function incrementValue(e) {
  e.preventDefault();
  const fieldName = e.target.getAttribute('data-field');
  const parent = e.target.closest('.input-group');
  const input = parent.querySelector(`input[name="${fieldName}"]`);
  const currentVal = parseInt(input.value, 10);

  input.value = isNaN(currentVal) ? 0 : currentVal + 1;
}

function decrementValue(e) {
  e.preventDefault();
  const fieldName = e.target.getAttribute('data-field');
  const parent = e.target.closest('.input-group');
  const input = parent.querySelector(`input[name="${fieldName}"]`);
  const currentVal = parseInt(input.value, 10);

  input.value = !isNaN(currentVal) && currentVal > 0 ? currentVal - 1 : 0;
}

document.querySelectorAll('.input-group').forEach(group => {
  group.addEventListener('click', function (e) {
    if (e.target.classList.contains('button-plus')) {
      incrementValue(e);
    } else if (e.target.classList.contains('button-minus')) {
      decrementValue(e);
    }
  });
});


// sidebar product slider js
let swiper2 = new Swiper(".sd-product-slider", {
  slidesPerView: 3,
  spaceBetween: 4,
  pagination: {
    el: ".sd-pagination",
    type: "progressbar"
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    0: {
      slidesPerView: 2.5,
      spaceBetween: 4
    },
    1200: {
      slidesPerView: 2.5,
      spaceBetween: 4
    }
  }
});


// navbar menu js code
const menuToggle = document.querySelector(".nav-menu-toggle");
const offcanvas = document.getElementById("offcanvas");
const closeBtn = document.querySelector(".close-btn");
const overlay = document.querySelector(".nav-overlay");

menuToggle.addEventListener("click", () => {
  offcanvas.classList.add("active");
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", () => {
  offcanvas.classList.remove("active");
  overlay.classList.remove("active");
  document.body.style.overflow = "";
});

overlay.addEventListener("click", () => {
  offcanvas.classList.remove("active");
  overlay.classList.remove("active");
  document.body.style.overflow = "";
});


// Menu sticky
window.addEventListener("scroll", function () {
  const scrollTopValue = window.scrollY;

  const menuArea = document.querySelector(".header-navbar");

  if (scrollTopValue > 110) {
    menuArea.classList.add("menu-sticky");
  } else {
    menuArea.classList.remove("menu-sticky");
  }
});



// sidebar product slider js
let swiper3 = new Swiper(".single-product-slider", {
  slidesPerView: 1,
  spaceBetween: 0,
  pagination: {
    el: ".sng-slider-pagination",
    type: "progressbar"
  },
  navigation: {
    nextEl: ".sng-slider-next",
    prevEl: ".sng-slider-prev"
  }
  
});

// find your shade modal
  const openBtn = document.querySelector(".open-modal-btn");
  const modalOverlay = document.getElementById("customModalOverlay");
  const closeButtons = document.querySelectorAll(".custom-close-btn, .custom-modal-close");

  openBtn.addEventListener("click", () => {
    modalOverlay.style.display = "flex";
    document.body.style.overflow = "hidden";
  });

  closeButtons.forEach((btn) =>
    btn.addEventListener("click", () => {
      modalOverlay.style.display = "none";
      document.body.style.overflow = "";
    })
  );

  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.style.display = "none";
      document.body.style.overflow = "";
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      modalOverlay.style.display = "none";
      document.body.style.overflow = "";
    }
  });


  // bundle selector js
  const cards = document.querySelectorAll(".single-bundle-card");
  const twoOptionBox = document.querySelector(".but-two-option");

  cards.forEach(card => {
    card.addEventListener("click", function () {
      cards.forEach(c => c.classList.remove("active"));

      this.classList.add("active");

      if (this.dataset.option === "two") {
        twoOptionBox.style.display = "block";
      } else {
        twoOptionBox.style.display = "none";
      }
    });
  });



//  tab js 
  const tabLinks = document.querySelectorAll(".tab-link");
  const tabContents = document.querySelectorAll(".tab-content");

  tabLinks.forEach(function (tab) {
    tab.addEventListener("click", function () {
      const tabId = this.getAttribute("data-tab");

      tabLinks.forEach(t => t.classList.remove("active"));
      tabContents.forEach(c => c.classList.remove("active"));

      this.classList.add("active");
      document.getElementById(tabId).classList.add("active");
    });
  });


  // show more less content js
  const toggleButtons = document.querySelectorAll(".toggle-btn");

toggleButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const tabContent = btn.closest(".tab-content"); 
    const tabInner = btn.closest('.tab-inner');
    const description = tabInner.querySelector(".tab-description");
    const label = btn.querySelector(".label");

    description.classList.toggle("expanded");
    btn.classList.toggle("active");

    if (description.classList.contains("expanded")) {
      label.textContent = "SHOW LESS";
      tabContent.classList.add("after-none"); 
    } else {
      label.textContent = "SHOW MORE";
      tabContent.classList.remove("after-none"); 
    }
  });
});


  // logo slide cloned
  if (window.matchMedia("(max-width: 575px)").matches) {
    const logoContainer = document.querySelector(".brands-logos-inner");

    if (!logoContainer.classList.contains("cloned")) {
      const clone = logoContainer.cloneNode(true);
      clone.classList.add("cloned");
      logoContainer.parentElement.appendChild(clone);
    }
  }


// pp-product-slider js 
let swiper4 = new Swiper(".pp-product-slider", {
  slidesPerView: 2.5,
  spaceBetween: 8,
  pagination: {
    el: ".pp-product-pagination",
    type: "progressbar"
  },
  breakpoints: {
    0: {
      slidesPerView: 1.5,
      spaceBetween: 8
    },
    575: {
      slidesPerView: 2,
      spaceBetween: 8
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 8
    },
    1200: {
      slidesPerView: 3.5,
      spaceBetween: 8
    }
  }
});







});



