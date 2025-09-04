// Example of smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



    // Select all the section links
    const links = document.querySelectorAll('header nav ul li a');
    const sections = document.querySelectorAll('section');

    // Function to remove 'active' class from all links
    function removeActiveClass() {
        links.forEach(link => {
            link.classList.remove('active');
        });
    }

    // Function to add 'active' class to the link based on scroll position
    function setActiveLink() {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const scrollPosition = window.scrollY;

            // Check if the section is in the viewport
            if (scrollPosition >= sectionTop - 60 && scrollPosition < sectionTop + sectionHeight - 60) {
        currentSection = section.getAttribute('id');
            }
        });

    // Remove active class from all links
    removeActiveClass();

    // Add active class to the corresponding link
    if (currentSection) {
            const activeLink = document.querySelector(`a[href="#${currentSection}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
            }
        }
    }

    // Run setActiveLink on scroll
    window.addEventListener('scroll', setActiveLink);

    // Initialize active link when the page loads
    window.addEventListener('load', setActiveLink);


    //character counter

const textarea = document.getElementById('message');
const charCount = document.getElementById('charCount');
const errorMsg = document.getElementById('errorMsg');
const maxChars = 250;

textarea.addEventListener('input', function () {
    const currentLength = textarea.value.length;

    if (currentLength >= maxChars) {
        errorMsg.textContent = "Maximum character limit reached!!";
        charCount.classList.add('warning');
        textarea.value = textarea.value.substring(0, maxChars);
    } else {
        errorMsg.textContent = "";
        charCount.classList.remove('warning');
    }

    charCount.textContent = `${textarea.value.length} / ${maxChars}`;
});

// Reset functionality
document.getElementById('myForm').addEventListener('reset', function () {
    textarea.value = ''; // Clear textarea
    charCount.textContent = `0 / ${maxChars}`; // Reset character count
    errorMsg.textContent = ""; // Clear any error message
    charCount.classList.remove('warning'); // Remove warning class
});

// Dynamically update the footer year
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("year").textContent = new Date().getFullYear();
});


//preloader

document.addEventListener("DOMContentLoaded", function () {
    const preloader = document.getElementById("preloader");

    // Ensure preloader is visible when the page starts loading
    preloader.style.display = "flex";

    // Wait for everything to fully load
    window.addEventListener("load", function () {
        setTimeout(() => {
            preloader.classList.add("hidden");

            // Remove the preloader from the DOM after fading out
            setTimeout(() => {
                preloader.style.display = "none";
            }, 500); // Matches CSS transition
        }, 5000); // Keep preloader visible for 5 seconds
    });
});



