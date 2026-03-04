// Navigation Scroll Effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');

const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // observer.unobserve(entry.target); // Uncomment to animate only once
        }
    });
};

const revealOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

revealElements.forEach(el => {
    revealObserver.observe(el);
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
// Future enhancement: Add sidebar menu logic if needed

// Dynamic Portfolio Modal Logic
const modal = document.getElementById('project-modal');
const modalBackdrop = document.querySelector('.modal-backdrop');
const closeModalBtn = document.querySelector('.close-modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalGallery = document.getElementById('modal-gallery');

const portfolioItems = document.querySelectorAll('.portfolio-item');

// Project Data
const projectData = {
    'anatomy': {
        title: 'VR Human Anatomy Experience',
        desc: 'Unreal Engine real-time project. Modular organ assets with clean topology using Maya/ZBrush, textured in Substance 3D Painter.',
        images: [
            'images/vrHospital.webp',
            'images/vrHospital2.webp',
            // 'images/VrHospital3.png',
            'images/VrHospital4.webp',
            'images/heart1.jpeg',
            'images/heart2.jpeg',
            'images/heart3.jpeg'
        ]
    },
    'modular-env': {
        title: 'Environment Design',
        desc: 'Academic Project.environment assets created in Maya and 3ds Max. Textured with optimized PBR materials in Substance 3D Painter and assembled/lit inside Unreal Engine.',
        images: [
            'images/enviroment/japanese1.webp',
            'images/enviroment/japanese2.webp',
            'images/enviroment/japanese3.webp',
            'images/enviroment/japanese4.webp',
            'images/enviroment/japanese5.webp',
            'images/enviroment/japanese6.webp'


        ]
    },
    'costume-design': {
        title: 'Costume Design',
        desc: 'Academic Project focusing on realistic garments designed in Marvelous Designer and seamlessly integrated as optimized cloth assets in Unreal Engine.',
        images: [
            'images/characters/japanese_cloth1.jpg',
            'images/characters/japanese_cloth2.jpg',
            'images/characters/japanese_cloth Wire.jpg',
            'images/characters/armor.jpg',
            'images/characters/armor long.jpg',
            'images/characters/armor wire.jpg'

        ]
    },
    'hard-surface': {
        title: 'Hard Surface Models',
        desc: 'A collection of complex hard surface models created using ZBrush and Maya, emphasizing detailed topology and mechanical precision.',
        images: [
            'images/scifi/space1.jpg',
            //'images/scifi/drone close.jpeg',
            

        ]
    },
    'character-showcase': {
        title: 'Character Showcase',
        desc: 'Detailed 3D character models focused on anatomical accuracy, high-poly sculpting, and expressive posing.',
        images: [
            'images/characters/charater1.jpg',


        ]
    },
    'Enviroment Showcase': {
        title: 'Enviroment Showcase',
        desc: 'Academic Project.environment assets created in Maya and 3ds Max. Textured with optimized PBR materials in Substance 3D Painter and assembled/lit inside Unreal Engine.',
        images: [
            'images/abandoned/enviro1.jpeg',
            'images/abandoned/enviro2.jpeg',
            'images/abandoned/enviro5.jpeg',
            'images/abandoned/enviro3.jpeg',
            'images/abandoned/enviro4.jpeg'


        ]
    },
    'modular-environment': {
        title: 'Level Designing',
        desc: 'A showcase of Level Designing pieces designed for seamless grid-snapping and optimized rendering in game engines.',
        images: [
            // Placeholder images, update with your own paths
            'images/level_designing/level3.jpeg',
            'images/level_designing/level4.png',
            'images/level_designing/level2.jpeg',
            'images/level_designing/level1.jpeg'
            

        ]
    }
};

const openModal = (projectId) => {
    const data = projectData[projectId];
    if (!data) return;

    modalTitle.textContent = data.title;
    modalDesc.textContent = data.desc;

    // Clear previous images
    modalGallery.innerHTML = '';

    // Inject new images
    data.images.forEach(imgSrc => {
        const img = document.createElement('img');
        img.src = imgSrc;
        img.alt = data.title + " view";
        img.loading = "lazy";
        modalGallery.appendChild(img);
    });

    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
};

const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Restore scrolling
};

portfolioItems.forEach(item => {
    item.addEventListener('click', () => {
        const projectId = item.getAttribute('data-project');
        openModal(projectId);
    });
});

closeModalBtn.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});
