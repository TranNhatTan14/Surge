let body = JSON.parse($response.body)

body.items["user"] = {
        "is_on_free_trial": false,
        "can_purchase": false,
        "subscription_expiration_date_epoch": 7956915742,
        "current_subscription": {
            "sku": "com.elevateapp.elevate.renewable.year_subscription_16",
            "duration": "annual",
            "store": "App Store"
        },
    },

$done({body: JSON.stringify(body)})