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
            <a class="nav-link active" href="index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="about.html">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="destinations.html">Destinations</a>
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

  <!-- Hero Carousel -->
  <div id="heroCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">


      <div class="carousel-item active hero-slide" style="background-image: url('https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')">
        <div class="hero-overlay"></div>
        <div class="container hero-content">
          <div class="row">
            <div class="col-lg-8">
              <h1 class="hero-heading text-white">Discover the World's Most Breathtaking Locations</h1>
              <p class="hero-subheading text-white">Experience unforgettable adventures with CSE.DYP Travels</p>
              <div>
                <a href="destinations.html" class="btn btn-primary btn-lg rounded-pill me-3 px-4 py-2 hero-btn">Explore Destinations</a>
                <a href="contact.html" class="btn btn-outline-light btn-lg rounded-pill px-4 py-2 hero-btn">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="carousel-item hero-slide" style="background-image: url('https://as1.ftcdn.net/v2/jpg/12/25/32/40/1000_F_1225324099_xPVEer2uBCDNistqCeQn1KCRhr0Ldp81.jpg')">
        <div class="hero-overlay"></div>
        <div class="container hero-content">
          <div class="row">
            <div class="col-lg-8">
              <h1 class="hero-heading text-white">Trekking the Dangerous Forts of Chhatrapati Shivaji Maharaj in the Sahyadris</h1>
              <p class="hero-subheading text-white">Courage in Every Step: Unleashing the Thrill of Sahyadri’s Legendary Forts</p>
              <div>
                <a href="destinations.html" class="btn btn-primary btn-lg rounded-pill me-3 px-4 py-2 hero-btn">View Packages</a>
                <a href="contact.html" class="btn btn-outline-light btn-lg rounded-pill px-4 py-2 hero-btn">Get in Touch</a>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="carousel-item hero-slide" style="background-image: url('https://as2.ftcdn.net/v2/jpg/13/06/43/63/1000_F_1306436399_lKMO2qWsMuqjll9kqeklGdz6J5du3YQK.jpg')">
        <div class="hero-overlay"></div>
        <div class="container hero-content">
          <div class="row">
            <div class="col-lg-8">
              <h1 class="hero-heading text-white">Ride the Serpent Roads: Conquer the Ghats of Sahyadri</h1>
              <p class="hero-subheading text-white">Born to Ride: Into the Curves of the Sahyadri Mountains</p>
              <div>
                <a href="destinations.html" class="btn btn-primary btn-lg rounded-pill me-3 px-4 py-2 hero-btn">Find Your Trip</a>
                <a href="about.html" class="btn btn-outline-light btn-lg rounded-pill px-4 py-2 hero-btn">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>


       <div class="carousel-item hero-slide" style="background-image: url('https://as1.ftcdn.net/v2/jpg/13/74/34/44/1000_F_1374344490_cY769LRVHiAtpZG3SpqCBVkrVYWoobfv.jpg')">
        <div class="hero-overlay"></div>
        <div class="container hero-content">
          <div class="row">
            <div class="col-lg-8">
              <h1 class="hero-heading text-white">"Chasing Fury: Climb the World's Most Dangerous Waterfalls"</h1>
              <p class="hero-subheading text-white">Climbing Chaos: One Step Away from the Fall</p>
              <div>
                <a href="destinations.html" class="btn btn-primary btn-lg rounded-pill me-3 px-4 py-2 hero-btn">Find Your Trip</a>
                <a href="about.html" class="btn btn-outline-light btn-lg rounded-pill px-4 py-2 hero-btn">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>


       <div class="carousel-item hero-slide" style="background-image: url('https://as2.ftcdn.net/v2/jpg/13/84/16/29/1000_F_1384162975_SW3r4Aqagie2F50yO4oaeA2tMgiEZBj0.jpg')">
        <div class="hero-overlay"></div>
        <div class="container hero-content">
          <div class="row">
            <div class="col-lg-8">
              <h1 class="hero-heading text-white">"Into the Abode of Shiva: A Journey to Feel Mahadev’s Presence"</h1>
              <p class="hero-subheading text-white">Har Har Mahadev: A Pilgrim’s Path to Peace and Power</p>
              <div>
                <a href="destinations.html" class="btn btn-primary btn-lg rounded-pill me-3 px-4 py-2 hero-btn">Find Your Trip</a>
                <a href="about.html" class="btn btn-outline-light btn-lg rounded-pill px-4 py-2 hero-btn">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="carousel-item hero-slide" style="background-image: url('https://as1.ftcdn.net/v2/jpg/03/13/80/56/1000_F_313805680_9TQ2uhQqAo4ZOGjGMXVlhWnr1HJ4OfsN.jpg')">
        <div class="hero-overlay"></div>
        <div class="container hero-content">
          <div class="row">
            <div class="col-lg-8">
              <h1 class="hero-heading text-white">"Walk Through Time: Experiencing the Soul of 400-Year-Old Temples"</h1>
              <p class="hero-subheading text-white">Temple Trails Through Time: 300 Years of Faith and Glory</p>
              <div>
                <a href="destinations.html" class="btn btn-primary btn-lg rounded-pill me-3 px-4 py-2 hero-btn">Find Your Trip</a>
                <a href="about.html" class="btn btn-outline-light btn-lg rounded-pill px-4 py-2 hero-btn">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

  <!-- About Section -->
  <section class="section bg-light">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 mb-4 mb-lg-0">
          <div data-aos="fade-right">
            <iframe 
  src="https://sem.dypatilunikop.org/" 
  width="100%" 
  height="400" 
  style="border: none;"
  allowfullscreen>
