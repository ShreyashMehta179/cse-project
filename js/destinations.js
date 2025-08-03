import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AOS from 'aos';
import '../css/styles.css';

// Initialize AOS
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  mirror: false
});

// Destinations data
const destinations = [
  {
    id: 1,
    name: 'Kokan , Maharastra',
    image: 'https://as2.ftcdn.net/v2/jpg/03/53/13/99/1000_F_353139999_FylrKO5znemXjsyX9WHo0PzEgEycloJq.jpg',
    description: 'Experience the breathtaking sunsets and white-washed buildings of this iconic Kokan Package',
    price:35,
    rating: 4,
    category: 'beach'
  },



  {
    id: 2,
    name: 'Raigad , Maharashtra',
    image: 'https://as2.ftcdn.net/v2/jpg/03/10/63/33/1000_F_310633367_Fc4EKwzJ4Cr2GtG7fnq2pMCiCTZXkHkq.jpg',
    description: 'join us on a journey to Raigad Fort, the pride of Swarajya and seat of Shivaji Maharaj’s glory! 🚩',
    price: 60,
    rating: 5,
    category: 'cultural'
  },



  {
    id: 3,
    name: 'Gorakhgad , Maharashtra',
    image: 'https://as1.ftcdn.net/v2/jpg/03/46/93/82/1000_F_346938266_fFUWaSTRXsICCqfIuYZfiw8PZmDHF7Pk.jpg',
    description: '“ Join us for an adrenaline-filled trek to Gorakhgad the fort that echoes Shivaji Maharaj’s courage!🚩🏞️',
    price: 55,
    rating: 5,
    category: 'adventure'
  },



  {
    id: 4,
    name: 'Aare Ware Beach , Ganpatipule',
    image: 'https://as1.ftcdn.net/v2/jpg/04/68/69/40/1000_F_468694077_ZD6QcePkhLm4BZMAf79ziFm51vkM0HuM.jpg',
    description: 'Experience the breathtaking sunsets and white-washed buildings of this iconic Kokan Package',
    price: 45,
    rating: 5,
    category: 'beach'
  },



  {
    id: 5,
    name: 'Devkund Waterfall Trek',
    image: 'https://as1.ftcdn.net/v2/jpg/02/14/52/44/1000_F_214524451_LXXWMRWQ7glWwoyysjQtlwMNP1Igqnh2.jpg',
    description: 'Experience the thrill of trekking through dense forests,reaching the magical plunge pool of Devkund.',
    price: 50,
    rating: 4.5,
    category: 'adventure'
  },



  {
    id: 6,
    name: 'Kedarnath , Uttarakhand',
    image: 'https://as2.ftcdn.net/v2/jpg/07/37/79/09/1000_F_737790983_Aa0GXVVe84gwKwT0k44ho0K4t8GenJog.jpg',
    description: '🕉️🌄 “Where Earth Meets the Divine – Walk the Sacred Path to Kedarnath”',
    price: 115,
    rating: 5,
    category: 'cultural'
  },



  {
    id: 7,
    name: 'Harishchandragad , Kokankada',
    image: 'https://www.triphippies.com/wp-content/uploads/2024/07/Kedareshwar-Cave-c.webp',
    description: '🏞️🔥 "Stand at the Edge of Awe Trek to Harishchandragad via Konkankada!"',
    price: 60,
    rating: 5,
    category: 'adventure'
  },



  {
    id: 8,
    name: 'Tarkarli Beach , Sindhudurg',
    image: 'https://www.tarkarlitourism.com/forms/tarkarli-beach-hotels-resorts-scuba-diving/tarkarli-beach-hotels-resorts-scuba-diving-beach1.jpg',
    description: '🌊🐠 "Escape to the Blue – Discover Tarkarli’s Hidden Paradise!"',
    price: 50,
    rating: 5,
    category: 'beach'
  },



  {
    id: 9,
    name: 'Ajanta & Ellora Caves , Aurangabad',
    image: 'https://as1.ftcdn.net/v2/jpg/06/74/42/54/1000_F_674425456_LJYeyq48qwQfgDZi7DBFffqDdFj3cp4L.jpg',
    description: '🏛️✨ “Carved in Stone, Alive Through Time – Discover Ajanta & Ellora”',
    price: 75,
    rating: 4,
    category: 'cultural'
  }
];

