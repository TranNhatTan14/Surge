/*
Script to modify response for subscription-based apps using Surge.

This script modifies the response from the RevenueCat API to unlock premium features for specific apps by spoofing subscription data.
*/

const responseHeaders = {};

const parsedResponseBody = JSON.parse(typeof $response !== "undefined" && $response.body || null);

const userAgent = $request.headers['User-Agent'] || $request.headers['user-agent'];

const appSubscriptions = {
    'VSCO': {name: 'membership', id: 'com.circles.fin.premium.yearly'},
    '1Blocker': {name: 'premium', id: 'blocker.ios.subscription.yearly'},
    'Anybox': {name: 'pro', id: 'cc.anybox.Anybox.annual'},
	'Brilliant': {name: 'pro', id: 'cc.anybox.Anybox.annual'}
};

const subscriptionData = {
    "expires_date": "2099-02-18T07:52:54Z",
    "original_purchase_date": "2020-02-11T07:52:55Z",
    "purchase_date": "2020-02-11T07:52:54Z"
};

// if (typeof $response === "undefined") {
//     // Prevent 304 issues by removing etag headers
//     delete $request.headers["x-revenuecat-etag"];
//     delete $request.headers["X-RevenueCat-ETag"];

//     responseHeaders.headers = $request.headers;
// } else if (parsedResponseBody && parsedResponseBody.subscriber) {
//     parsedResponseBody.subscriber.subscriptions = parsedResponseBody.subscriber.subscriptions || {};
//     parsedResponseBody.subscriber.entitlement = parsedResponseBody.subscriber.entitlement || {};

//     for (const app in appSubscriptions) {
//         if (new RegExp(`^${app}`, `i`).test(userAgent)) {
//             parsedResponseBody.subscriber.subscriptions[appSubscriptions[app].id] = subscriptionData;
//             parsedResponseBody.subscriber.entitlements[appSubscriptions[app].name] = JSON.parse(JSON.stringify(subscriptionData));
//             parsedResponseBody.subscriber.entitlements[appSubscriptions[app].name].product_identifier = appSubscriptions[app].id;

//             break;
//         }
//     }

//     responseHeaders.body = JSON.stringify(parsedResponseBody)
//         .replace(/\"expires_date\":\"\w{4}/g, "\"expires_date\":\"2099")
//         .replace(/\"period_type\":\"\w+\"/g, "\"period_type\":\"active\"");
// }

$done(responseHeaders);