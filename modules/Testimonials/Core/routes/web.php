<?php
use Modules\Testimonials\Core\Http\Controllers\HomeController;
use Ivi\Http\JsonResponse;

/** @var \Ivi\Core\Router\Router $router */
$router->get('/testimonials', [HomeController::class, 'index']);
$router->get('/testimonials/ping', fn() => new JsonResponse([
    'ok' => true,
    'module' => 'Testimonials/Core'
]));