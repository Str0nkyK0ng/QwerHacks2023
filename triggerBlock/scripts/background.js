var matches;

chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setBadgeText({
    text: '1',
  });
  chrome.action.setBadgeBackgroundColor(
    { color: '#FFB09F' }, // RED
    () => {
      /* ... */
    }
  );
});

chrome.runtime.onMessage.addListener(
  // this is the message listener
  function (request, sender, sendResponse) {
    if (request == 'naur') {
      sendResponse = matches;

      return true;
    }
    matches = request;
    chrome.action.setBadgeText({
      text: '' + request.length,
    });
    sendResponse = 'YaddaYadda';
    return true;
  }
);
