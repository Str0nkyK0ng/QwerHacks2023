//Get the raw txt
async function fetchTriggerWordsTXT() {
  const url = chrome.runtime.getURL('data/triggerList.txt');
  const response = await fetch(url);
  const text = await response.text();
  return text;
}

//What to do AFTER we get our text
function finishParsing() {
  console.log('triggerWords:' + triggerWords);

  var matchList = [];
  const text = article.textContent;

  //Search for every word in our trigger list in the article content
  triggerWords.forEach((element) => {
    if (text.includes(element)) {
      //add it to our matchList
      matchList.push(element);
      console.log(`We found "${element}"`);
    }
  });
}

//The actual ran code
const article = document.querySelector('article');
//The list of our trigger words
var triggerWords;
// `document.querySelector` may return null if the selector doesn't match anything.
if (article) {
  //Fetch the words, split then based off of new lines, then finish parsing
  fetchTriggerWordsTXT().then((rawWordList) => {
    setTriggerWords(rawWordList.split('\n'));
    finishParsing();
  });
}

function setTriggerWords(value) {
  triggerWords = value;
}
