let buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        // alert("dupa");
        document.querySelector("#popup-window").classList.add("active");
        document.querySelector("#popup-window").classList.remove("inactive");
        document.querySelector("#overlay").classList.add("active");
        document.querySelector("#overlay").classList.remove("inactive");
    });
});

// function that close popup window
function closePopupWindow() {
    // document.querySelector('.popup-window').remove();
    document.querySelector("#popup-window").classList.remove("active");
    document.querySelector("#popup-window").classList.add("inactive");
    document.querySelector("#overlay").classList.remove("active");
    document.querySelector("#overlay").classList.add("inactive");
    // document.querySelector(".popup-window").classList.toggle(".active");
    // document.querySelector(".overlay").classList.toggle(".active");
}