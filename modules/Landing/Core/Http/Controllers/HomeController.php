<?php
namespace Modules\Landing\Core\Http\Controllers;

use App\Controllers\Controller;
use Ivi\Http\HtmlResponse;

class HomeController extends Controller
{
    public function index(): HtmlResponse
    {
        // Titre de la page
        $title = (string) (cfg(strtolower('Landing') . '.title', 'Softadastra Landing') ?: 'Softadastra Landing');
        $this->setPageTitle($title);

        // Message pour la vue
        $message = "Hello from LandingController!";

        // 🔹 Correct: module_asset avec Core et tag HTML généré automatiquement
        $styles  = module_asset('Landing/Core', 'assets/css/style.css');
        $scripts = module_asset('Landing/Core', 'assets/js/script.js');

        return $this->view(strtolower('Landing') . '::home', [
            'title'   => $title,
            'message' => $message,
            'styles'  => $styles,
            'scripts' => $scripts,
        ]);
    }
}