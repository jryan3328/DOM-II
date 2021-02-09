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

//TURNS INTRO H2 BLUE AND GIVES BACKGROUND
const topHeadline = document.querySelector('.intro h2');
    document.addEventListener('contextmenu', event =>{
        topHeadline.style.color = 'blue';
        topHeadline.style.border = 'solid';
    })


//TURNS TOP PARAGRAPH GRAY WHEN YOU SCROLL
const topPara = document.querySelector('.intro p');

document.addEventListener('scroll', function(){
    topPara.style.color = 'blue';
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
    botButton.style.backgroundColor = 'green';
})

topPara.addEventListener('select', event => {
    alert('STOP SELECTING  ME');

})