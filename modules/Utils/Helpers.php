<?php

namespace Modules\Utils;

class Helpers
{
    public function prepare(Request $req)
    {
        $data = $req->only(['name', 'phone', 'service', 'details']);
        $orderId = Order::create([
            'name' => $data['name'],
            'phone' => $data['phone'] ?? null,
            'service_slug' => $data['service'],
            'details' => $data['details'],
            'status' => 'pending'
        ])->id;

        $msg = "Commande%20SoftAdAstra%0AID:$orderId%0AService:" . urlencode($data['service']) . "%0ANom:" . urlencode($data['name']);
        if (!empty($data['phone'])) $msg .= "%0APhone:" . urlencode($data['phone']);
        $msg .= "%0ADétails:" . urlencode(substr($data['details'], 0, 800));

        $whatsappNumber = "225XXXXXXXXX"; // format international
        return redirect()->away("https://wa.me/$whatsappNumber?text=$msg");
    }

    function generateLicenseKey(int $orderId, string $productSlug): string
    {
        $raw = bin2hex(random_bytes(12)); // 24 chars
        $ts = dechex(time());
        $key = strtoupper(substr($productSlug, 0, 3) . '-' . substr($raw, 0, 6) . '-' . substr($raw, 6, 6) . '-' . $ts);
        // enregistrez en base
        DB::table('licenses')->insert([
            'order_id' => $orderId,
            'license_key' => $key,
            'product_slug' => $productSlug,
            'issued_at' => date('Y-m-d H:i:s')
        ]);
        return $key;
    }
}