</iframe> 
          </div>
        </div>
        <div class="col-lg-6">
          <div data-aos="fade-left">
            <h2 class="mb-4">Welcome to <span class="text-primary">CSE.DYP Travels</span></h2>
            <p class="lead mb-4">We specialize in creating unforgettable travel experiences that cater to your individual preferences and desires.</p>
            <p>Founded in 2020, CSE.DYP Travels has been helping adventurers explore the world's most beautiful destinations for nearly two decades. Our expert team designs personalized itineraries that combine popular attractions with hidden gems only locals know about.</p>
            <div class="row mt-4">
              <div class="col-md-6 mb-3">
                <div class="d-flex align-items-center">
                  <i class="bi bi-check-circle-fill text-primary me-2" style="font-size: 1.5rem;"></i>
                  <p class="mb-0">Expert local guides</p>
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <div class="d-flex align-items-center">
                  <i class="bi bi-check-circle-fill text-primary me-2" style="font-size: 1.5rem;"></i>
                  <p class="mb-0">Luxury accommodations</p>
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <div class="d-flex align-items-center">
                  <i class="bi bi-check-circle-fill text-primary me-2" style="font-size: 1.5rem;"></i>
                  <p class="mb-0">Customized itineraries</p>
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <div class="d-flex align-items-center">
                  <i class="bi bi-check-circle-fill text-primary me-2" style="font-size: 1.5rem;"></i>
                  <p class="mb-0">24/7 support</p>
                </div>
              </div>
            </div>
            <a href="about.html" class="btn btn-primary rounded-pill px-4 mt-3">Learn More About Us</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Featured Destinations -->
  <section class="section">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">Featured Destinations</h2>
      <div class="row">
        <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
          <div class="destination-card">
            <div class="destination-img">
              <img src="https://i0.wp.com/somanytraveltales.com/wp-content/uploads/2021/01/Sagareshwar-Beach2-scaled.jpg?resize=1320%2C837&ssl=1" alt="kokan , Maharastra">
            </div>
            <div class="destination-content">
              <div class="d-flex justify-content-between mb-2">
                <span class="badge bg-primary">Beach</span>
                <div class="destination-rating">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-none"></i>
                </div>
              </div>
              <h5>Kokan,Maharstra</h5>
              <p>“Planning a beach day out in Konkan this weekend! Good vibes, great company, and stunning sunsets await 🌊 DM to join!”

