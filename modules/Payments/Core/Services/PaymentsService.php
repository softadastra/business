<?php
declare(strict_types=1);

namespace Modules\Payments\Core\Services;

final class PaymentsService
{
    public function info(): string
    {
        return 'Module Payments loaded successfully.';
    }
}