<?php
use Modules\Payments\Core\Http\Controllers\HomeController;
use Ivi\Http\JsonResponse;

/** @var \Ivi\Core\Router\Router $router */
$router->get('/payments', [HomeController::class, 'index']);
$router->get('/payments/ping', fn() => new JsonResponse([
    'ok' => true,
    'module' => 'Payments/Core'
]));