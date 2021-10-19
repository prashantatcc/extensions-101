chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (sender.tab && request.action === "show") {
            console.log('received')
            chrome.notifications.create(new Date().getTime() + '', {
                type: 'basic',
                iconUrl: 'ic_launcher/16.png',
                title: 'Github profile picture clicked',
                message: 'hey there!',
                priority: 2
            })
        }
        return true
    }
)