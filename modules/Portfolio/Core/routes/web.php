<?php
use Modules\Portfolio\Core\Http\Controllers\HomeController;
use Ivi\Http\JsonResponse;

/** @var \Ivi\Core\Router\Router $router */
$router->get('/portfolio', [HomeController::class, 'index']);
$router->get('/portfolio/ping', fn() => new JsonResponse([
    'ok' => true,
    'module' => 'Portfolio/Core'
]));