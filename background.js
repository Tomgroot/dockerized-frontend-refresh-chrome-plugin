chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.refreshTab) {
        chrome.tabs.reload(request.tabId);
    }
});