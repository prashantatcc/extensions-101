document.getElementById('btn').addEventListener('click', async (e) => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: "githubname"}, (r) => {
            document.getElementById('name').innerText = r.name
        })
    })
})