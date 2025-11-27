<?php
use Modules\Pricing\Core\Http\Controllers\HomeController;
use Ivi\Http\JsonResponse;

/** @var \Ivi\Core\Router\Router $router */
$router->get('/pricing', [HomeController::class, 'index']);
$router->get('/pricing/ping', fn() => new JsonResponse([
    'ok' => true,
    'module' => 'Pricing/Core'
]));