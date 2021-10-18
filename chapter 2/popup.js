function getLatestBookmark() {
    return new Promise((resolve, reject) => {
        chrome.bookmarks.getTree(function (bookmarkTreeNodes) {
            let children = bookmarkTreeNodes[0]
            while (children) {
                if (children.children && children.children.length > 0) {
                    children = children.children[0]
                } else {
                    resolve(children.url)
                    children = null
                }
            }
        })
    })
}

document.getElementById('btn').addEventListener('click', async (e) => {
    let url = await getLatestBookmark()
    chrome.tabs.create({ url: url })
})