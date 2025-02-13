/*
Given a string s, return an updated string t such that all consonants in the string s stay in their original positions while any vowels in the string are reordered according to their ASCII values.

The vowels are 'A', 'E', 'I', 'O', and 'U'. These vowels can appear in lowercase or uppercase. All other letters except vowels are consonants.

Example

Example 1:

Input: "gamE"
Expected Output: "gEma"
Justification: The vowels in "gamE" are 'a' and 'E'. Sorting these by ASCII values, 'E' comes before 'a'. Hence, they are placed in the order 'E', 'a' in the output, while consonants remain unchanged.
Example 2:

Input: "aEiOu"
Expected Output: "EOaiu"
Justification: The input consists only of vowels. When we sort them according to their ASCII values, the uppercase vowels come first and then the lowercase vowel comes in 'aiou' order.
Example 3:

Input: "DesIgnGurUs"
Expected Output: "DIsUgnGerus"
Justification: The vowels in "DesIgnGurUs" string are 'e', 'I', 'u', and 'U'. Their order according to ASCII value is 'I', 'U', 'e' and 'u'.
*/

class Solution {    
  isVowel(c) {
    return "aeiouAEIOU".indexOf(c) !== -1;
    
  }


  // Sorts the vowels in a string while maintaining the position of consonants
  countingSortVowels(s) {
    const freqMap = {}

    // count each vowel's freq
    for (const c of s) {
      freqMap[c] = (freqMap[c] || 0) + 1
    }

    // pre-defined sorted order of vowels based on ASCII values
    const sortedVowelOrder = "AEIOUaeiou"
    let result = ''
    let index = 0 // pointer for sortedVowelOrder

    // construct the result string with sorted vowel in their positions
    for (const c of s) {
      if (!this.isVowel(c)) {
        result += c; // append consonant directly
      } else {
        // move to the next vowel with remaining count
        while (index < sortedVowelOrder.length && (freqMap[sortedVowelOrder[index]] || 0) === 0) {

          index++;
        }

        // check if index is within bounds
        if (index < sortedVowelOrder.length) {
          result += sortedVowelOrder[index];
          freqMap[sortedVowelOrder[index]]--
        }
      }
    }

    return result;
  }
}

const solution = new Solution();
console.log(solution.countingSortVowels("gamE"));      // gEma
console.log(solution.countingSortVowels("aEiOu"));     // Eoaiu
console.log(solution.countingSortVowels("DesIgnGurUs"));// DIsUgnGerus
