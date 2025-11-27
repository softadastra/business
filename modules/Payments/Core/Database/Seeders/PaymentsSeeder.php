<?php
declare(strict_types=1);

namespace Modules\Payments\Core\Database\Seeders;

final class PaymentsSeeder
{
    public function run(): void
    {
        echo "[seed] Payments ok\n";
    }
}

return new PaymentsSeeder();