(function () {
  var HEADER_HTML = `
    <!-- Preloder Area -->
    <div class="preloader">
      <div class="d-table">
        <div class="d-table-cell">
          <div class="lds-hourglass"></div>
        </div>
      </div>
    </div>
    <!-- End Preloder Area -->

    <!-- Heder Area -->
    <header class="header-area">
      <div class="top-header">
        <div class="container">
          <div class="row align-items-center justify-content-center">
            <div class="col-lg-6 col-sm-6">
              <ul class="left-info">
                <li>
                  <a href="tel:+919041182769">
                    <i class="las la-phone"></i>
                    +91 90411 82769
                  </a>
                </li>
                <li>
                  <a href="tel:+919878438399">
                    <i class="las la-phone"></i>
                    +91 98784 38399
                  </a>
                </li>
                <li>
                  <a href="tel:+919876265399">
                    <i class="las la-phone"></i>
                    +91 98762 65399
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-lg-6 col-sm-6">
              <ul class="right-info">
                <li>
                  <a href="https://www.facebook.com/naturetradenetwork/" target="_blank">
                    <i class="lab la-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="https://x.com/NTradenetwork" target="_blank">
                    <i class="lab la-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/naturetradenetwork/" target="_blank">
                    <i class="lab la-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UCjx5D1AnL3aLTSvk2PtxFdQ" target="_blank">
                    <i class="lab la-youtube"></i>
                  </a>
                </li>
                <li class="heder-btn">
                  <a href="contact.html">Get Quote</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Start Navbar Area -->
      <div class="navbar-area">
        <div class="atorn-responsive-nav">
          <div class="container">
            <div class="atorn-responsive-menu">
              <div class="logo">
                <a href="index.html">
                  <img src="assets/img/logo.webp" class="logo1" alt="logo" />
                  <img src="assets/img/logo-white.webp" class="logo2" alt="logo" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="atorn-nav">
          <div class="container">
            <nav class="navbar navbar-expand-md navbar-light">
              <a class="navbar-brand" href="index.html">
                <img src="assets/img/logo.webp" class="logo1" alt="logo" />
                <img src="assets/img/logo-white.webp" class="logo2" alt="logo" />
              </a>

              <div class="collapse navbar-collapse mean-menu">
                <ul class="navbar-nav ms-auto">
                  <li class="nav-item">
                    <a href="index.html" class="nav-link">Home</a>
                  </li>

                  <li class="nav-item">
                    <a href="about.html" class="nav-link">About Us</a>
                  </li>

                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      Machines <i class="las la-angle-down"></i>
                    </a>
                    <ul class="dropdown-menu">
                      <li class="nav-item">
                        <a href="bending-machines.html" class="nav-link">Bending Machines</a>
                      </li>
                      <li class="nav-item">
                        <a href="cutting-machines.html" class="nav-link">Cutting Machines</a>
                      </li>
                      <li class="nav-item">
                        <a href="cnc-copy-routing-machines.html" class="nav-link">CNC Copy Routing Machines</a>
                      </li>
                      <li class="nav-item">
                        <a href="hinges-punching-machines.html" class="nav-link">Hinges Punching Machines</a>
                      </li>
                      <li class="nav-item">
                        <a href="portable-pipe-bending-machines.html" class="nav-link">Portable Pipe Bending Machines</a>
                      </li>
                    </ul>
                  </li>

                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      Services <i class="las la-angle-down"></i>
                    </a>
                    <ul class="dropdown-menu">
                      <li class="nav-item">
                        <a href="service-air-freight.html" class="nav-link">Air Freight Services</a>
                      </li>
                      <li class="nav-item">
                        <a href="service-ocean-freight.html" class="nav-link">Ocean Freight Services</a>
                      </li>
                      <li class="nav-item">
                        <a href="service-warehousing.html" class="nav-link">Warehousing</a>
                      </li>
                      <li class="nav-item">
                        <a href="service-packaging.html" class="nav-link">Packaging</a>
                      </li>
                      <li class="nav-item">
                        <a href="service-custom-clearance.html" class="nav-link">Custom Clearance</a>
                      </li>
                      <li class="nav-item">
                        <a href="service-iec-registration.html" class="nav-link">IEC Registration</a>
                      </li>
                      <li class="nav-item">
                        <a href="service-insurance.html" class="nav-link">Insurance</a>
                      </li>
                    </ul>
                  </li>

                  <li class="nav-item">
                    <a href="gallery.html" class="nav-link">Gallery</a>
                  </li>

                  <li class="nav-item">
                    <a href="blogs.html" class="nav-link">Blogs</a>
                  </li>

                  <li class="nav-item">
                    <a href="faq.html" class="nav-link">FAQ</a>
                  </li>

                  <li class="nav-item">
                    <a href="contact.html" class="nav-link">Contact</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <!-- End Navbar Area -->
    </header>
    <!-- End Heder Area -->
  `;

  var FOOTER_HTML = `
    <!-- Footer Area-->
    <footer class="footer-area pt-100 pb-70">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-5 col-sm-6">
            <div class="footer-widget">
              <div class="logo">
                <img src="assets/img/logo-white.webp" alt="logo" />
              </div>
              <p>
                Nature Trade Network specializes in global trade logistics with
                over 10 years of experience. We offer air and ocean freight,
                custom clearance, packaging, and warehousing services. Trusted
                by 250+ clients, we ensure your goods reach their destination
                safely and efficiently, making international trade smooth and
                hassle-free.
              </p>

              <ul class="footer-socials">
                <li>
                  <a href="https://www.facebook.com/naturetradenetwork/" target="_blank">
                    <i class="lab la-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="https://x.com/NTradenetwork" target="_blank">
                    <i class="lab la-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/naturetradenetwork/" target="_blank">
                    <i class="lab la-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UCjx5D1AnL3aLTSvk2PtxFdQ" target="_blank">
                    <i class="lab la-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-lg-2 col-sm-6">
            <div class="footer-widget">
              <h3>Quick Links</h3>

              <ul class="footer-text">
                <li>
                  <a href="index.html">
                    <i class="las la-star"></i>
                    Home
                  </a>
                </li>
                <li>
                  <a href="about.html">
                    <i class="las la-star"></i>
                    About Us
                  </a>
                </li>
                <li>
                  <a href="gallery.html">
                    <i class="las la-star"></i>
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="blogs.html">
                    <i class="las la-star"></i>
                    Blogs
                  </a>
                </li>
                <li>
                  <a href="contact.html">
                    <i class="las la-star"></i>
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="faq.html">
                    <i class="las la-star"></i>
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="privacy-policy.html">
                    <i class="las la-star"></i>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="terms-condition.html">
                    <i class="las la-star"></i>
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-lg-2 col-sm-6">
            <div class="footer-widget pl-50">
              <h3>Services</h3>

              <ul class="footer-text">
                <li>
                  <a href="service-air-freight.html">
                    <i class="las la-star"></i>
                    Air Freight
                  </a>
                </li>
                <li>
                  <a href="service-ocean-freight.html">
                    <i class="las la-star"></i>
                    Ocean Freight
                  </a>
                </li>
                <li>
                  <a href="service-warehousing.html">
                    <i class="las la-star"></i>
                    Warehousing
                  </a>
                </li>
                <li>
                  <a href="service-packaging.html">
                    <i class="las la-star"></i>
                    Packaging
                  </a>
                </li>
                <li>
                  <a href="service-custom-clearance.html">
                    <i class="las la-star"></i>
                    Custom Clearance
                  </a>
                </li>
                <li>
                  <a href="service-iec-registration.html">
                    <i class="las la-star"></i>
                    IEC Registration
                  </a>
                </li>
                <li>
                  <a href="service-insurance.html">
                    <i class="las la-star"></i>
                    Insurance
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-lg-3 col-sm-6">
            <div class="footer-widget">
              <h3>Contact Info</h3>

              <ul class="info-list">
                <li>
                  <i class="las la-phone"></i>
                  <a href="tel:+919041182769">+91 90411 82769 (For Machines)</a>
                </li>
                <li>
                  <i class="las la-phone"></i>
                  <a href="tel:+919878438399">+91 98784 38399 (For Freight Services)</a>
                </li>
                <li>
                  <i class="las la-phone"></i>
                  <a href="tel:+919876265399">+91 98762 65399 (For Freight Services)</a>
                </li>
                <li>
                  <i class="las la-envelope"></i>
                  <a href="mailto:naturetradenetwork2024@gmail.com">naturetradenetwork2024@gmail.com</a>
                </li>
                <li>
                  <i class="las la-envelope"></i>
                  <a href="mailto:naturetradenetwork@gmail.com">naturetradenetwork@gmail.com</a>
                </li>
                <li>
                  <i class="las la-map-marker-alt"></i>
                  472/7, Balaji Arcade, 2nd &amp; 3rd Floor, AVS Layout, Ejipura,
                  Koramangala 4th Block, 20th L Cross Road,
                  Koramangala, Bengaluru, Karnataka, IN 560095
                </li>
                <li>
                  <i class="las la-map-marker-alt"></i>
                  Shop No. 8, Bud Majra, Kharar, Mohali, Punjab, IN 140301
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!-- End Footer Area -->

    <!-- Footer bottom Area -->
    <div class="footer-bottom">
      <div class="container">
        <p>&copy;2026 Nature TradeNetwork | Naturetradenetwork.com</p>
      </div>
    </div>
    <!-- End Footer bottom Area -->

    <!-- Go Top -->
    <div class="go-top">
      <i class="las la-hand-point-up"></i>
    </div>
    <!-- End Go Top -->
  `;

  var headerEl = document.getElementById("header-placeholder");
  var footerEl = document.getElementById("footer-placeholder");

  if (headerEl) headerEl.outerHTML = HEADER_HTML;
  if (footerEl) footerEl.outerHTML = FOOTER_HTML;

  // Set active nav link based on current page filename
  var page = window.location.pathname.split("/").pop() || "index.html";
  if (!page) page = "index.html";

  document.querySelectorAll(".navbar-nav .nav-link").forEach(function (link) {
    var href = link.getAttribute("href");
    if (href === page) {
      link.classList.add("active");
      // If inside a dropdown, also mark the parent toggle as active
      var dropdownMenu = link.closest(".dropdown-menu");
      if (dropdownMenu) {
        var parentItem = dropdownMenu.previousElementSibling;
        if (parentItem && parentItem.classList.contains("nav-link")) {
          parentItem.classList.add("active");
        }
      }
    }
  });

  // Thumb slider: wrap each .thumbs strip with prev/next arrow buttons
  document.addEventListener("DOMContentLoaded", function () {
    document
      .querySelectorAll(".machine-gallery .thumbs")
      .forEach(function (thumbsEl) {
        var wrapper = document.createElement("div");
        wrapper.className = "thumbs-wrapper";

        var prevBtn = document.createElement("button");
        prevBtn.type = "button";
        prevBtn.className = "thumb-nav-btn thumb-nav-prev";
        prevBtn.innerHTML = '<i class="las la-angle-left"></i>';
        prevBtn.setAttribute("aria-label", "Previous thumbnails");

        var nextBtn = document.createElement("button");
        nextBtn.type = "button";
        nextBtn.className = "thumb-nav-btn thumb-nav-next";
        nextBtn.innerHTML = '<i class="las la-angle-right"></i>';
        nextBtn.setAttribute("aria-label", "Next thumbnails");

        thumbsEl.parentNode.insertBefore(wrapper, thumbsEl);
        wrapper.appendChild(prevBtn);
        wrapper.appendChild(thumbsEl);
        wrapper.appendChild(nextBtn);

        var SCROLL_PX = 160;

        prevBtn.addEventListener("click", function () {
          thumbsEl.scrollLeft -= SCROLL_PX;
        });

        nextBtn.addEventListener("click", function () {
          thumbsEl.scrollLeft += SCROLL_PX;
        });

        function updateBtns() {
          var noOverflow = thumbsEl.scrollWidth <= thumbsEl.clientWidth + 4;
          prevBtn.style.display = noOverflow ? "none" : "";
          nextBtn.style.display = noOverflow ? "none" : "";
          if (!noOverflow) {
            prevBtn.disabled = thumbsEl.scrollLeft <= 2;
            nextBtn.disabled =
              thumbsEl.scrollLeft + thumbsEl.clientWidth >=
              thumbsEl.scrollWidth - 2;
          }
        }

        thumbsEl.addEventListener("scroll", updateBtns);

        // Center the clicked thumbnail in the strip
        thumbsEl.addEventListener("click", function (e) {
          var img = e.target.closest("img");
          if (!img) return;
          var containerRect = thumbsEl.getBoundingClientRect();
          var imgRect = img.getBoundingClientRect();
          var delta =
            imgRect.left +
            imgRect.width / 2 -
            (containerRect.left + containerRect.width / 2);
          thumbsEl.scrollLeft += delta;
        });

        updateBtns();
        // Re-check once images have loaded
        setTimeout(updateBtns, 200);
      });
  });
})();
