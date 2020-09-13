// Listen to messages sent from other parts of the extension.
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.popupMounted) {
        console.log('popup has mounted');
    }
    if(request.startGame) {
        chrome.tabs.executeScript({
            file:'js/game.js'
        })
        sendResponse({close: true})
    }
    // if (request.startGame){
    // }
    return false;
});
