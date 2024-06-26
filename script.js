// Navbar toggle behavior
document.addEventListener('DOMContentLoaded', function () {
  var toggler = document.querySelector('.navbar-toggler');
  var togglerIcon = document.getElementById('toggler-icon');
  var navLinks = document.querySelectorAll('.nav-link');
  var navCollapse = document.getElementById('navbarNav');

  toggler.addEventListener('click', function () {
    if (togglerIcon.classList.contains('fa-bars')) {
      togglerIcon.classList.remove('fa-bars');
      togglerIcon.classList.add('fa-times');
    } else {
      togglerIcon.classList.remove('fa-times');
      togglerIcon.classList.add('fa-bars');
    }
  });
  navLinks.forEach(function (navLink) {
    navLink.addEventListener('click', function (event) {
      if (navCollapse.classList.contains('show')) {
        new bootstrap.Collapse(navCollapse).toggle();
        togglerIcon.classList.remove('fa-times');
        togglerIcon.classList.add('fa-bars');
      }

      // Smooth scroll to the section
      var targetId = navLink.getAttribute('href').substring(1);
      var targetSection = document.getElementById(targetId);
      event.preventDefault();
      window.scrollTo({
        top: targetSection.offsetTop - document.querySelector('.head1').offsetHeight,
        behavior: 'smooth'
      });
    });
  });
});

// Typing content
document.addEventListener('DOMContentLoaded', (event) => {
  const texts = ['Full Stack Developer', 'Java Developer', 'Web Developer'];
  let count = 0;
  let index = 0;
  let currentText = '';
  let letter = '';

  (function type() {
    if (count === texts.length) {
      count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.typing').textContent = letter;
    if (letter.length === currentText.length) {
      count++;
      index = 0;
      setTimeout(type, 2000);
    } else {
      setTimeout(type, 100);
    }
  })();
});

//Nav-link active
document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) {
        link.classList.add('active');
      }
    });
  });
});

// Project modal
document.addEventListener('DOMContentLoaded', function () {
  const projectModal = document.getElementById('projectModal');
  projectModal.addEventListener('show.bs.modal', function (event) {
    const button = event.relatedTarget;
    const title = button.getAttribute('data-title');
    const description = button.getAttribute('data-description');
    const codeLink = button.getAttribute('data-code-link');
    const websiteLink = button.getAttribute('data-website-link');
    const showButtons = button.getAttribute('data-show-buttons') === 'true';

    const modalTitle = projectModal.querySelector('#projectTitle');
    const modalDescription = projectModal.querySelector('#projectDescription');
    const modalCodeLink = projectModal.querySelector('#codeLink');
    const modalWebsiteLink = projectModal.querySelector('#websiteLink');
    const modalImage = projectModal.querySelector('.project-image');

    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modalCodeLink.href = codeLink;
    modalWebsiteLink.href = websiteLink;

    if (showButtons) {
      modalCodeLink.style.display = 'inline-block';
      modalWebsiteLink.style.display = 'inline-block';
    } else {
      modalCodeLink.style.display = 'none';
      modalWebsiteLink.style.display = 'none';
    }


    modalImage.src = button.querySelector('img').src;
  });
});


