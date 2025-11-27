<?php
use Modules\License\Core\Http\Controllers\HomeController;
use Ivi\Http\JsonResponse;

/** @var \Ivi\Core\Router\Router $router */
$router->get('/license', [HomeController::class, 'index']);
$router->get('/license/ping', fn() => new JsonResponse([
    'ok' => true,
    'module' => 'License/Core'
]));