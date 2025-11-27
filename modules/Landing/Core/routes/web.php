<?php
use Modules\Landing\Core\Http\Controllers\HomeController;
use Ivi\Http\JsonResponse;

/** @var \Ivi\Core\Router\Router $router */
$router->get('/landing', [HomeController::class, 'index']);
$router->get('/landing/ping', fn() => new JsonResponse([
    'ok' => true,
    'module' => 'Landing/Core'
]));