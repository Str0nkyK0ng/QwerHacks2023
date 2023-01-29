var words = '';

chrome.runtime.onMessage.addListener(function (response, sendResponse) {
  words = response;
  response.forEach((word) => {
    document.getElementById('triggers').innerHTML += `<li> ${word} </li>`;
  });

  return true;
});

document.addEventListener('DOMContentLoaded', function () {
  chrome.runtime.sendMessage('naur', function (response) {
    document.getElementById('triggers').innerHTML = response;
  });
});
