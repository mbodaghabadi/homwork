const yourWord = prompt('please enter your word :');

function findVowelWords(word) {
    const vowelWords = ['a', 'e', 'u', 'i', 'o','A','E','U','I','O'];
    const vowelLetters=[];
    for (let i = 0; i < word.length; i++) {
        const letter = word[i];
          if ( vowelWords.includes(letter)){
             vowelLetters.push(letter)
          }
    }
  return vowelLetters;
}

function deleteVoWelWord(deleteVowel){
    const deleteVowelSound=findVowelWords(deleteVowel);
    const nonVowelWord=deleteVowel.split('').filter(letter => !deleteVowelSound.includes(letter)).join('');
    return nonVowelWord;
}


console.log(deleteVoWelWord(yourWord));