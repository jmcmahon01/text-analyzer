// Utility Logic

function isEmpty(testString) {
  return (testString.trim().length === 0);
}






// Business Logic

function wordCounter(text) {
  if (isEmpty(text)) {
    return 0;
  }
  let wordCount = 0;
  const textArray = text.split(" ");
  textArray.forEach(function (element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

//split(" ") => "red blue green" => ["red", "blue", "green"]
//trim() => "   HELLO!   " => "HELLO!" 

function numberOfOccurrencesInText(word, text) {
  if (isEmpty(word)) {
    return 0;
  }
  const textArray = text.split(" ");
  let wordCount = 0;
  textArray.forEach(function (element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}





// UI Logic

function handleFormSubmission() {
  event.preventDefault();
  const passage = document.getElementById("text-passage").value;
  const word = document.getElementById("word").value;
  const wordCount = wordCounter(passage);
  const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
  document.getElementById("total-count").innerText = wordCount;
  document.getElementById("selected-count").innerText = occurrencesOfWord;
  // new lines here!
  let boldedPassage = boldPassage(word, passage);
  if (boldedPassage) {
    document.querySelector("div#bolded-passage").append(boldedPassage);
  } else {
    document.querySelector("div#bolded-passage").innerText = null;
  }
  document.getElementById("reset-btn").style.display = "inline-block";
}
function handleReset() {
  document.getElementById("word-counter").reset();
  document.getElementById("total-count").innerText = "";
  document.getElementById("selected-count").innerText = "";
  document.getElementById("bolded-passage").innerText = "";
  document.getElementById("reset-btn").style.display = "none";
}

window.addEventListener("load", function () {
  document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
  document.getElementById("reset-btn").addEventListener("click", handleReset);
});


function boldPassage(word, text) {
  if (isEmpty(word) || isEmpty(text)) {
    return null;
  }
  const p = document.createElement("p");
  let words = text.split(/\b/);
  words.forEach(function (element, index) {
    const bold = document.createElement("strong");
    if (word.toLowerCase() === element.toLowerCase()) {
      bold.innerText = element;
      p.append(bold);
    } else {
      p.append(element);
    }
  });
  return p;
  resetBtn.removeAttribute("class");
}









