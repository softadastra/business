<?php
use Modules\Contact\Core\Http\Controllers\HomeController;
use Ivi\Http\JsonResponse;

/** @var \Ivi\Core\Router\Router $router */
$router->get('/contact', [HomeController::class, 'index']);
$router->get('/contact/ping', fn() => new JsonResponse([
    'ok' => true,
    'module' => 'Contact/Core'
]));