/*=========== START SHOW MENU ============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
/*=========== END SHOW MENU ============*/
///////////////////////////////////////////

/*======== START ROMVE MENU MOBILE ==========*/
const navLink = document.querySelectorAll('.nav--link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*========= END ROMVE MENU MOBILE ==========*/

/*========= START SWIPER PROJECTS ==========*/
 let swiperProjects = new Swiper(".projects--container", {
   loop: true,
   spaceBetween: 24,
   
   
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
   pagination: {
     el: ".swiper-pagination",
   },
   breakpoints: {
     1200: {
       slidesPerView: 2,
       spaceBetween: -56,
     },
   },
 });
/*========= END SWIPER PROJECTS ==========*/

/*====== START SWIPER TESTIMONIAL =======*/
let swiperTestimonal = new Swiper(".testimonial--container", {
  grabCursor: true,
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
});
/*====== END SWIPER TESTIMONIAL =======*/

/*========= START EMAIL JS ==========*/

const contactForm = document.getElementById('contact-form'),
   contactName = document.getElementById('contact-name'),
   contactEmail = document.getElementById('contact-email'),
   contactProject = document.getElementById('contact-project'),
   contactMessage = document.getElementById('contact-message') 
   
   
   
 const sendEmail = (e) => {
   e.preventDefault()
   
   //Check if the field has a value //
   if (contactName.value === '' || contactEmail.value === '' || contactProject.value == '') {
     // Add and remove color //
     contactMessage.classList.remove('color-blue')
     contactMessage.classList.add('color-red')
     
     // Show Message //
     contactMessage.textContent = 'Write all the input fields 📝'
   } else {
     // ServiceID - templateID - #form - publickey //
     emailjs.sendForm('service_cte3j6g','template_n081869','#contact-form','bpyOtjpq1Padz73NN')
     .then(() => {
       //Show Message Color // 
       contactMessage.classList.add('color-blue')
       contactMessage.textContent = 'Message Sent ✅'
       
       // Remove Message After Five Seconds //
       setTimeout(() => {
         contactMessage.textContent = ''
       }, 5000)
     }, (error) => {
       alert('OOPS! SOMETHING HAS FAILED...', error)
     })
     //The clear Imput field //
     contactName.value = ''
     contactEmail.value = ''
     contactProject.value = ''
   }
 }
 contactForm.addEventListener('submit', sendEmail)
/*========= END EMAIL JS ==========*/

/*==== START SCROLL SECTION ACTIVE LINK ====*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav--menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)
/*==== END SCROLL SECTION ACTIVE LINK ====*/

/*========= START SHOW SCROLL UP ==========*/
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
/*========= END SHOW SCROLL UP ==========*/

/*========= START DARK LIGHT THEME ==========*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'fa-regularfa-moon'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-regular fa-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'fa-regular fa-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*========= END DARK LIGHT THEME ==========*/
/*========= START Change Background Header ==========*/
const scrollHeader = () => {
  const header = document.getElementById('header');
  // When the scroll is greater than 50 viewport height , add the scroll-headrer class to the header tag //
  this.scrollY >= 50 ? header.classList.add('bg-header') : header.classList.remove('bg-header');

}
window.addEventListener('scroll', scrollHeader);
/*========= END Change Background Header ==========*/
/*========= START Scroll Reveal Animation ==========*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: '2500',
  delay: '400',
  distance: '60px',
  //reset: 'true',     // for Animation //
})

sr.reveal('.home--data, .projects--container, .testimonial--container, .footer--container');
sr.reveal('.home--info div', {delay: 600, origin: 'bottom', interval: 100});
sr.reveal('.skills--container:nth-child(1), .contact--content:nth-child(1)', {origin: 'right'});
sr.reveal('.skills--container:nth-child(2), .contact--content:nth-child(2)', {origin: 'left'});
sr.reveal('.qualification--content, .services--card', {interval: 100});

/*========= END Scroll Reveal Animation ==========*/
