<?php
namespace Modules\AdminCli\Core\Http\Controllers;

use App\Controllers\Controller;
use Ivi\Http\HtmlResponse;

class HomeController extends Controller
{
    public function index(): HtmlResponse
    {
        // Titre de la page
        $title = (string) (cfg(strtolower('AdminCli') . '.title', 'Softadastra AdminCli') ?: 'Softadastra AdminCli');
        $this->setPageTitle($title);

        // Message pour la vue
        $message = "Hello from AdminCliController!";

        // 🔹 Correct: module_asset avec Core et tag HTML généré automatiquement
        $styles  = module_asset('AdminCli/Core', 'assets/css/style.css');
        $scripts = module_asset('AdminCli/Core', 'assets/js/script.js');

        return $this->view(strtolower('AdminCli') . '::home', [
            'title'   => $title,
            'message' => $message,
            'styles'  => $styles,
            'scripts' => $scripts,
        ]);
    }
}