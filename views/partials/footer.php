<?php
$brand = $_ENV['BUSINESS_BRAND'] ?? 'SoftAdAstra Business';
$year = date('Y');
$support = $_ENV['BUSINESS_SUPPORT_EMAIL'] ?? 'support@softadastra.com';
$whatsapp = $_ENV['BUSINESS_WHATSAPP'] ?? '+2250123456789';
?>
<footer class="site-footer">
    <div class="footer-container">
        <!-- Brand & Description -->
        <div class="footer-section">
            <h5><?= htmlspecialchars($brand) ?></h5>
            <p class="small">High-performance software solutions & APIs — fast delivery — licenses on demand.</p>
            <p class="small text-muted">Building smarter digital experiences for businesses worldwide.</p>
        </div>

        <!-- Services -->
        <div class="footer-section">
            <h6>Services</h6>
            <ul class="footer-list">
                <li><?= spa_link('/services', 'Our Services') ?></li>
                <li><?= spa_link('/pricing', 'Pricing') ?></li>
                <li><?= spa_link('/portfolio', 'Portfolio') ?></li>
                <li><?= spa_link('/order', 'Place Order') ?></li>
            </ul>
        </div>

        <!-- Resources -->
        <div class="footer-section">
            <h6>Resources</h6>
            <ul class="footer-list">
                <li><?= spa_link('/testimonials', 'Testimonials') ?></li>
                <li><?= spa_link('/license', 'Licenses') ?></li>
                <li><?= spa_link('/contact', 'Contact Us') ?></li>
                <li><?= spa_link('/admin', 'Admin Panel') ?></li>
            </ul>
        </div>

        <!-- Contact & Social -->
        <div class="footer-section">
            <h6>Contact</h6>
            <ul class="footer-list">
                <li>Email: <a href="mailto:<?= htmlspecialchars($support) ?>"><?= htmlspecialchars($support) ?></a></li>
                <li>WhatsApp: <a href="<?= htmlspecialchars('https://wa.me/' . preg_replace('/\D+/', '', $whatsapp)) ?>" target="_blank"><?= htmlspecialchars($whatsapp) ?></a></li>
            </ul>
            <div class="social-icons">
                <a href="https://x.com/YourHandle" target="_blank"><i class="fab fa-xmark"></i></a>
                <a href="https://www.linkedin.com/in/YourProfile" target="_blank"><i class="fab fa-linkedin"></i></a>
                <a href="https://www.instagram.com/YourProfile" target="_blank"><i class="fab fa-instagram"></i></a>
            </div>
        </div>

        <!-- Legal -->
        <div class="footer-section footer-legal">
            <small>© <?= $year ?> <?= htmlspecialchars($brand) ?></small>
            <small>All rights reserved</small>
            <small>
                <a href="/privacy-policy">Privacy Policy</a> |
                <a href="/terms-of-service">Terms of Service</a>
            </small>
        </div>
    </div>
</footer>