document.querySelector('#app').innerHTML = `
  <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
    <div class="container">
      <a class="navbar-brand" href="index.html">
        <span class="text-primary">CSE.DYP</span> Travels
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="about.html">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="destinations.html">Destinations</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="contact.html">Contact</a>
          </li>
          <li class="nav-item ms-lg-3">
            <a class="btn btn-primary rounded-pill px-4" href="destinations.html">Book Now</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Page Header -->
  <section class="hero" style="height: 60vh; background-image: url('https://as2.ftcdn.net/v2/jpg/12/29/61/53/1000_F_1229615315_R6Xy3ZaGyAcXMTLSOFfNjpUKqtyYSPGp.jpg')">
    <div class="hero-overlay"></div>
    <div class="container hero-content">
      <div class="row">
        <div class="col-lg-8">
          <h1 class="hero-heading text-white" data-aos="fade-up">Discover Our Destinations</h1>
          <p class="hero-subheading text-white" data-aos="fade-up" data-aos-delay="100">Explore the world's most breathtaking locations with our tailored travel packages</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Destinations Section -->
  <section class="section">
    <div class="container">
      <div class="filter-buttons mb-5" data-aos="fade-up">
        <button class="filter-btn active" data-filter="all">All Destinations</button>
        <button class="filter-btn" data-filter="beach">Beach Getaways</button>
        <button class="filter-btn" data-filter="adventure">Adventure Tours</button>
        <button class="filter-btn" data-filter="cultural">Cultural Experiences</button>
      </div>
      
      <div class="row" id="destinationsContainer">
        <!-- Destination cards will be generated here -->
      </div>
    </div>
  </section>

  <!-- Why Choose Us -->
  <section class="section bg-light">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">Why Travel With Us</h2>
      <div class="row">
        <div class="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="100">
          <div class="bg-white p-4 rounded-3 shadow-sm text-center h-100">
            <div class="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style="width: 60px; height: 60px;">
              <i class="bi bi-patch-check-fill fs-4"></i>
            </div>
            <h5 class="mb-3">Expert Local Guides</h5>
            <p>Our guides are local experts who provide authentic insights and take you beyond the tourist trail to discover hidden gems.</p>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="200">
          <div class="bg-white p-4 rounded-3 shadow-sm text-center h-100">
            <div class="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style="width: 60px; height: 60px;">
              <i class="bi bi-shield-check fs-4"></i>
            </div>
            <h5 class="mb-3">Safe & Secure</h5>
            <p>Your safety is our priority. We follow strict safety protocols and provide 24/7 emergency support throughout your journey.</p>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="300">
          <div class="bg-white p-4 rounded-3 shadow-sm text-center h-100">
            <div class="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style="width: 60px; height: 60px;">
              <i class="bi bi-wallet2 fs-4"></i>
            </div>
            <h5 class="mb-3">Best Price Guarantee</h5>
            <p>We offer competitive pricing without compromising quality, ensuring you receive exceptional value for your travel investment.</p>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="400">
          <div class="bg-white p-4 rounded-3 shadow-sm text-center h-100">
            <div class="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style="width: 60px; height: 60px;">
              <i class="bi bi-person-check-fill fs-4"></i>
            </div>
            <h5 class="mb-3">Personalized Service</h5>
            <p>We tailor each itinerary to match your interests, preferences, and travel style for a truly personalized experience.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="section bg-primary text-white">
    <div class="container">
      <div class="row justify-content-center text-center">
        <div class="col-lg-8" data-aos="fade-up">
          <h2 class="mb-4">Ready to Start Your Adventure?</h2>
          <p class="lead mb-4">Contact us today to speak with one of our travel experts and start planning your dream vacation with Wanderlust Travels.</p>
          <div>
            <a href="contact.html" class="btn btn-light text-primary btn-lg rounded-pill px-4 py-2">Contact Us Today</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-3 mb-4 mb-lg-0">
          <h5 class="footer-title">Wanderlust Travels</h5>
          <p>Creating unforgettable travel experiences since 2005. Let us help you discover the world's most breathtaking destinations.</p>
          <div class="social-links">
            <a href="#"><i class="bi bi-facebook"></i></a>
            <a href="#"><i class="bi bi-instagram"></i></a>
            <a href="#"><i class="bi bi-twitter"></i></a>
            <a href="#"><i class="bi bi-youtube"></i></a>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 mb-4 mb-lg-0">
          <h5 class="footer-title">Quick Links</h5>
          <ul class="footer-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="destinations.html">Destinations</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div class="col-md-6 col-lg-3 mb-4 mb-lg-0">
          <h5 class="footer-title">Top Destinations</h5>
          <ul class="footer-links">
            <li><a href="#">Santorini, Greece</a></li>
            <li><a href="#">Bali, Indonesia</a></li>
            <li><a href="#">Kyoto, Japan</a></li>
            <li><a href="#">Machu Picchu, Peru</a></li>
            <li><a href="#">Amalfi Coast, Italy</a></li>
            <li><a href="#">Serengeti, Tanzania</a></li>
          </ul>
        </div>
        <div class="col-md-6 col-lg-3">
          <h5 class="footer-title">Contact Us</h5>
          <ul class="footer-links">
            <li><i class="bi bi-geo-alt-fill me-2"></i> 123 Travel Street, New York, NY 10001</li>
            <li><i class="bi bi-telephone-fill me-2"></i> +1 (555) 123-4567</li>
            <li><i class="bi bi-envelope-fill me-2"></i> info@wanderlust-travels.com</li>
          </ul>
          <div class="mt-3">
            <h6 class="text-white mb-2">Subscribe to Our Newsletter</h6>
            <div class="input-group">
              <input type="email" class="form-control" placeholder="Your email">
              <button class="btn btn-primary" type="button">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom text-center">
        <p class="mb-0">© 2025 Wanderlust Travels. All rights reserved.</p>
      </div>
    </div>
  </footer>

  <!-- Back to top button -->
  <a href="#" class="back-to-top" id="backToTop"><i class="bi bi-arrow-up"></i></a>

  <!-- Destination Modal -->
  <div class="modal fade" id="destinationModal" tabindex="-1" aria-labelledby="destinationModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="destinationModalLabel">Destination Details</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body" id="modalContent">
          <!-- Modal content will be generated here -->
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Book Now</button>
        </div>
      </div>
    </div>
  </div>
`;

