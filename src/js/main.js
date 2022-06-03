let buttons = document.querySelectorAll(".button");

//function that get value of cookie counter
function getCookieValue (name) {
	let value = `; ${document.cookie}`;
	let parts = value.split(`; ${name}=`);
	if (parts.length === 2) {
        return parts.pop().split(';').shift();
    } else {}
}

//function that reset counter to zero 
function resetCounter() {
    document.cookie = "counter=" + 0;
    document.getElementById("popup-content").innerHTML = "You have clicked <strong>" + 0 + " times </strong> to related button.";
}

window.onload = () => {
    
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            let counter = parseInt(getCookieValue('counter'));
            
            if (counter >= 5) {
                document.querySelector("#reset-button").classList.remove("inactive");
                document.querySelector("#reset-button").classList.add("active");
            } else {
                document.querySelector("#reset-button").classList.add("inactive");
                document.querySelector("#reset-button").classList.remove("active");
            }

            counter += 1;
        
            document.querySelector("#popup-window").classList.add("active");
            document.querySelector("#popup-window").classList.remove("inactive");
            document.querySelector("#overlay").classList.add("active");
            document.querySelector("#overlay").classList.remove("inactive");
            document.getElementById("popup-content").innerHTML = "You have clicked <strong>" + `${counter}` + " times </strong> to related button.";

            document.cookie = "counter=" + counter;
        });
    });
}

// function that close popup window
function closePopupWindow() {
    document.querySelector("#popup-window").classList.remove("active");
    document.querySelector("#popup-window").classList.add("inactive");
    document.querySelector("#overlay").classList.remove("active");
    document.querySelector("#overlay").classList.add("inactive");
}