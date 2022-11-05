//for hamburger menu
const button = document.querySelector('.hamburger');
const menu = document.querySelector('.topnav'); 

button.addEventListener('click', ()=> {
  menu.classList.toggle('hidden')
});

//banner animation
const textPromo = document.querySelector('.textPromo');

const observer = new IntersectionObserver((entries,observer) => {
   
    entries.forEach (entry => {
        const intersecting = entry.isIntersecting;
        if (intersecting) {
            entry.target.classList.add("effect");
        } else { 
        entry.target.classList.remove("effect");}
    });
},
{rootMargin:"-50px"}
);

observer.observe(textPromo);

//menu animation
const subMenu = document.querySelectorAll('.submenu');

const observerMenu = new IntersectionObserver((entries,observer) => {
   
    entries.forEach (entry => {
        const intersecting = entry.isIntersecting;
        if (intersecting) {
            entry.target.classList.add("effectmenu");
        } else { 
        entry.target.classList.remove("effectmenu");}
    });
}
);

subMenu.forEach((el) => observerMenu.observe(el));

//content animation
const subContent = document.querySelectorAll('.subcontent');
const observerContent = new IntersectionObserver((entries,observer) => {
   
    entries.forEach (entry => {
        const intersecting = entry.isIntersecting;
        if (intersecting) {
            entry.target.classList.add("effectcontent");
        } else { 
        entry.target.classList.remove("effectcontent");}
    });
}
);

subContent.forEach((el) => observerContent.observe(el));