<?php
namespace Modules\Contact\Core\Http\Controllers;

use App\Controllers\Controller;
use Ivi\Http\HtmlResponse;

class HomeController extends Controller
{
    public function index(): HtmlResponse
    {
        // Titre de la page
        $title = (string) (cfg(strtolower('Contact') . '.title', 'Softadastra Contact') ?: 'Softadastra Contact');
        $this->setPageTitle($title);

        // Message pour la vue
        $message = "Hello from ContactController!";

        // 🔹 Correct: module_asset avec Core et tag HTML généré automatiquement
        $styles  = module_asset('Contact/Core', 'assets/css/style.css');
        $scripts = module_asset('Contact/Core', 'assets/js/script.js');

        return $this->view(strtolower('Contact') . '::home', [
            'title'   => $title,
            'message' => $message,
            'styles'  => $styles,
            'scripts' => $scripts,
        ]);
    }
}