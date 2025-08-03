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
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
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
            <a class="nav-link active" href="about.html">About Us</a>
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













  <!-- Page Header -->
  <section class="hero" style="position: relative; height: 60vh; overflow: hidden;">
  
  <!-- Background Video -->
  <video autoplay muted loop playsinline 
         style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; 
                object-fit: cover; z-index: -1;">
    <source src="https://v.ftcdn.net/08/32/96/90/700_F_832969023_2N8nrTUlSsDQTYXwhUk4YnqzAiXjavP2_ST.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>

  <!-- Optional overlay -->
  <div class="hero-overlay" 
       style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; 
              background: rgba(0, 0, 0, 0.4); z-index: 0;">
  </div>

  <!-- Content -->
  <div class="container hero-content" style="position: relative; z-index: 1;">
    <div class="row">
      <div class="col-lg-8">
        <h1 class="hero-heading text-white" data-aos="fade-up">About CSE.DYP Travels</h1>
        <p class="hero-subheading text-white" data-aos="fade-up" data-aos-delay="100">
          "Every Destination Has a Story — Ours Started with a Dream."
        </p>
      </div>
    </div>
  </div>
</section>









  <!-- About Section -->
  <section class="section">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 mb-4 mb-lg-0">
          <h2 class="mb-4" data-aos="fade-up">Our Story</h2>
          <p data-aos="fade-up" data-aos-delay="100">CSE.DYP Travels was founded in 2020 by a group of passionate travelers who shared a vision: to create personalized travel experiences that go beyond the ordinary tourist attractions.</p>
          <p data-aos="fade-up" data-aos-delay="200">What began as a small operation has now grown into one of the most trusted travel agencies, with offices in major cities across the globe and a network of local experts in every destination we serve.</p>
          <p data-aos="fade-up" data-aos-delay="300">Our success is built on our commitment to understanding each traveler's unique preferences and creating customized itineraries that blend popular attractions with hidden gems that only locals know about.</p>
        </div>
        <div class="col-lg-6" data-aos="fade-left">
          <div class="ratio ratio-16x9 rounded-3 overflow-hidden shadow">
            <iframe src="https://www.youtube.com/embed/MdijrChTMXw?start=2" title="About Wanderlust Travels" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Mission and Values -->
  <section class="section bg-light">
    <div class="container">
      <div class="row justify-content-center text-center mb-5">
        <div class="col-lg-8">
          <h2 class="section-title" data-aos="fade-up">Our Mission & Values</h2>
          <p class="lead" data-aos="fade-up" data-aos-delay="100">At CSE.DYP Travels, we believe that travel has the power to transform lives, broaden perspectives, and create lasting connections between people and cultures.</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="100">
          <div class="bg-white p-4 rounded-3 shadow-sm text-center h-100">
            <div class="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style="width: 60px; height: 60px;">
              <i class="bi bi-heart-fill fs-4"></i>
            </div>
            <h5 class="mb-3">Passion for Travel</h5>
            <p>We're travelers ourselves, passionate about creating journeys that inspire, educate, and amaze. Every itinerary is crafted with love and attention to detail.</p>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="200">
          <div class="bg-white p-4 rounded-3 shadow-sm text-center h-100">
            <div class="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style="width: 60px; height: 60px;">
              <i class="bi bi-globe-americas fs-4"></i>
            </div>
            <h5 class="mb-3">Cultural Respect</h5>
            <p>We promote responsible tourism that respects local cultures, supports local communities, and preserves natural and cultural heritage for future generations.</p>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="300">
          <div class="bg-white p-4 rounded-3 shadow-sm text-center h-100">
            <div class="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style="width: 60px; height: 60px;">
              <i class="bi bi-stars fs-4"></i>
            </div>
            <h5 class="mb-3">Exceptional Service</h5>
            <p>We're committed to providing unparalleled customer service, from the planning stages to your return home, with 24/7 support during your journey.</p>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="400">
          <div class="bg-white p-4 rounded-3 shadow-sm text-center h-100">
            <div class="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style="width: 60px; height: 60px;">
              <i class="bi bi-person-fill fs-4"></i>
            </div>
            <h5 class="mb-3">Personalization</h5>
            <p>We believe that every traveler is unique, and we tailor each itinerary to match your interests, preferences, and travel style.</p>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="500">
          <div class="bg-white p-4 rounded-3 shadow-sm text-center h-100">
            <div class="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style="width: 60px; height: 60px;">
              <i class="bi bi-tree-fill fs-4"></i>
            </div>
            <h5 class="mb-3">Sustainability</h5>
            <p>We're dedicated to sustainable tourism practices that minimize environmental impact and contribute positively to the destinations we visit.</p>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="600">
          <div class="bg-white p-4 rounded-3 shadow-sm text-center h-100">
            <div class="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style="width: 60px; height: 60px;">
              <i class="bi bi-cash-coin fs-4"></i>
            </div>
            <h5 class="mb-3">Value</h5>
            <p>We offer competitive pricing without compromising quality, ensuring you receive exceptional value for your travel investment.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Team Section -->
  <section class="section">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">Our Team</h2>
      <p class="text-center mb-5" data-aos="fade-up" data-aos-delay="100">Meet the passionate travel enthusiasts who work tirelessly to create unforgettable experiences for our clients.</p>
      <div class="row">
        <div class="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="100">
          <div class="text-center">
            <div class="rounded-circle overflow-hidden mb-3 mx-auto" style="width: 180px; height: 180px;">
              <img src="images/team1.jpeg" alt="Manish Patil" class="img-fluid">
            </div>
            <h5>Manish Patil</h5>
            <p class="text-primary mb-2">Founder & CEO</p>
            <p class="small mb-3">With over 20 years of travel industry experience and having visited 70+ countries, Emily leads our vision of exceptional personalized travel.</p>
           <div class="social-links" style="font-size: 24px;">
           <a href="https://www.linkedin.com/in/manish-patil-089309244/" class="me-2 text-dark">
           <i class="bi bi-linkedin"></i>
           </a>
           <a href="" class="me-2 text-dark">
           <i class="bi bi-instagram"></i>
           </a>
           <a href="mailto:someone@example.com" class="text-dark">
           <i class="bi bi-envelope"></i>
           </a>
          </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="200">
          <div class="text-center">
            <div class="rounded-circle overflow-hidden mb-3 mx-auto" style="width: 180px; height: 180px;">
              <img src="images/team2.jpeg" alt="Marcus Chen" class="img-fluid">
            </div>
            <h5>Shreysh Mehta</h5>
            <p class="text-primary mb-2">Head of Operations</p>
            <p class="small mb-3">A logistics expert with a passion for adventure travel, Marcus ensures every journey runs smoothly from start to finish.</p>
            <div class="social-links" style="font-size: 24px;">
           <a href="https://www.linkedin.com/in/shreyash-mehta-0aab37255/" class="me-2 text-dark">
           <i class="bi bi-linkedin"></i>
          </a>
          <a href="https://twitter.com" class="me-2 text-dark">
          <i class="bi bi-instagram"></i>
          </a>
          <a href="mailto:someone@example.com" class="text-dark">
           <i class="bi bi-envelope"></i>
          </a>
          </div>

          </div>
        </div>
        <div class="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="300">
          <div class="text-center">
            <div class="rounded-circle overflow-hidden mb-3 mx-auto" style="width: 180px; height: 180px;">
              <img src="images/team3.jpg" alt="Sofia Rodriguez" class="img-fluid">
            </div>
            <h5>Om Lad</h5>
            <p class="text-primary mb-2">Lead Travel Designer</p>
            <p class="small mb-3">A cultural anthropologist by training, Sofia specializes in creating immersive experiences that connect travelers with local cultures.</p>
                         <div class="social-links" style="font-size: 24px;">
           <a href="https://www.linkedin.com/in/om-lad-ba0306325/" class="me-2 text-dark">
           <i class="bi bi-linkedin"></i>
          </a>
          <a href="https://twitter.com" class="me-2 text-dark">
          <i class="bi bi-instagram"></i>
          </a>
          <a href="mailto:someone@example.com" class="text-dark">
           <i class="bi bi-envelope"></i>
          </a>
          </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="400">
          <div class="text-center">
            <div class="rounded-circle overflow-hidden mb-3 mx-auto" style="width: 180px; height: 180px;">
              <img src="images/team4.jpg" alt="James Wilson" class="img-fluid">
            </div>
            <h5>Devendra Nimbalkar</h5>
            <p class="text-primary mb-2">Customer Experience Manager</p>
            <p class="small mb-3">A hospitality veteran dedicated to ensuring every client receives VIP treatment and personalized care throughout their journey.</p>
                         <div class="social-links" style="font-size: 24px;">
           <a href="https://www.linkedin.com/in/devendra-nimbalkar-4938a0362/" class="me-2 text-dark">
           <i class="bi bi-linkedin"></i>
          </a>
          <a href="https://twitter.com" class="me-2 text-dark">
          <i class="bi bi-instagram"></i>
          </a>
          <a href="mailto:someone@example.com" class="text-dark">
           <i class="bi bi-envelope"></i>
          </a>
          </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonials -->
  <section class="section bg-accent">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">Client Testimonials</h2>
      <div id="testimonialCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="row justify-content-center">
              <div class="col-lg-8" data-aos="fade-up">
                <div class="testimonial-card text-center">
                  <div class="testimonial-img">
                    <img src="https://as1.ftcdn.net/v2/jpg/06/46/90/42/1000_F_646904227_k0RmrloUIQKSOEdvjJfkfjTXLJXywCOo.jpg" alt="Sanyogita patil">
                  </div>
                  <div class="testimonial-quote mb-4">
                    Our trip to Kokan was absolutely magical! Every detail was perfectly arranged, from the beachfront villa to the private tour of the temples."Salt in the air, forts in the clouds, and memories in every wave — that’s Konkan for you."
                  </div>
                  <div class="destination-rating mb-2">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                  </div>
                  <p class="testimonial-author">Sanyogita Patill</p>
                  <p class="text-muted small">Kokan Adventure Package</p>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row justify-content-center">
              <div class="col-lg-8" data-aos="fade-up">
                <div class="testimonial-card text-center">
                  <div class="testimonial-img">
                    <img src="https://as1.ftcdn.net/v2/jpg/02/81/58/98/1000_F_281589807_HQnmT95OMqBBlYmhdWxMhFLSxy63GN9O.jpg" alt="Michael Thompson">
                  </div>
                  <div class="testimonial-quote mb-4"> Trekking to Raigad isn't just a climb — it's a journey through history, pride, and the unshakable spirit of Hindavi Swarajya. Every step echoes the valor of Chhatrapati Shivaji Maharaj, every stone whispers tales of sacrifice, vision, and leadership. As I stood atop the mighty fort, gazing at the endless Sahyadris, I didn’t just see mountains — I felt the soul of a warrior king who dared to dream of freedom.
                    
                  </div>
                  <div class="destination-rating mb-2">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                  </div>
                  <p class="testimonial-author">Prathmesh Patil</p>
                  <p class="text-muted small">Raigad Explorer Package</p>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row justify-content-center">
              <div class="col-lg-8" data-aos="fade-up">
                <div class="testimonial-card text-center">
                  <div class="testimonial-img">
                    <img src="https://as1.ftcdn.net/v2/jpg/14/18/68/86/1000_F_1418688694_PshTuVQcr7kl7cxoqZAdCqav11gdcNSp.jpg" alt="Emily Rodriguez">
                  </div>
                  <div class="testimonial-quote mb-4">
                   The climb to Gorakhgad is not just a trek — it’s a test of courage, willpower, and raw determination. With every slippery step and near-vertical climb, the fort demands your focus and respect. The trail is narrow, the rocks unforgiving, and the wind relentless. But at the summit, as I stood atop this ancient fort carved into the Sahyadris, I felt something more than fear — I felt the strength of Shivaji Maharaj’s legacy echoing through the cliffs.
                  </div>
                  <div class="destination-rating mb-2">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                  </div>
                  <p class="testimonial-author">Sarthak Jadhav</p>
                  <p class="text-muted small">Gorakhgad Package</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon bg-primary rounded-circle" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon bg-primary rounded-circle" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="section bg-primary text-white">
    <div class="container">
      <div class="row justify-content-center text-center">
        <div class="col-lg-8" data-aos="fade-up">
          <h2 class="mb-4">Let's Create Your Dream Vacation</h2>
          <p class="lead mb-4">Our expert travel designers are ready to craft a personalized itinerary that matches your interests, preferences, and travel style. Contact us today and take the first step towards your next unforgettable adventure.</p>
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
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
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
            <li><i class="bi bi-geo-alt-fill me-2"></i>  Kasaba Bawada Near Dr.D.Y.Patil College,kolhapur,Maharastra,India.</li>
            <li><i class="bi bi-telephone-fill me-2">  +91 5467 9345</i> </li>
            <li><i class="bi bi-envelope-fill me-2"></i> info@csedyp-travels.com</li>
          </ul>
          <div class="mt-3">
            <h6 class="text-white mb-2">Subscribe to Our Newsletter</h6>
            <div class="input-group">
              <input type="email" class="form-control" placeholder="Your email">
              <a href="destinations.html"</a> <button class="btn btn-primary" type="button">Subscribe</button>
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
  <a href="#" class="back-to-top" id="backToTop"><i class="bi bi-arrow-up"></i></a>
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