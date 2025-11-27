<?php
use Modules\Princing\Core\Http\Controllers\HomeController;
use Ivi\Http\JsonResponse;

/** @var \Ivi\Core\Router\Router $router */
$router->get('/princing', [HomeController::class, 'index']);
$router->get('/princing/ping', fn() => new JsonResponse([
    'ok' => true,
    'module' => 'Princing/Core'
]));