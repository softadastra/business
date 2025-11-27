<?php
declare(strict_types=1);

namespace Modules\AdminCli\Core\Services;

final class AdminCliService
{
    public function info(): string
    {
        return 'Module AdminCli loaded successfully.';
    }
}