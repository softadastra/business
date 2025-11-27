<?php
namespace Modules\Testimonials\Core\Http\Controllers;

use App\Controllers\Controller;
use Ivi\Http\HtmlResponse;

class HomeController extends Controller
{
    public function index(): HtmlResponse
    {
        // Titre de la page
        $title = (string) (cfg(strtolower('Testimonials') . '.title', 'Softadastra Testimonials') ?: 'Softadastra Testimonials');
        $this->setPageTitle($title);

        // Message pour la vue
        $message = "Hello from TestimonialsController!";

        // 🔹 Correct: module_asset avec Core et tag HTML généré automatiquement
        $styles  = module_asset('Testimonials/Core', 'assets/css/style.css');
        $scripts = module_asset('Testimonials/Core', 'assets/js/script.js');

        return $this->view(strtolower('Testimonials') . '::home', [
            'title'   => $title,
            'message' => $message,
            'styles'  => $styles,
            'scripts' => $scripts,
        ]);
    }
}