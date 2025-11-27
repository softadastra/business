<?php
declare(strict_types=1);

namespace Modules\Contact\Core\Database\Seeders;

final class ContactSeeder
{
    public function run(): void
    {
        echo "[seed] Contact ok\n";
    }
}

return new ContactSeeder();