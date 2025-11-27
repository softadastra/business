<?php
$brand = $_ENV['BUSINESS_BRAND'] ?? 'SoftAdAstra Business';
$logo  = asset('assets/logo/softadastra-business.png');
$whatsapp = $_ENV['BUSINESS_WHATSAPP'] ?? '+2250123456789';

$mainMenu = [
    '/'         => 'Home',
    '/services' => 'Services',
    '/pricing'  => 'Pricing',
    '/order'    => 'Order'
];

$moreMenu = [
    '/portfolio'    => 'Portfolio',
    '/testimonials' => 'Testimonials',
    '/license'      => 'Licenses',
    '/contact'      => 'Contact',
    '/admin'        => 'Admin CLI'
];

$externalContacts = [
    'https://x.com/YourHandle' => ['label' => 'X', 'icon' => 'fab fa-xmark'],
    'https://www.linkedin.com/in/YourProfile' => ['label' => 'LinkedIn', 'icon' => 'fab fa-linkedin'],
    'https://www.instagram.com/YourProfile' => ['label' => 'Instagram', 'icon' => 'fab fa-instagram'],
    'mailto:' . ($_ENV['BUSINESS_SUPPORT_EMAIL'] ?? 'support@softadastra.com') => ['label' => 'Email', 'icon' => 'fas fa-envelope'],
    'https://wa.me/' . preg_replace('/\D+/', '', $whatsapp) => ['label' => 'WhatsApp', 'icon' => 'fab fa-whatsapp']
];
?>

<header class="site-header" role="banner">
    <div class="header-container">

        <!-- Brand -->
        <a class="brand" href="/" data-spa aria-label="<?= htmlspecialchars($brand) ?>">
            <?php if (file_exists(public_path('assets/logo/softadastra-business.png'))): ?>
                <img src="<?= $logo ?>" alt="<?= htmlspecialchars($brand) ?> logo" />
            <?php else: ?>
                <div class="logo-fallback"><?= htmlspecialchars(substr($brand, 0, 1)) ?></div>
            <?php endif; ?>

            <div class="brand-text">
                <span class="brand-title"><?= htmlspecialchars($brand) ?></span>
                <small class="brand-sub">Business</small>
            </div>
        </a>

        <!-- Menu toggle (mobile) -->
        <button class="menu-toggle" id="menuToggle" aria-label="Open menu" aria-controls="mainNav" aria-expanded="false">☰</button>

        <!-- Navigation -->
        <nav class="main-nav" id="mainNav" role="navigation" aria-label="Main">
            <ul class="nav-links" role="menubar">
                <?php foreach ($mainMenu as $href => $label): ?>
                    <li class="nav-item" role="none">
                        <?= spa_link($href, $label, ['class' => 'nav-link', 'role' => 'menuitem']) ?>
                    </li>
                <?php endforeach; ?>

                <li class="nav-item dropdown" data-dropdown>
                    <button class="nav-link dropdown-toggle" aria-haspopup="true" aria-expanded="false" aria-controls="moreMenu">More</button>
                    <ul class="dropdown-menu" id="moreMenu" role="menu" aria-hidden="true">
                        <?php foreach ($moreMenu as $href => $label): ?>
                            <li role="none"><?= spa_link($href, $label, ['class' => 'dropdown-item', 'role' => 'menuitem']) ?></li>
                        <?php endforeach; ?>

                        <li class="dropdown-separator" role="separator"></li>

                        <?php foreach ($externalContacts as $url => $meta): ?>
                            <li role="none">
                                <a class="dropdown-item" href="<?= htmlspecialchars($url) ?>" target="_blank" rel="noopener noreferrer" role="menuitem">
                                    <i class="<?= htmlspecialchars($meta['icon']) ?>"></i> <?= htmlspecialchars($meta['label']) ?>
                                </a>
                            </li>
                        <?php endforeach; ?>
                    </ul>
                </li>
            </ul>

            <div class="header-actions">
                <a class="btn-primary" href="<?= htmlspecialchars('https://wa.me/' . preg_replace('/\D+/', '', $whatsapp) . '?text=' . urlencode('Hello, I would like to place an order')) ?>" target="_blank" rel="noopener noreferrer">
                    <i class="fab fa-whatsapp"></i> Order
                </a>
            </div>
        </nav>
    </div>
</header>

<!-- Floating CTA -->
<a class="sticky-whatsapp" href="<?= htmlspecialchars('https://wa.me/' . preg_replace('/\D+/', '', $whatsapp) . '?text=' . urlencode('Hello, I would like to place an order')) ?>" aria-label="Order via WhatsApp">
    <i class="fab fa-whatsapp"></i> Order
</a>