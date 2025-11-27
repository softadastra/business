<?php
use Modules\AdminCli\Core\Http\Controllers\HomeController;
use Ivi\Http\JsonResponse;

/** @var \Ivi\Core\Router\Router $router */
$router->get('/admin_cli', [HomeController::class, 'index']);
$router->get('/admin_cli/ping', fn() => new JsonResponse([
    'ok' => true,
    'module' => 'AdminCli/Core'
]));