.</p>
              <div class="d-flex justify-content-between align-items-center">
                <span class="destination-price">From 11000 Rr.</span>
                <a href="destinations.html" class="btn btn-sm btn-outline-primary">View Details</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
          <div class="destination-card">
            <div class="destination-img">
              <img src="https://media-cdn.tripadvisor.com/media/photo-s/06/91/5d/34/jagadishwar-temple.jpg" alt="Kyoto, Japan">
            </div>
            <div class="destination-content">
              <div class="d-flex justify-content-between mb-2">
                <span class="badge bg-success">Historic</span>
                <div class="destination-rating">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </div>
              </div>
              <h5>Raigad Fort,Maharastra</h5>
              <p>“Walk the path of legends — join us on a journey to Raigad Fort, the pride of Swarajya and seat of Shivaji Maharaj’s glory! 🚩”

</p>
              <div class="d-flex justify-content-between align-items-center">
                <span class="destination-price">From 8000 Rs.</span>
                <a href="destinations.html" class="btn btn-sm btn-outline-primary">View Details</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="300">
          <div class="destination-card">
            <div class="destination-img">
              <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/ef/46/63/macchindragad-from-gorakhgad.jpg?w=900&h=-1&s=1" alt="Machu Picchu, Peru">
            </div>
            <div class="destination-content">
              <div class="d-flex justify-content-between mb-2">
                <span class="badge bg-danger">Adventure</span>
                <div class="destination-rating">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </div>
              </div>
              <h5>Gorakhgad,Maharastra</h5>
              <p>“Dare to climb where legends once stood? 🗡️ Join us for an adrenaline-filled trek to Gorakhgad — the fort that echoes Shivaji Maharaj’s courage! 🚩🏞️”.</p>
              <div class="d-flex justify-content-between align-items-center">
                <span class="destination-price">From 16000 Rs.</span>
                <a href="destinations.html" class="btn btn-sm btn-outline-primary">View Details</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center mt-5" data-aos="fade-up">
        <a href="destinations.html" class="btn btn-primary rounded-pill px-4 py-2">View All Destinations</a>
      </div>
    </div>
  </section>

  <!-- Testimonials -->
  <section class="section bg-accent">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">What Our Travelers Say</h2>
      <div class="row">
        <div class="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="100">
          <div class="testimonial-card">
            <div class="testimonial-img">
              <img src="https://www.shutterstock.com/shutterstock/photos/2463004761/display_1500/stock-photo-portrait-of-happy-indian-young-woman-smiling-friendly-glad-expression-looking-at-camera-dreaming-2463004761.jpg" alt="Sarah Johnson">
            </div>
            <div class="testimonial-quote">
              Our trip to Kokan was absolutely magical! Every detail was perfectly arranged, from the beachfront villa to the private tour of the temples.
            </div>
            <div class="mt-3 text-center">
              <div class="destination-rating mb-2">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
              </div>
              <p class="testimonial-author">Sanyogita Patil</p>
              <p class="text-muted small">Kokan Beach Package</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="200">
          <div class="testimonial-card">
            <div class="testimonial-img">
              <img src="https://www.shutterstock.com/shutterstock/photos/278725808/display_1500/stock-photo-portrait-of-young-indian-man-mumbai-maharashtra-india-asia-south-east-asia-278725808.jpg" alt="Michael Thompson">
            </div>
            <div class="testimonial-quote">
              "Visiting Raigad Fort wasn’t just a trek — it was a journey back in time. Standing on the land where Shivaji Maharaj was crowned gave me goosebumps.  🚩🔥.
            </div>
            <div class="mt-3 text-center">
              <div class="destination-rating mb-2">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-half"></i>
              </div>
              <p class="testimonial-author">Rahul Patil</p>
              <p class="text-muted small">Raigad Fort Package</p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="300">
          <div class="testimonial-card">
            <div class="testimonial-img">
              <img src="https://www.shutterstock.com/shutterstock/photos/2571654323/display_1500/stock-photo-a-young-mountaineer-preparing-for-the-hike-by-applying-sunscreen-ensuring-protection-from-the-sun-2571654323.jpg" alt="Emily Rodriguez">
            </div>
            <div class="testimonial-quote">
             "The view from the top? Pure Maratha pride. This fort, once touched by Shivaji Maharaj’s legacy, is not for the faint-hearted. It’s raw, wild, and unforgettable. 🚩🧗‍♂️💀"            </div>
            <div class="mt-3 text-center">
              <div class="destination-rating mb-2">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
              </div>
              <p class="testimonial-author">Vishal Kulkarni</p>
              <p class="text-muted small">Gorakhgad  Package</p>
            </div>
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
          <h2 class="mb-4">Ready for Your Next Adventure?</h2>
          <p class="lead mb-4">Join thousands of satisfied travelers who have experienced the world with CSE.DYP Travels. Let us help you create memories that last a lifetime.</p>
          <div>
            <a href="destinations.html" class="btn btn-light text-primary btn-lg rounded-pill me-3 px-4 py-2">Browse Destinations</a>
            <a href="contact.html" class="btn btn-outline-light btn-lg rounded-pill px-4 py-2">Contact Us</a>
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
          <h5 class="footer-title">CSE.DYP Travels</h5>
          <p>Creating unforgettable travel experiences since 2020. Let us help you discover the world's most breathtaking destinations.</p>
          <div class="social-links">
            <a href="https://www.facebook.com/dypcetofficial/"><i class="bi bi-facebook"></i></a>
            <a href="https://www.instagram.com/dypcet_official/reel/DA1JdpCxz8I/"><i class="bi bi-instagram"></i></a>
            <a href="https://www.youtube.com/watch?v=MdijrChTMXw"><i class="bi bi-youtube"></i></a>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 mb-4 mb-lg-0">
          <h5 class="footer-title">Quick Links</h5>
          <ul class="footer-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="destinations.html">Destinations</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="">Terms & Conditions</a></li>
            <li><a href="">Privacy Policy</a></li>
          </ul>
        </div>
        <div class="col-md-6 col-lg-3 mb-4 mb-lg-0">
          <h5 class="footer-title">Top Destinations</h5>
          <ul class="footer-links">
            <li><a href="#">Ratnagiri , Sidhudurg</a></li>
            <li><a href="#">Raigad , Mumbai</a></li>
            <li><a href="#">Pune , Sambhaji Nagar</a></li>
            <li><a href="#">Satara , Karad</a></li>
            <li><a href="#">Gorakhgad , Prabalgad</a></li>
            <li><a href="#">Rajgad , Torana</a></li>
          </ul>
        </div>
        <div class="col-md-6 col-lg-3">
          <h5 class="footer-title">Contact Us</h5>
          <ul class="footer-links">
            <li><i class="bi bi-geo-alt-fill me-2"></i> Kasaba Bawada Near Dr.D.Y.Patil College,kolhapur,Maharastra,India.</li>
            <li><i class="bi bi-telephone-fill me-2"></i> +91 5467 9345</li>
            <li><i class="bi bi-envelope-fill me-2"></i>info@csedyp-travels.com </li>
          </ul>
          <div class="mt-3">
            <h6 class="text-white mb-2">Subscribe to Our Newsletter</h6>
            <div class="input-group">
              <input type="email" class="form-control" placeholder="Your email">
              <a href="destinations.html"</a><button class="btn btn-primary" type="button">Subscribe</button> 
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom text-center">
        <p class="mb-0">© 2025 CSE.DYP Travels. All rights reserved.</p>
      </div>
    </div>
  </footer>

  <!-- Back to top button -->
  <a href="about.html" class="back-to-top" id="backToTop"><i class="bi bi-arrow-up"></i></a>
`;

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