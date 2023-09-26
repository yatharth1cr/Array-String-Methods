Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**
Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console.4-5 times to understand
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:

     ```js
     let name = 'sunny giri';
     console.log(name.charAt(2));
     let sentance = 'A quick brown fox jumped over a lazy dog';
     console.log(sentance.charAt(4));
     let houseName = 'giri';
     console.log(houseName.charAt(0));
     ```

   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`

   - parameter: string - (string data type)
   - Return: all character of string gives another string with upper case (string data type)
   - Example:

     ```js
     let str1 = 'hello yatharth!';
     console.log(str1.toUpperCase());
     let str2 = 'i am a developer';
     console.log(str2.toUpperCase());
     let str3 = 'i am a boy';
     console.log(str3.toUpperCase());
     ```

   - `toUpperCase` accepts a string(string data type) and convert it's all character in uppercase

3. `toLowerCase`

   - Parameter: string (string data type)
   - Return: all character of string coverted into lowercase in string (string data type)i
   - Example:

     ```js
     let string1 = 'I Am From BHARAT';
     console.log(string.toLowerCase());
     let string2 = 'BHARAT';
     console.log(string2.toLowerCase());
     let string3 = 'COUNTRY';
     console.og(string3.toLowerCase());
     ```

   - `toLowerCase` accepts a string and covert it into lower case and return in string (string data type)

4. `trim`

   - Parameter: string (string data type)
   - Return: remove all whitespace and return a new string(string data type)
   - Example:

     ```js
     let string1 = '    hello world!      ';
     console.log(string1.trim());
     let string2 = '   yatharth';
     console.log(string2.trim());
     let string3 = 'hey    ';
     console.log(string3.trim());
     ```

   - `trim` accepts a string and remove whitespaces from start and end of the string and return a new string(string data type)

5. `trimEnd`

   - Parameter: string (string data type)
   - Return: return a new string by removing all the whitespaces from end(string data type)
   - Example:

     ```js
     let string1 = '...hello    ';
     console.log(string1.trimEnd());
     let string2 = ' my name is sunny     ';
     console.log(string2.tirmEnd());
     let string3 = 'hey    ';
     console.log(string3.trimEnd());
     ```

   - `trimEnd` accepts a string and remove their whitespace from end of the string and return a new string (string data type)

6. `trimStart`

   - Parameter: string (string data type)
   - Return: return a new string by removing all the whitespaces from start
     (string data type)
   - Example:

     ```js
     let name = '   yatharth ';
     console.log(name.trimStart());
     let sirName = '  giri ';
     console.log(sirName.trimStart());
     let fullName = '   yatharth giri';
     console.log(fullName.trimStart());
     ```

   - `trimStart` accepts a string and remove all the whitespace from start and return a new string (string data type)

7. `concat`

   - Parameter: string1,...stringN.(string data type)
   - Return: By merging or concatination of the strings return a new string (string data type)
   - Example:

     ```js
     let name = 'sunny';
     let sirName = 'giri';
     console.log(name.concat(' ', sirName));
     let str1 = 'up';
     let str2 = 'down';
     console.log(str1.concat('-', str2));
     let string1 = 'AltCampus';
     let string2 = 'is the platform to learn code';
     console.log(string1.concat(',', string2));
     ```

   - `concat` accepts two or more than strings and concatinate or joint the strings, return a new string

8. `endsWith`

   - Parameter: searchString and position (index) (string and number data type)
   - Return: true if the searchString is found or false if not found
   - Example:

     ```js
     let sentence = 'Full form of HTML is hypertext markup language';
     sentence.endsWith('form');
     let name = 'sunny';
     name.endsWith('y', 4);
     let num = '12345';
     num.endsWith(3, 3);
     ```

9. `includes`

   - Parameter: searchString and position(index) (string and number data type)
   - Return: if searchString is present or not,returns true or false(boolean data type)
   - Example:

     ```js
     let sentence = 'Today is Monday';
     let word = 'Monday';
     console.log(sentence.includes(word));
     let line = 'ram ram bhai sareya ne';
     console.log(line.includes('ram ram'));
     let name = 'yatharth raj giri';
     console.log(name.includes('raj', 9));
     ```

   - `includes` accepts a searchString and another is position (index),if given parameter is correct it return true otherwise false (boolean data type)

10. `indexOf`

- Parameter: searchString (string data type)
- Return: position of searchString or position (number data type)
- Example:

  ```js
  let sentence = 'this is a box. inside the box there is a pen';
  console.log(sentence.indexOf(box));
  let term = 'dog';
  console.log(term.indexOf('G'));
  let para = 'The quick brown fox jumps over the lazy dog.';
  console.log(paragraph.indexOf('jumps'));
  ```

- `indexOf` accepts a searchString and return it's index value(number data type)

11. `lastIndexOf`

- Parameter: searchString (string data type )
- Return: position of searchString or position (number data type)
- Example:

  ```js
  let sentence = 'this is a box. inside the box there is a pen';
  console.log(sentence.lastIndexOf(box));
  let term = 'this is my dog. his name is goli';
  console.log(term.lastIndexOf('is'));
  let para = 'The quick brown fox jumps over the lazy dog.';
  console.log(paragraph.lastIndexOf('jumps'));
  ```

- `lastIndexOf` accepts a searchString and return it's index value(number data type)

12. `padEnd`

- Parameter: targetLength and padString (string and number data type)
- Return: a new padString padded from end (string data type)
- Example:

  ```js
  let name = 'sunny';
  console.log(name.padEnd(10, '.'));
  let msg = 'Hello World!';
  console.log(msg.padEnd(18, '!'));
  let sentence = 'I am from Bharat';
  console.log(sentence.padEnd(20, ' '));
  ```

- `padEnd` accept targetLength and padString and return paded padString in the end of string by target length times

13. `padStart`

- Parameter: targetLength and padString ()
- Return: a new padString padded from start ()
- Example:

  ```js
  let name = 'sunny';
  console.log(name.padStart(10, '.'));
  let msg = 'Hello World!';
  console.log(msg.padStart(18, '!'));
  let sentence = 'I am from Bharat';
  console.log(sentence.padStart(20, ' '));
  ```

- `padStart` accept targetLength and padString and return paded padString in the start of string by target length times

14. `repeat`

- Parameter: count (number data type)
- Return: a new string (string data type)
- Example:

  ```js
  let name = 'Happy';
  console.log(name.repeat(3));
  let string = "i'm happy";
  console.log(string.repeat(4));
  let term = 'hello!';
  console.log(term.repeat(5));
  ```

- `repeat` accept count(no. of time of repeat) as a parameter and return a newString (string data type)

15. `replace`

- Parameter: two parameter pattern and replacement (string data type)
- Return: a new string (string data type)
- Example:

  ```js
  let sentence = 'India is a democratic country';
  console.log(sentence.replace('India', 'Bharat'));
  let name = 'Anish Giri';
  console.log(name.replace('Anish', 'Yatharth'));
  let number = '1234567';
  console.log(number.replace('123', '987'));
  ```

- `replace` accepts two parameters first one is pattern and another is replacement value and return a new string.

16. `slice`

- Parameter: two parameter indexStart and indexEnd (number data type)
- Return: the characters in a new string b/w indexStart to indexEnd (string data type)
- Example:

  ```js
  let sentence = 'my name is yatharth';
  console.log(sentence.slice(3, 10));
  let name = 'yatharth raj giri';
  console.log(name.slice(5));
  let term = 'excellent';
  console.log(term.slice(-7, -3));
  ```

- `slice` accepts two parameters (indexStart, indexEnd) and returns a new string which start with next to the indexStart value(imiting) and ends on the indexEnd value.

17. `split`

- Parameter: accepts a pattern string(string data type) and a limitation(number data type)
- Return: an array of strings(object data type)
- Example:

  ```js
  let sentence = 'my name is yatharth';
  console.log(sentence.split(' '));
  let name = 'yatharth';
  console.log(name.split(''));
  ```

- `split` accepts two parameter first is pattern and another is limitation and return an Array of strings(string data type)

18. `substring`

- Parameter: indexStart and indexEnd (number data type)
- Return: a new string by (string data type)
- Example:

  ```js
  let name = 'yatharth giri';
  console.log(name.substrin(0, 8));
  let sentence = 'javascript is use to give some functionality';
  console.log(sentence.substring(0, 10));
  ```

- `substring` accepts two parameter indexStart and indexEnd and return a new string by omiting the indexStart value and start the string next to the indexStart value and ends on the indexEnd value.
