chrome.runtime.onMessage.addListener(function(request, sender, sendResponse)    {
    document.title = request.command;
});