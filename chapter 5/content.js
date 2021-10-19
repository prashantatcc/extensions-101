let profile = document.getElementsByTagName('details')[3].children[0].children[0]


profile.addEventListener('click', function() {
    chrome.runtime.sendMessage({action: "show"}, null);
})