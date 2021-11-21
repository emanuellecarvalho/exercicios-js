function longestWord(sen) {
  let words = sen.split(" ");
  let longestWord = "";

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}


console.log(longestWord("Uma casa amarela"));
console.log(longestWord("I love dogs"));
