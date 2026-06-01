const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage.";
const specialChars = [",", ".", "'", '"', "?", "!", ";"];
const wordCounts = {};

const cleanText = function(sentence) {
    let cleaned = sentence.toLowerCase();
    for (let char of specialChars) {
        cleaned = cleaned.split(char).join(" ");
    }
    return cleaned.split(" ");
};

const addToCounter = function(word) {
    if (wordCounts[word]) {
        wordCounts[word]++;
    }
    else {
        wordCounts[word] = 1;
    }
};

const countWords = function(sentence) {
    let wordsArray = cleanText(sentence);
    for (let word of wordsArray) {
        addToCounter(word);
    }
};

countWords(story);
console.log(wordCounts);
