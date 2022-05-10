let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/lin.png'){
        myImage.setAttribute('src', 'images/zhan.jpeg');
    } else {
        myImage.setAttribute('src', 'images/lin.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('Please enter your name');
    if(!myName){
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'I\'m Lin Zhaomin.Nice to meet you, ' + myName;
    }
}

if(!localStorage.getItem('name')){
    setUserName();
} else {
    let storedName = localStorage.getItem('name')
    myHeading.textContent = 'I\'m Lin Zhaomin.Nice to meet you, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}