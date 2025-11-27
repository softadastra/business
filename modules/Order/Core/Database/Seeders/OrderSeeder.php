<?php
declare(strict_types=1);

namespace Modules\Order\Core\Database\Seeders;

final class OrderSeeder
{
    public function run(): void
    {
        echo "[seed] Order ok\n";
    }
}

return new OrderSeeder();