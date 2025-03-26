
/*=============== SHOW MENU ===============*/

const navMenu = document.getElementById('nav-menu')
    navToggle = document.getElementById('nav-toggle')
    navClose = document.getElementById('nav-close')
    /*menu show*/
    if(navToggle){
        navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
        })
    }
      /*menu hide*/
    if(navClose){
        navClose.addEventListener('click',()=>{
            navMenu.classList.remove('show-menu')
        })
    }

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav--link')
const linkAction = ()=>{
    const navMenu = document.getElementById('nav-menu')
    //when we click on each navlink ,we remove the show menu class
    navMenu.classList.remove('show-menu')
    }
    navLink.forEach(n=> n.addEventListener('click',linkAction))

/*=============== ADD BLUR HEADER ===============*/

const blurHeader = () =>{
    const header=document.getElementById('header')

    this.scrollY >=50 ? header.classList.add('blur-header')
                        :header.classList.remove('blur-header')
}
window.addEventListener('scroll' , blurHeader)
/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >=350 ? scrollUp.classList.add('show-scroll')
                        :scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll' ,scrollUp)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// Select all sections with an id attribute
const sections = document.querySelectorAll('section[id]');

// Function to handle the scroll event and apply the active class to links
const scrollActive = () => {
  // Get the current scroll position
  const scrollDown = window.scrollY;

  // Loop through all sections
  sections.forEach(current => {
    // Get the height and position of the section
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop;

    // Get the id of the current section
    const sectionId = current.getAttribute('id');

    // Select the corresponding navigation link
    const sectionsClass = document.querySelector('.nav__menu_a[href*=' + sectionId + ']');

    // Check if the scroll position is within the section's top and bottom
    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      // Add the 'active-link' class to the navigation link
      sectionsClass.classList.add('active-link');
    } else {
      // Remove the 'active-link' class if not within the section
      if (sectionsClass) {
        sectionsClass.classList.remove('active-link');
      }
    }
  });
};

// Add an event listener for scroll
window.addEventListener('scroll', scrollActive);


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr =ScrollReveal({
  origin:'top',
  distance: '40px',
  opacity: 1 ,
  scale: 1.1,
  duration: 2500,
  delay: 300,
  // reset: true, 
})

sr.reveal('.home--data, .about--img,.about--data, .visit--data')
sr.reveal('.home--image, .footer--img-1 .footer--img-2', { rotate:{z:-15}})
sr.reveal('.home--cream .about--cream', { rotate:{z:15}})
sr.reveal('.home--footer', { scale:1, origin:'bottom'})
sr.reveal('.new--card:nth-child(1) img', { rotate: {z: -30}, distance: 0 })
sr.reveal('.new--card:nth-child(2) img', { rotate: {z: 15}, distance: 0, delay: 600})
sr.reveal('.new--card:nth-child(3) img', { rotate: {z: -30}, distance: 0 , delay: 900})

sr.reveal('.favorite--card img',{ interval: 100, rotate: {z: 15}, distance: 0})

sr.reveal('.footer--container ',{ scale:1})
