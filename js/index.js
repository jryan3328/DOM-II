// Your code goes here

// FUN BUS LOGO COLOR CHANGE MOUSEOVER
const logo = document.querySelector('.logo-heading');
logo.addEventListener('mouseover', event => {
   logo.style.color = 'red';
   logo.style.fontSize = '4rem';
});

//COLOR CHANGES BACK ON MOUSELEAVE
logo.addEventListener('mouseleave', event => {
    logo.style.color = 'black';
 });


 // NAVBAR COLOR CHANGE ONCLICK 
const navBar = document.querySelector('.main-navigation')
 navBar.addEventListener('click', function(){
     navBar.style.backgroundColor = 'blue';
 });

//TOP PICTURE TURNS INTO KITTY ON DBLCLICK
const topImg = document.querySelector('.intro img');
topImg.addEventListener('dblclick', function(){
    topImg.src = 'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png';
})


const topHeadline = document.querySelector('.intro h2');
    document.addEventListener('fullscreenchange', event =>{
        topHeadline.style.color = 'blue';
    })


//TURNS TOP PARAGRAPH GRAY WHEN YOU SCROLL
const topPara = document.querySelector('.intro p');

document.addEventListener('scroll', function(){
    topPara.style.color = 'darkgray';
})

//MAKING 'LETS GO' BIGGER AND SMALLER
const sectionHeadlines = document.querySelector('.content-section h2');
    
    document.addEventListener('keydown', event => {
        if(event.key = "l"){
            sectionHeadlines.style.fontSize = '5rem';
        }
    })

// BACK TO SMALL
    document.addEventListener('keyup', event => {
        sectionHeadlines.style.fontSize = '3.5rem';
    })



//BUTTON FONT COLOR CHANGES WHEN ANY KEY IS RELEASED
const botButton = document.querySelector('.btn');
    document.addEventListener('keyup', event => {
    botButton.style.color = 'green';
})