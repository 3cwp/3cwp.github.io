const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/ow-tennis.webp") {
        myImage.setAttribute("src", "images/fish.webp");
    } else {
        myImage.setAttribute("src", "images/ow-tennis.webp");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Tennisschule Oliver Wenger, ${myName}`;
  }
}

  
if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Tennisschule Oliver Wenger, ${storedName}`;
  }
  
  
  myButton.onclick = () => {
    setUserName();
    };

