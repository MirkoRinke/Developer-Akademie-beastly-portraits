// function Template NavContainer
function renderNavContainer() {
  let navContainerRef = document.getElementById("nav_container");
  navContainerRef.innerHTML += renderNavContainerHTML();
}
renderNavContainer();

// function Template Content
function renderContent() {
  let contentRef = document.getElementById("content");
  contentRef.innerHTML += renderContentHTML();
}
renderContent();

// function Template footerContainer
function renderFooterContainer() {
  let footerContainerHTMLRef = document.getElementById("footer_container");
  footerContainerHTMLRef.innerHTML += renderFooterContainerHTML();
}
renderFooterContainer();

// popup Gallery
const popup = document.getElementById("popup");
const popupImage = document.getElementById("popup--image");
const popupTextarea = document.getElementById("popup--textarea");

const popupClose = document.querySelector(".popup--close");
const images = document.querySelectorAll(".gallery_container--grid--img");
const backButton = document.getElementById("popup--back_button");

const forwardButton = document.getElementById("popup--forward_button");

const forwardButtonMobile = document.getElementById("popup--forward_button_mobile");

let currentIndex = 0;
// Next Gallery
const nextGalleryButton = document.getElementById("gallery_container--next_gallery");
const nextGallery = document.querySelectorAll(".gallery_container--grid");
let galleryIndex = 0;
// Footer popup
const popupFooter = document.getElementById("popupFooter");
const popupImageFooter = document.getElementById("popupFooter--image");
const closeFooter = document.querySelector(".popupFooter--close");
const footerImages = document.querySelectorAll(".footer_container--grid--img");

const popupFooterTextarea = document.getElementById("popupFooter--textarea");

// popup Gallery
function showImage(index) {
  currentIndex = index;
  popupImage.src = images[currentIndex].src;
  popupImage.alt = images[currentIndex].alt; //!
  popup.style.display = "flex"; // https://www.w3schools.com/jsref/dom_obj_all.asp
  nextGalleryButton.style.visibility = "hidden"; //
  popupTextarea.innerHTML = popupImage.alt;
}
// https://www.w3schools.com/jsref/jsref_foreach.asp
images.forEach((img, index) => {
  img.addEventListener("click", function () {
    showImage(index);
  });
});
// Forward and back buttons
backButton.addEventListener("click", function () {
  if (currentIndex > 0) {
    showImage(currentIndex - 1);
  } else {
    showImage(images.length - 1); // https://www.w3schools.com/jsref/jsref_length_array.asp
  }
});

forwardButton.addEventListener("click", function () {
  if (currentIndex < images.length - 1) {
    showImage(currentIndex + 1);
  } else {
    showImage(0);
  }
});

forwardButtonMobile.addEventListener("click", function () {
  if (currentIndex < images.length - 1) {
    showImage(currentIndex + 1);
  } else {
    showImage(0);
  }
});

popupClose.addEventListener("click", function () {
  popup.style.display = "none";
  nextGalleryButton.style.visibility = "visible";
});

popup.addEventListener("click", function (event) {
  if (event.target == popup) {
    popup.style.display = "none";
    nextGalleryButton.style.visibility = "visible";
  }
});

// NextGallery
function getNextGallery() {
  if (galleryIndex < nextGallery.length - 1) {
    galleryIndex++;
    setTimeout(() => {
      // https://www.w3schools.com/jsref/met_win_settimeout.asp /  https://www.w3schools.com/js/js_arrow_function.asp
      window.scrollBy(0, 660); // https://www.w3schools.com/jsref/met_win_scrollby.asp
    }, 100);
    nextGallery[galleryIndex].classList.remove("d_none"); //  toggle nextGallery with the matching index
    if (galleryIndex === nextGallery.length - 1) {
      // Hide the button when the last gallery is reached
      nextGalleryButton.classList.add("d_none");
    }
  }
}

// Footer Popup
footerImages.forEach((item) => {
  item.addEventListener("click", function () {
    popupFooter.style.display = "flex";
    popupImageFooter.src = this.src;
    popupImageFooter.alt = this.alt;
    nextGalleryButton.style.visibility = "hidden";
    popupFooterTextarea.innerHTML = popupImageFooter.alt;
  });
});
closeFooter.addEventListener("click", function () {
  popupFooter.style.display = "none";
  nextGalleryButton.style.visibility = "visible";
});
popupFooter.addEventListener("click", function (eventFooter) {
  if (eventFooter.target == popupFooter) {
    popupFooter.style.display = "none";
    nextGalleryButton.style.visibility = "visible";
  }
});