// Generate stars based on rating
function generateRatingStars(rating) {
  let starsHtml = '';
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  
  for (let i = 0; i < fullStars; i++) {
    starsHtml += '<i class="bi bi-star-fill"></i>';
  }
  
  if (hasHalfStar) {
    starsHtml += '<i class="bi bi-star-half"></i>';
  }
  
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  for (let i = 0; i < emptyStars; i++) {
    starsHtml += '<i class="bi bi-star"></i>';
  }
  
  return starsHtml;
}

// Generate destination cards
function displayDestinations(destinationsArray) {
  const container = document.getElementById('destinationsContainer');
  container.innerHTML = '';
  
  if (destinationsArray.length === 0) {
    container.innerHTML = `
      <div class="col-12 text-center">
        <p>No destinations found matching your criteria. Please try a different filter.</p>
      </div>
    `;
    return;
  }
  
  destinationsArray.forEach((destination, index) => {
    const delay = 100 * (index % 3 + 1);
    
    let badgeClass;
    switch(destination.category) {
      case 'beach':
        badgeClass = 'bg-primary';
        break;
      case 'adventure':
        badgeClass = 'bg-danger';
        break;
      case 'cultural':
        badgeClass = 'bg-success';
        break;
      default:
        badgeClass = 'bg-secondary';
    }
    
    let categoryText;
    switch(destination.category) {
      case 'beach':
        categoryText = 'Beach';
        break;
      case 'adventure':
        categoryText = 'Adventure';
        break;
      case 'cultural':
        categoryText = 'Cultural';
        break;
      default:
        categoryText = destination.category;
    }
    
    const card = `
      <div class="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="${delay}">
        <div class="destination-card">
          <div class="destination-img">
            <img src="${destination.image}" alt="${destination.name}">
          </div>
          <div class="destination-content">
            <div class="d-flex justify-content-between mb-2">
              <span class="badge ${badgeClass}">${categoryText}</span>
              <div class="destination-rating">
                ${generateRatingStars(destination.rating)}
              </div>
            </div>
            <h5>${destination.name}</h5>
            <p>${destination.description}</p>
            <div class="d-flex justify-content-between align-items-center">
              <span class="destination-price">From $${destination.price}</span>
              <button class="btn btn-sm btn-outline-primary view-details" data-id="${destination.id}">View Details</button>
            </div>
          </div>
        </div>
      </div>
    `;
    
    container.innerHTML += card;
  });
  
  // Add event listeners to the details buttons
  document.querySelectorAll('.view-details').forEach(button => {
    button.addEventListener('click', () => {
      const destinationId = parseInt(button.getAttribute('data-id'));
      const destination = destinations.find(d => d.id === destinationId);
      openDestinationModal(destination);
    });
  });
}

