<?php
namespace Modules\Payments\Core\Http\Controllers;

use App\Controllers\Controller;
use Ivi\Http\HtmlResponse;

class HomeController extends Controller
{
    public function index(): HtmlResponse
    {
        // Titre de la page
        $title = (string) (cfg(strtolower('Payments') . '.title', 'Softadastra Payments') ?: 'Softadastra Payments');
        $this->setPageTitle($title);

        // Message pour la vue
        $message = "Hello from PaymentsController!";

        // 🔹 Correct: module_asset avec Core et tag HTML généré automatiquement
        $styles  = module_asset('Payments/Core', 'assets/css/style.css');
        $scripts = module_asset('Payments/Core', 'assets/js/script.js');

        return $this->view(strtolower('Payments') . '::home', [
            'title'   => $title,
            'message' => $message,
            'styles'  => $styles,
            'scripts' => $scripts,
        ]);
    }
}