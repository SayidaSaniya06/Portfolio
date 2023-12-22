// Navbar******************************
document.addEventListener("DOMContentLoaded", function(){
    let nav = document.getElementById("navId");
    let navContent = document.querySelector(".logo a");
    let menubtn = document.querySelector(".menu-btn");
    let cancelbtn = document.querySelector(".cancel-btn");
    let navContentLinks = document.querySelectorAll(".nav-content a");  

    window.onscroll = function(){
        if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
            nav.classList.add("scrolled");
            navContent.style.color = "white";
            navContentLinks.forEach(link => {
                link.style.color = "white";
                menubtn.style.color = "white";
                cancelbtn.style.color = "white";
            });
        } else {
            nav.classList.remove("scrolled");
            navContent.style.color = "#121111";
            navContentLinks.forEach(link => {
                link.style.color = "#121111";
                menubtn.style.color = "#121111";
                cancelbtn.style.color = "#121111";
            });
        }
    };
});
// first skill ***********************
let number=document.getElementById("number");
let counter1=0;
setInterval(() => {
    if(counter1== 90){
        clearInterval();
    }
    else{
        counter1+=1;
        number.innerHTML=counter1 + "%"; 
    }
}, 22);
// second skill ********************
let number2=document.getElementById("number2");
let counter2=0;
setInterval(() => {
    if(counter2== 80){
        clearInterval();
    }
    else{
        counter2+=1;
        number2.innerHTML=counter2 + "%"; 
    }
}, 25);
// third skill ********************
let number3=document.getElementById("number3");
let counter3=0;
setInterval(() => {
    if(counter3== 70){
        clearInterval();
    }
    else{
        counter3+=1;
        number3.innerHTML=counter3+ "%"; 
    }
}, 27);
// Fourth skill ********************
let number4=document.getElementById("number4");
let counter4=0;
setInterval(() => {
    if(counter4== 60){
        clearInterval();
    }
    else{
        counter4+=1;
        number4.innerHTML=counter4+ "%"; 
    }
}, 32);
// Fifth skill ********************
let number5=document.getElementById("number5");
let counter5=0;
setInterval(() => {
    if(counter5== 40){
        clearInterval();
    }
    else{
        counter5+=1;
        number5.innerHTML=counter5+ "%"; 
    }
}, 46);
// Sixth skill ********************
let number6=document.getElementById("number6");
let counter6=0;
setInterval(() => {
    if(counter6== 55){
        clearInterval();
    }
    else{
        counter6+=1;
        number6.innerHTML=counter6+ "%"; 
    }
}, 35);

// Side Navigation Js Code

let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
let navBar = document.querySelector(".navbar");
let body = document.querySelector("body");


menuBtn.onclick = function(){
    menuBtn.style.opacity = "0";
    menuBtn.style.pointerEvents = "none";
    navBar.classList.add("active");
    body.style.overflow = "hidden"

}
cancelBtn.onclick = function(){
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    navBar.classList.remove("active");
    body.style.overflow = "auto"

}
// Side Nav menu close when link opne
let navLinks = document.querySelectorAll(".menu li a");
for (var i= 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click" , ()=>{
        menuBtn.style.opacity = "1";
        menuBtn.style.pointerEvents = "auto";
        navBar.classList.remove("active");
        body.style.overflow = "auto"
    });
}
