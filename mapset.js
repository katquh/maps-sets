//new Set([1,1,2,2,3,4])
//{1,2,3,4}

//[...new Set("referee")].join("")
//'ref'

// let m = new Map();
// m.set([1,2,3], true);
// m.set([1,2,3], false);

/*
  0: {Array(3) => true}
  1: {Array(3) => false}
*/

// hasDuplicate([1,3,2,1]) // true
// hasDuplicate([1,5,-1,4]) // false
const hasDuplicate = arr => new Set(arr).size != arr.length;


// vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
// vowelCount('Colt') // Map { 'o' => 1 }

function isVowel(char){
    let vowels = new Set("aeiou");
    return vowels.has(char);
}

const vowelCount = (word) => {
    let countMap = new Map();
    for (let char of word){
        if(isVowel(char.toLowerCase())){
            if (countMap.get(char)){
                countMap.set(char,countMap.get(char)+1)
            }
            else{
                countMap.set(char,1)
            }
        }
    }
    return countMap;
}; 
