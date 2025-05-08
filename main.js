

/*==============================navbar styles================================*/
const toggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  const socials = document.querySelector('.nav__socials');
  const navbar = document.querySelector('.navbar');

  // Hamburger toggle
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    navLinks.classList.toggle('show');
    socials.classList.toggle('show');
  });

  //*==========================Scroll behavior==============================*/
  let lastScrollTop = 0;

  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (window.innerWidth > 900) { // Only apply on desktop
      if (scrollTop > lastScrollTop) {
        // scrolling down
        navLinks.style.opacity = "0";
        navLinks.style.pointerEvents = "none";
      } else {
        // scrolling up
        navLinks.style.opacity = "1";
        navLinks.style.pointerEvents = "auto";
      }
    }
lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // for mobile or negative scrolling
  });

/*========================reecipes-section__slider===============================*/
let currentSlide = 1;
  showSlide(currentSlide);

  function changeSlide(n) {
    showSlide(currentSlide += n);
  }

  function setSlide(n) {
    showSlide(currentSlide = n);
  }
function showSlide(n) {
const slides = document.getElementsByClassName("mySlide");
const dots = document.getElementsByClassName("dot");
if (n > slides.length) currentSlide = 1;
if (n < 1) currentSlide = slides.length;
for (let i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}
for (let i = 0; i < dots.length; i++) {
dots[i].className = dots[i].className.replace(" active", "");
}
slides[currentSlide - 1].style.display = "block";
dots[currentSlide - 1].className += " active";
  }

/*===========================portfolio scroll effect==========================*/
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
}, {
  threshold: 0.2,
});

const imageContainers = document.querySelectorAll('.image-container');
imageContainers.forEach(container => {
  observer.observe(container);
});
/*==========================portfolio-tabs============================*/
document.addEventListener('DOMContentLoaded', function() {
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');
tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

               tab.classList.add('active');

            const tabId = tab.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    tabs[0].click();
});


window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.fade-in');
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
});    
function myFunction() {
    var element = document.portfolio;
    element.classList.toggle("dark-mode");
  }
  +
/*==================appear==============================*/
function toggleReadMore() {
  var dots = document.getElementById("dots");
  var more = document.getElementById("more");
  var btn = document.getElementById("myBtn");

  if (more.style.display === "inline") {
    more.style.display = "none";
    dots.style.display = "inline";
    btn.textContent = "Read more";
  } else {
    more.style.display = "inline";
    dots.style.display = "none";
    btn.textContent = "Read less";
  }
}
