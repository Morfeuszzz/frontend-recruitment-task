let buttons = document.querySelectorAll(".button");
let counter = 0;
document.cookie = "counter =" + 0;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        
        counter += 1;
        console.log(counter);
        // alert("dupa");
        document.querySelector("#popup-window").classList.add("active");
        document.querySelector("#popup-window").classList.remove("inactive");
        document.querySelector("#overlay").classList.add("active");
        document.querySelector("#overlay").classList.remove("inactive");
        document.getElementById("popup-content").innerText = `You have clicked ${counter} times to related button.`;

        document.cookie = "counter ="+ counter;
        console.log(document.cookie);
        // or use return fuction to return popup-content id with counter inside
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