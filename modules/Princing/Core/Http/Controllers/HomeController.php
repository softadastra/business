<?php
namespace Modules\Princing\Core\Http\Controllers;

use App\Controllers\Controller;
use Ivi\Http\HtmlResponse;

class HomeController extends Controller
{
    public function index(): HtmlResponse
    {
        // Titre de la page
        $title = (string) (cfg(strtolower('Princing') . '.title', 'Softadastra Princing') ?: 'Softadastra Princing');
        $this->setPageTitle($title);

        // Message pour la vue
        $message = "Hello from PrincingController!";

        // 🔹 Correct: module_asset avec Core et tag HTML généré automatiquement
        $styles  = module_asset('Princing/Core', 'assets/css/style.css');
        $scripts = module_asset('Princing/Core', 'assets/js/script.js');

        return $this->view(strtolower('Princing') . '::home', [
            'title'   => $title,
            'message' => $message,
            'styles'  => $styles,
            'scripts' => $scripts,
        ]);
    }
}