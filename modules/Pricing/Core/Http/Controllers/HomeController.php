<?php
namespace Modules\Pricing\Core\Http\Controllers;

use App\Controllers\Controller;
use Ivi\Http\HtmlResponse;

class HomeController extends Controller
{
    public function index(): HtmlResponse
    {
        // Titre de la page
        $title = (string) (cfg(strtolower('Pricing') . '.title', 'Softadastra Pricing') ?: 'Softadastra Pricing');
        $this->setPageTitle($title);

        // Message pour la vue
        $message = "Hello from PricingController!";

        // 🔹 Correct: module_asset avec Core et tag HTML généré automatiquement
        $styles  = module_asset('Pricing/Core', 'assets/css/style.css');
        $scripts = module_asset('Pricing/Core', 'assets/js/script.js');

        return $this->view(strtolower('Pricing') . '::home', [
            'title'   => $title,
            'message' => $message,
            'styles'  => $styles,
            'scripts' => $scripts,
        ]);
    }
}