function stringChallenge(str) {     
    for(var i = 0; i < str.length / 2; i++) if (str[i] != str[str.length - i - 1]) return false;
    return true;
}
console.log(stringChallenge("bola"));
console.log(stringChallenge("ama"));


/* const str = ' ';

const isPalindrome = (inStr) => {
    for (let i=0; i<inStr.length; i+=1) {
        if(inStr[i] !== inStr[inStr.length - 1 - i])
            return false;
    }
    return true;
}

console.log(isPalindrome(str)); */