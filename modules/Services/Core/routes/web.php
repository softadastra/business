<?php
use Modules\Services\Core\Http\Controllers\HomeController;
use Ivi\Http\JsonResponse;

/** @var \Ivi\Core\Router\Router $router */
$router->get('/services', [HomeController::class, 'index']);
$router->get('/services/ping', fn() => new JsonResponse([
    'ok' => true,
    'module' => 'Services/Core'
]));