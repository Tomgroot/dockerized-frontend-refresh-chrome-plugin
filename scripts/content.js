function checkForEmptyPage() {
    const html = document.documentElement.innerHTML;
    if (html.includes('<div id="app"></div>')) {
        location.reload();
    }
    setTimeout(checkForEmptyPage, 500);
}

setTimeout(checkForEmptyPage, 500);