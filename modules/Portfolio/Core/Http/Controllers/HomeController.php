<?php
namespace Modules\Portfolio\Core\Http\Controllers;

use App\Controllers\Controller;
use Ivi\Http\HtmlResponse;

class HomeController extends Controller
{
    public function index(): HtmlResponse
    {
        // Titre de la page
        $title = (string) (cfg(strtolower('Portfolio') . '.title', 'Softadastra Portfolio') ?: 'Softadastra Portfolio');
        $this->setPageTitle($title);

        // Message pour la vue
        $message = "Hello from PortfolioController!";

        // 🔹 Correct: module_asset avec Core et tag HTML généré automatiquement
        $styles  = module_asset('Portfolio/Core', 'assets/css/style.css');
        $scripts = module_asset('Portfolio/Core', 'assets/js/script.js');

        return $this->view(strtolower('Portfolio') . '::home', [
            'title'   => $title,
            'message' => $message,
            'styles'  => $styles,
            'scripts' => $scripts,
        ]);
    }
}