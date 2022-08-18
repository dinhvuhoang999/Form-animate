const buttonClickChange = document.querySelector(".button-submit-overlay");

const overlayChange = document.querySelector(".overlay-form");
const formWrapper = document.querySelector(".form-wrapper");
let changeText = true;

function changeOverlay() {
    changeText= !changeText;
    overlayChange.classList.toggle("change-side");
    formWrapper.classList.toggle("right-panel-active");
    changeText ? buttonClickChange.innerHTML = "Sign In" : buttonClickChange.innerHTML = "Sign Up"
}
