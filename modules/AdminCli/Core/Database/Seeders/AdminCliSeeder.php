<?php
declare(strict_types=1);

namespace Modules\AdminCli\Core\Database\Seeders;

final class AdminCliSeeder
{
    public function run(): void
    {
        echo "[seed] AdminCli ok\n";
    }
}

return new AdminCliSeeder();