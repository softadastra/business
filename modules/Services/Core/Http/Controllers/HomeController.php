<?php
namespace Modules\Services\Core\Http\Controllers;

use App\Controllers\Controller;
use Ivi\Http\HtmlResponse;

class HomeController extends Controller
{
    public function index(): HtmlResponse
    {
        // Titre de la page
        $title = (string) (cfg(strtolower('Services') . '.title', 'Softadastra Services') ?: 'Softadastra Services');
        $this->setPageTitle($title);

        // Message pour la vue
        $message = "Hello from ServicesController!";

        // 🔹 Correct: module_asset avec Core et tag HTML généré automatiquement
        $styles  = module_asset('Services/Core', 'assets/css/style.css');
        $scripts = module_asset('Services/Core', 'assets/js/script.js');

        return $this->view(strtolower('Services') . '::home', [
            'title'   => $title,
            'message' => $message,
            'styles'  => $styles,
            'scripts' => $scripts,
        ]);
    }
}