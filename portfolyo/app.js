const hamburgerMenu = document.querySelector('#navigation .nav-icon');
const navContent = document.querySelector('#nav-content');
const closeNavButton = document.querySelector('#nav-content .close-btn');
const navLinks = document.querySelectorAll('#nav-content nav ul li a');
const scrollButton = document.querySelector(".scroll-top");

// scroll Button

if(scrollButton){
  window.addEventListener('scroll', ()=> {
    if(pageYOffset > (window.innerHeight * 1.2)){
      scrollButton.style.display="flex";
    }else{
      scrollButton.style.display="none";
    }
  });
  scrollButton.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });
}


//  Menu 
hamburgerMenu.addEventListener('click', ()=>{
  navContent.classList.add('show');
  document.body.style.overflow="hidden";
});
closeNavButton.addEventListener('click', ()=>{
  navContent.classList.remove('show');
  document.body.style.overflow="initial";
});
navLinks.forEach( link => {
  link.addEventListener('click', ()=> {
    navContent.classList.remove('show');
    document.body.style.overflow="initial";
  })
})



// Yazı Animasyonu
const words = ['Front-end Developerım', 'Freelancerım', 'Grafik Tasarımcısıyım', 'Web Tasarımcısıyım',];
const typingElement = document.querySelector('.typing');
let wordIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < words[wordIndex].length) {
    typingElement.textContent += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1000);
  }
}

function erase() {
  if (charIndex > 0) {
    typingElement.textContent = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    wordIndex++;
    if (wordIndex >= words.length) {
      wordIndex = 0;
    }
    setTimeout(type, 500);
  }
}

type();