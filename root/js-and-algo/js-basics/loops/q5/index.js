const dictionary = {
  "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
  "B": ["Banana", "Bonkers", "Brain", "Bump"],
  "C": ["Callous", "Chain", "Coil", "Czech"]
};
const keys = Object.keys(dictionary);

for (let i = 0; i < keys.length; i++) {
    let currLetter = keys[i];
    console.log("Words that begin with " + currLetter + ":");

    let words = dictionary[currLetter];
    for (let j = 0; j < words.length; j++) {
        console.log(words[j]);
    }
}