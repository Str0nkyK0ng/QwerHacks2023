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

chrome.runtime.onMessage.addListener((info) => {
  chrome.action.setBadgeText({
    text: info.greeting,
  });
});
