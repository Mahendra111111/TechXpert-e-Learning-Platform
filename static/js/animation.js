document.addEventListener('DOMContentLoaded',
    function () {
        const navItems = document
            .querySelectorAll('.course-item');

        navItems.forEach(item => {
            item.addEventListener('click',
                function () {
                    navItems.forEach(navItem => navItem
                        .classList.remove('active'));
                    this.classList.add('active');
                });
        });
    });


// search 

// Array of course objects, assuming this data is fetched from the website
const courses = [
    { title: 'Web Development Course', content: 'Learn HTML, CSS, and JavaScript', imageUrl: 'https://w0.peakpx.com/wallpaper/59/567/HD-wallpaper-web-designing-training-in-pune-web-design-web-design-training-in-pune-website-design-training-web-development-course-in-pune-web-development-training-in-india-website-design-training-in-india.jpg', url: 'http://127.0.0.1:5500/login/sign-up.html' },
    { title: 'Python Programming', content: 'Intro to Python for beginners', imageUrl: 'https://www.forbes.com/advisor/wp-content/uploads/2023/06/python-coding-graphic.jpeg.jpg', url: 'http://127.0.0.1:5500/login/sign-up.html' },
    { title: 'Advanced Web Development', content: 'Dive into React, Node.js, and more', imageUrl: 'https://www.strivemindz.com/images/offerings/mobile/web-development.jpg', url: 'http://127.0.0.1:5500/login/sign-up.html' },
    // Add more courses here
];

const searchInput = document.getElementById('searchInput');
const popup = document.getElementById('popup');
const results = document.getElementById('results');
const closeButton = document.getElementsByClassName('close-button')[0];

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase().trim();

    results.innerHTML = '';

    if (searchTerm === '') {
        const emptySearchMessage = document.createElement('div');
        emptySearchMessage.textContent = 'Please search for a course.';
        results.appendChild(emptySearchMessage);
        popup.style.display = 'block';
    } else {
        const filteredCourses = courses.filter(course =>
            course.title.toLowerCase().includes(searchTerm)
        );

        if (filteredCourses.length > 0) {
            filteredCourses.forEach(course => {
                const courseCard = document.createElement('div');
                courseCard.classList.add('course-card2');

                const courseImage = document.createElement('img');
                courseImage.classList.add('course-image');
                courseImage.src = course.imageUrl;
                courseImage.alt = course.title;

                const courseDescription = document.createElement('div');
                courseDescription.classList.add('course-description');
                courseDescription.textContent = `${course.title}: ${course.content}`;

                courseCard.appendChild(courseImage);
                courseCard.appendChild(courseDescription);
                courseCard.addEventListener('click', () => {
                    window.location.href = course.url;
                });

                results.appendChild(courseCard);
            });
            popup.style.display = 'block';
        } else {
            const noResultsElement = document.createElement('div');
            noResultsElement.textContent = 'No matching courses found.';
            results.appendChild(noResultsElement);
            popup.style.display = 'block';
        }
    }
});

closeButton.addEventListener('click', () => {
    popup.style.display = 'none';
    results.innerHTML = '';
});

window.addEventListener('click', (event) => {
    if (event.target == popup) {
        popup.style.display = 'none';
        results.innerHTML = '';
    }
});

// profile page

const profileIcon = document.getElementById('profileIcon');
const profilePage = document.getElementById('profilePage');

profileIcon.addEventListener('click', () => {
  profilePage.classList.remove('hidden');
});

window.addEventListener('click', (event) => {
  if (!event.target.closest('#profileIcon') && !event.target.closest('#profilePage')) {
    profilePage.classList.add('hidden');
  }
});


// header slide-show

const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentSlide = 0;

function showSlide(n) {
  slides.forEach((slide, index) => {
    if (index === n) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

showSlide(currentSlide);







// course card slide-show


document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const arrowBtns = document.querySelectorAll(".wrapper i");
  const wrapper = document.querySelector(".wrapper");

  const firstCard = carousel.querySelector(".card");
  const firstCardWidth = firstCard.offsetWidth;

  let isDragging = false,
      startX,
      startScrollLeft,
      timeoutId;

  const dragStart = (e) => {
      isDragging = true;
      carousel.classList.add("dragging");
      startX = e.pageX;
      startScrollLeft = carousel.scrollLeft;
  };

  const dragging = (e) => {
      if (!isDragging) return;

      // Calculate the new scroll position 
      const newScrollLeft = startScrollLeft - (e.pageX - startX);

      // Check if the new scroll position exceeds 
      // the carousel boundaries 
      if (newScrollLeft <= 0 || newScrollLeft >=
          carousel.scrollWidth - carousel.offsetWidth) {

          // If so, prevent further dragging 
          isDragging = false;
          return;
      }

      // Otherwise, update the scroll position of the carousel 
      carousel.scrollLeft = newScrollLeft;
  };

  const dragStop = () => {
      isDragging = false;
      carousel.classList.remove("dragging");
  };

  const autoPlay = () => {

      // Return if window is smaller than 800 
      if (window.innerWidth < 800) return;

      // Calculate the total width of all cards 
      const totalCardWidth = carousel.scrollWidth;

      // Calculate the maximum scroll position 
      const maxScrollLeft = totalCardWidth - carousel.offsetWidth;

      // If the carousel is at the end, stop autoplay 
      if (carousel.scrollLeft >= maxScrollLeft) return;

      // Autoplay the carousel after every 2500ms 
      // timeoutId = setTimeout(() =>
      //     carousel.scrollLeft += firstCardWidth, 2500);
  };

  carousel.addEventListener("mousedown", dragStart);
  carousel.addEventListener("mousemove", dragging);
  document.addEventListener("mouseup", dragStop);
  wrapper.addEventListener("mouseenter", () =>
      clearTimeout(timeoutId));
  wrapper.addEventListener("mouseleave", autoPlay);

  // Add event listeners for the arrow buttons to 
  // scroll the carousel left and right 
  arrowBtns.forEach(btn => {
      btn.addEventListener("click", () => {
          carousel.scrollLeft += btn.id === "left" ?
              -firstCardWidth : firstCardWidth;
      });
  });
});


// course card hover

// const card = document.querySelector('.card');
// const cardInfo = card.querySelector('.card-info');

// card.addEventListener('mouseenter', () => {
//   cardInfo.style.left = '0';
// });

// card.addEventListener('mouseleave', () => {
//   cardInfo.style.left = '-100%';
// });