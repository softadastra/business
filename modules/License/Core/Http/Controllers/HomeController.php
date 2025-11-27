<?php
namespace Modules\License\Core\Http\Controllers;

use App\Controllers\Controller;
use Ivi\Http\HtmlResponse;

class HomeController extends Controller
{
    public function index(): HtmlResponse
    {
        // Titre de la page
        $title = (string) (cfg(strtolower('License') . '.title', 'Softadastra License') ?: 'Softadastra License');
        $this->setPageTitle($title);

        // Message pour la vue
        $message = "Hello from LicenseController!";

        // 🔹 Correct: module_asset avec Core et tag HTML généré automatiquement
        $styles  = module_asset('License/Core', 'assets/css/style.css');
        $scripts = module_asset('License/Core', 'assets/js/script.js');

        return $this->view(strtolower('License') . '::home', [
            'title'   => $title,
            'message' => $message,
            'styles'  => $styles,
            'scripts' => $scripts,
        ]);
    }
}