function setCloudStorage(val) {
  chrome.storage.sync.set({ userTriggerWords: val });
  console.log('Pushed Cloud Storage:' + val);
}

function getCloudStorage() {
  chrome.storage.sync.get(['userTriggerWords']).then((result) => {
    console.log('Raw From Cloud:' + result.userTriggerWords);
    return result.userTriggerWords;
  });
}

chrome.storage.onChanged.addListener((changes, namespace) => {
  for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
    console.log(
      `Storage key "${key}" in namespace "${namespace}" changed.`,
      `Old value was "${oldValue}", new value is "${newValue}".`
    );
  }
});