// Open destination modal
function openDestinationModal(destination) {
  const modalTitle = document.getElementById('destinationModalLabel');
  const modalContent = document.getElementById('modalContent');
  
  modalTitle.textContent = destination.name;
  
  let categoryText;
  switch(destination.category) {
    case 'beach':
      categoryText = 'Beach Getaway';
      break;
    case 'adventure':
      categoryText = 'Adventure Tour';
      break;
    case 'cultural':
      categoryText = 'Cultural Experience';
      break;
    default:
      categoryText = destination.category;
  }
  
  modalContent.innerHTML = `
    <div class="row">
      <div class="col-md-6 mb-3 mb-md-0">
        <img src="${destination.image}" alt="${destination.name}" class="img-fluid rounded">
      </div>
      <div class="col-md-6">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <span class="badge bg-primary">${categoryText}</span>
          <div class="destination-rating">
            ${generateRatingStars(destination.rating)}
          </div>
        </div>
        <h4 class="mb-3">About ${destination.name}</h4>
        <p>${destination.description}</p>
        <h5 class="text-primary mb-3">From $${destination.price} per person</h5>
        <h6>Package Includes:</h6>
        <ul>
          <li>Round-trip airfare</li>
          <li>Accommodation in hand-picked hotels</li>
          <li>Daily breakfast and select meals</li>
          <li>Guided tours and activities</li>
          <li>Airport transfers</li>
          <li>24/7 support from our team</li>
        </ul>
      </div>
    </div>
  `;
  
  const modal = new bootstrap.Modal(document.getElementById('destinationModal'));
  modal.show();
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
  // Display all destinations initially
  displayDestinations(destinations);
  
  // Filter buttons functionality
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      button.classList.add('active');
      
      const filter = button.getAttribute('data-filter');
      
      // Filter destinations
      if (filter === 'all') {
        displayDestinations(destinations);
      } else {
        const filteredDestinations = destinations.filter(
          destination => destination.category === filter
        );
        displayDestinations(filteredDestinations);
      }
    });
  });
  
  // Initialize Back to Top button
  const backToTopButton = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.add('show');
    } else {
      backToTopButton.classList.remove('show');
    }
  });

  backToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Add navigation background on scroll
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  });

  // Set current active nav link
  const currentLocation = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentLocation.split('/').pop()) {
      link.classList.add('active');
    } else if (currentLocation.split('/').pop() === '' && link.getAttribute('href') === 'index.html') {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});