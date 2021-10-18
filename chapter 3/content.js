function getUsername() {
    let a = document.getElementsByClassName('details-reset')[3].children[0]
    return a.children[1].textContent
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (!sender.tab) {
            if (request.action === "githubname") {
                let name = getUsername()
                sendResponse({name: name})
            }
        }
        return true
    }
)