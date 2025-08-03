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
            <a class="nav-link" href="index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="about.html">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="destinations.html">Destinations</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="contact.html">Contact</a>
          </li>
          <li class="nav-item ms-lg-3">
            <a class="btn btn-primary rounded-pill px-4" href="destinations.html">Book Now</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Page Header -->
  <section class="hero" style="height: 60vh; background-image: url('https://images.pexels.com/photos/3876407/pexels-photo-3876407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')">
    <div class="hero-overlay"></div>
    <div class="container hero-content">
      <div class="row">
        <div class="col-lg-8">
          <h1 class="hero-heading text-white" data-aos="fade-up">Contact Us</h1>
          <p class="hero-subheading text-white" data-aos="fade-up" data-aos-delay="100">Get in touch with our travel experts to start planning your dream vacation</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section class="section">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 mb-5 mb-lg-0" data-aos="fade-right">
          <div class="contact-info">
            <h2 class="mb-4">Get In Touch</h2>
            <p class="mb-4">Have questions about our travel packages or ready to start planning your dream vacation? Our travel experts are here to help you every step of the way.</p>
            
            <div class="contact-info-item">
              <i class="bi bi-geo-alt-fill"></i>
              <div>
                <h5 class="mb-1">Visit Us</h5>
                <p class="mb-0">Front of Dr.D.Y.Patil College Kasaba Bawada , Kolhapur , Maharastra,India</p>
              </div>
            </div>
            
            <div class="contact-info-item">
              <i class="bi bi-telephone-fill"></i>
              <div>
                <h5 class="mb-1">Call Us</h5>
                <p class="mb-0">+91 3456 7832</p>
                <p class="mb-0">Mon-Fri: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
            
            <div class="contact-info-item">
              <i class="bi bi-envelope-fill"></i>
              <div>
                <h5 class="mb-1">Email Us</h5>
                <p class="mb-0">info@csedyp-travels.com</p>
                <p class="mb-0">bookings@csedyp-travels.com</p>
              </div>
            </div>
            
            <div class="mt-4">
              <h5 class="mb-3">Follow Us</h5>
              <div class="social-links">
                <a href="#" class="me-2"><i class="bi bi-facebook"></i></a>
                <a href="#" class="me-2"><i class="bi bi-instagram"></i></a>
                <a href="#" class="me-2"><i class="bi bi-twitter"></i></a>
                <a href="#"><i class="bi bi-youtube"></i></a>
              </div>
            </div>
          </div>
        </div>
        
        <div class="col-lg-7" data-aos="fade-left">
          <div class="contact-form">
            <h2 class="mb-4">Send Us a Message</h2>
            <form id="contactForm">
              <div class="row">
                <div class="col-md-6 mb-3">
                  <label for="name" class="form-label">Your Name *</label>
                  <input type="text" class="form-control" id="name" required>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="email" class="form-label">Your Email *</label>
                  <input type="email" class="form-control" id="email" required>
                </div>
              </div>
              
              <div class="mb-3">
                <label for="subject" class="form-label">Subject</label>
                <input type="text" class="form-control" id="subject">
              </div>
              
              <div class="mb-3">
                <label for="message" class="form-label">Your Message *</label>
                <textarea class="form-control" id="message" rows="5" required></textarea>
              </div>
              
              <div class="mb-3">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="newsletter">
                  <label class="form-check-label" for="newsletter">
                    Subscribe to our newsletter for travel tips and exclusive offers
                  </label>
                </div>
              </div>
              
              <button type="submit" class="btn btn-primary rounded-pill px-4 py-2">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Map Section -->
  <section class="section bg-light">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">Find Us</h2>
      <div class="row justify-content-center">
        <div class="col-lg-10" data-aos="fade-up">
          <div class="ratio ratio-21x9 rounded-3 overflow-hidden shadow">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304903!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25903e4f0f337%3A0xde2a08d86400ae1a!2sTimes%20Square%2C%20New%20York%2C%20NY%2010036%2C%20USA!5e0!3m2!1sen!2sin!4v1671709827284!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ Section -->
  <section class="section">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">Frequently Asked Questions</h2>
      <div class="row justify-content-center">
        <div class="col-lg-10" data-aos="fade-up">
          <div class="accordion" id="faqAccordion">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  How do I book a trip with CSE.DYP Travels?
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                  Booking a trip with us is easy! You can browse our destinations, select a package that interests you, and book directly on our website. Alternatively, you can contact our travel experts via phone, email, or by filling out the contact form on this page. We'll work with you to customize your trip according to your preferences and budget.
                </div>
              </div>
            </div>
            
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  What is included in your travel packages?
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                  Our standard packages typically include round-trip airfare, accommodation in carefully selected hotels, daily breakfast and select meals, guided tours and activities, airport transfers, and 24/7 support from our team. The exact inclusions vary by package and destination, so be sure to check the details of each offer or contact us for more information.
                </div>
              </div>
            </div>
            
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Can I customize my travel itinerary?
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                  Absolutely! We specialize in creating personalized travel experiences. While we offer standard packages, we're happy to customize every aspect of your trip according to your interests, preferences, and budget. Just let our travel consultants know what you're looking for, and we'll craft the perfect itinerary for you.
                </div>
              </div>
            </div>
            
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingFour">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  What is your cancellation policy?
                </button>
              </h2>
              <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                  Our cancellation policy varies depending on the destination, package, and timing of your cancellation. Generally, cancellations made more than 60 days before departure receive a full refund minus a small administrative fee. Cancellations made between 60 and 30 days before departure typically receive a 50% refund, while cancellations within 30 days of departure may not be eligible for a refund. We recommend purchasing travel insurance to protect against unexpected circumstances.
                </div>
              </div>
            </div>
            
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingFive">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                  Do you offer travel insurance?
                </button>
              </h2>
              <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                  Yes, we offer comprehensive travel insurance options through our trusted partners. We strongly recommend purchasing travel insurance to protect your investment against unforeseen circumstances such as trip cancellations, medical emergencies, lost luggage, and other travel-related issues. Our travel consultants can help you select the right coverage for your trip.
                </div>
              </div>
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
          <h2 class="mb-4">Ready to Start Your Adventure?</h2>
          <p class="lead mb-4">Our team of travel experts is ready to help you plan the vacation of your dreams. Contact us today to get started!</p>
          <div>
            <a href="destinations.html" class="btn btn-light text-primary btn-lg rounded-pill me-3 px-4 py-2">Browse Destinations</a>
            <a href="tel:+15551234567" class="btn btn-outline-light btn-lg rounded-pill px-4 py-2">Call Us Now</a>
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
          <p>Creating unforgettable travel experiences since 2005. Let us help you discover the world's most breathtaking destinations.</p>
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
            <li><a href="https://www.template.net/business/agreements/travel-agency-agreement/">Terms & Conditions</a></li>
            <li><a href="https://www.privacypolicies.com/blog/privacy-policy-clauses/">Privacy Policy</a></li>
          </ul>
        </div>
        <div class="col-md-6 col-lg-3 mb-4 mb-lg-0">
          <h5 class="footer-title">Top Destinations</h5>
          <ul class="footer-links">
            <li><a href="#">Sangali , Kolhapur</a></li>
            <li><a href="#">Satara , Karad</a></li>
            <li><a href="#">Pune , Sambhaji Nagar</a></li>
            <li><a href="#">Dharashiv , Kokan</a></li>
            <li><a href="#">Ratnagiri , Sidhudurg</a></li>
            <li><a href="#">Raigad , Mumbai</a></li>
          </ul>
        </div>
        <div class="col-md-6 col-lg-3">
          <h5 class="footer-title">Contact Us</h5>
          <ul class="footer-links">
            <li><i class="bi bi-geo-alt-fill me-2"></i> Kasaba Bawada Near Dr.D.Y.Patil College,kolhapur,Maharastra,India.</li>
            <li><i class="bi bi-telephone-fill me-2"></i> +91 5467 9345</li>
            <li><i class="bi bi-envelope-fill me-2"></i> info@csedyp-travels.com</li>
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
        <p class="mb-0">© 2025 CSE.DYP Travels. All rights reserved.</p>
      </div>
    </div>
  </footer>

  <!-- Back to top button -->
  <a href="#" class="back-to-top" id="backToTop"><i class="bi bi-arrow-up"></i></a>
`;

// Form validation
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let isValid = true;
    
    // Reset error states
    nameInput.classList.remove('is-invalid');
    emailInput.classList.remove('is-invalid');
    messageInput.classList.remove('is-invalid');
    
    // Validate name
    if (nameInput.value.trim() === '') {
      nameInput.classList.add('is-invalid');
      isValid = false;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      emailInput.classList.add('is-invalid');
      isValid = false;
    }
    
    // Validate message
    if (messageInput.value.trim() === '') {
      messageInput.classList.add('is-invalid');
      isValid = false;
    }
    
    if (isValid) {
      // Show success message
      contactForm.innerHTML = `
        <div class="alert alert-success" role="alert">
          <h4 class="alert-heading">Message Sent Successfully!</h4>
          <p>Thank you for contacting CSE.DYP Travels. One of our travel experts will get back to you within 24 hours.</p>
          <hr>
          <p class="mb-0">In the meantime, feel free to browse our <a href="destinations.html" class="alert-link">destination packages</a>.</p>
        </div>
      `;
    }
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