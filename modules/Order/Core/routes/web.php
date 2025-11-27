<?php
use Modules\Order\Core\Http\Controllers\HomeController;
use Ivi\Http\JsonResponse;

/** @var \Ivi\Core\Router\Router $router */
$router->get('/order', [HomeController::class, 'index']);
$router->get('/order/ping', fn() => new JsonResponse([
    'ok' => true,
    'module' => 'Order/Core'
]));