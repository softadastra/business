<?php
namespace Modules\Order\Core\Http\Controllers;

use App\Controllers\Controller;
use Ivi\Http\HtmlResponse;

class HomeController extends Controller
{
    public function index(): HtmlResponse
    {
        // Titre de la page
        $title = (string) (cfg(strtolower('Order') . '.title', 'Softadastra Order') ?: 'Softadastra Order');
        $this->setPageTitle($title);

        // Message pour la vue
        $message = "Hello from OrderController!";

        // 🔹 Correct: module_asset avec Core et tag HTML généré automatiquement
        $styles  = module_asset('Order/Core', 'assets/css/style.css');
        $scripts = module_asset('Order/Core', 'assets/js/script.js');

        return $this->view(strtolower('Order') . '::home', [
            'title'   => $title,
            'message' => $message,
            'styles'  => $styles,
            'scripts' => $scripts,
        ]);
    }
}