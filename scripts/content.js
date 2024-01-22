let disabled = false;

chrome.storage.local.get('disabled', function(data) {
    disabled = data.disabled;
});

function checkForEmptyPage() {
    if (disabled) {
        return;
    }

    const html = document.documentElement.innerHTML;
    if (html.includes('<div id="app"></div>')) {
        location.reload();
    }
    setTimeout(checkForEmptyPage, 500);
}

setTimeout(checkForEmptyPage, 500);