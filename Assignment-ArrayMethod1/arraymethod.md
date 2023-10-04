18.map 19.pop 20.reduce 21.slice 22.some

1.  `concat`

    - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
    - Return: a single Array consisting of by all the values passed as parameters in the same order.
    - Example:

      ```js
      let numbers = [1, 2, 3];
      numbers.concat(4); //[1,2,3,4]
      let sentanceArray = ['A quick brown fox jumped over a lazy'];
      sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
      let colors = ['red', 'green', 'blue'];
      colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
      ```

    - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
    - No it does not mutate the original array

2.  `join`

    - Parameter: A string to separate each element of the array. If we pass empty parameter,the elements of array are separated with a comma (",")
    - Return: a single string consist all elements of array.if array.length is 0 the it return an empty string.
    - Example:

      ```js
      let arr = ['co', 'un', 'try'];
      arr.join(''); // "country"
      let color = ['red', 'yellow', 'green'];
      color.join(); // "red,yellow,green"
      let array = ['my', 'name', 'is', 'yatharth'];
      array.join(' '); // "my name is yatharth"
      ```

    - `join` accepts a seperator(string) which seperate each element of array and return a string consisting all elements of array
    - No it doesn't mutate the original array

3.  `flat`

    - Parameter: a number of depth to concatinate the sub-array, the default value is 1.(number data type)
    - Return: a new array by cocatinating the sub array depend on the passing of depth value.if we pass infinity as a parameter it return a new array by cocatinating all the sub-array.
    - Example:

      ```js
      let arr = [1,[3,5,[9,[5]],]2];
      console.log(arr.flat(Infinity)) // [1,3,5,9,5,2]
      let arr2 = [[4],[3],[2],[1]];
      arr2.flat() // [4,3,2,1]
      let arr3 = [1,2,3,[4,5,6]];
      arr3.flat() // [1,2,3,4,5,6]
      ```

    - `flat` accepts a number of depth as a parameter and return a new array by concatinating the sub-aaray.
    - No it doesn't mutate the original array.

4.  `push`

    - Parameter: any element for adding in the end of an array
    - Return: return the new length of the array
    - Example:

      ```js
      let arr1 = ['cat', 'dog', 'ox'];
      arr1.push('bull');
      let arr2 = [1, 2, 3, 4];
      arr2.push(10);
      let arr3 = ['hello'];
      arr3.push('world!');
      ```

    - `push` accepts one or more elements to add in the end of the array and return the new length of array
    - it mutate the original array

5.  `indexOf`

    - Parameter: searchElement
    - Return: if searchElement will present in array it will return the index value of that element and if searchElement will not present in array it will return -1 (number data type).
    - Example:

      ```js
      let arr1 = ['one', 'two', 'three', 'four'];
      arr1.indexOf('one'); // 1
      let arr2 = [1, 2, 3, 4, 5, 6];
      arr2.indexOf(5); // 4
      let arr3 = [1, 2, 3];
      arr3.indexOf(10); // -1
      ```

    - `indexOf` accepts a searchElement and return the index value of searchElement.
    - No it doesn't mutate the original array.

6.  `lastIndexOf`

    - Parameter: n (searchElement)
    - Return: it identify the searchElement from the last of the array and return index value of it,if not found it return -1
    - Example:

      ```js
      let arr = ['ant', 'cat', 'ant', 'duck'];
      beasts.lastIndexOf('ant'); //2
      let animals = ['ox', 'tiger', 'tiger', 'lion'];
      animals.lastIndexOf('tiger'); //2
      let colors = ['pink', 'black', 'red'];
      colors.lastIndexOf('ox'); //-1
      ```

    - `lastIndexOf` accepts a searchElement and return the searchElement from the last of the array and return index value of it,if not found it return -1
    - No it doesn't mutate the original array.

7.  `includes`

    - Parameter: n (searchElement)
    - Return: a boolean value,if searchElement found return true and it's not found then return false
    - Example:

      ```js
      let number = [1, 3, 4, 5, 6];
      number.includes(3); //true
      let animals = ['elephant', 'lion', 'tiger'];
      animals.includes('lion'); //true
      let state = ['Mumbai', 'Delhi', 'Bihar'];
      state.includes('India');
      ```

    - `includes` accepts a searchElement and return a boolean value if searchElement is found return true, if doesn't found return false
    - No it doesn't mutate the original array.

8.  `reverse`

    - Parammeter: none
    - Return: a new array by reversing thier element
    - Example:

      ```js
      let number = [1, 2, 3, 4, 5, 6];
      number.reverse(); //[6,5,4,3,2,1]
      let array = ['cow', 'ox', 'dog', 'cat'];
      array.reverse(); //['cat','dog','ox','cow']
      let colors = ['red', 'black', 'green'];
      colors.reverse(); //['green','black','red']
      ```

    - `reverse` doesn't accepts any parameter and return a new array by reversing their element
    - it mutate the original array.

9.  `every`

    - Parameter: a callback function to test for each element, taking three arguments: (elements,index,array)n thisArg Optional:A value to use as this when executing callback.
    - Return: if the callback function truthy value for every array element . Otherwise, false
    - Example:

      ```js
      let array = [2, 4, 6, 8, 10];
      array.every((el) => el % 2 == 0); //true
      let array1 = [1, 3, 5, 7, 9, 11];
      array1.every((el) => el % 2 !== 0); //true
      let array = [1, 3, 5, 7, 9, 11];
      array.every((el) => el % 2 == 0); //false
      ```

    - `every` accepts a callback function and return a boolean value.
    - No it does not mutate the original array

10. `shift`

    - Parameter: accept no parameter
    - Return: remome first element and return it.
    - Example:

      ```js
      let array1 = [1, 2, 3];
      array1.shift(); //1
      let arr = ['A', 'B', 'C', 'D', 'E'];
      arr.shift(); //'A'
      ```

    - `shift` doesnt accept any parameter. It remove the firstElement of array and return the removed element
    - it mutate the original array

11. `splice`

    - Parameter: it accept 3 paramter startIndex, deleteCount, string or number
    - Return: An array containing the deleted elements
    - Example:

      ```js
      let number = [1, 2, 3, 4, 5, 6, 7, 8];
      number.splice(5); // [6,7,8]
      let animals = ['dog', 'cat', 'cow', 'ox', 'lion', 'zebra', 'rat'];
      animals.splice(3, 3, 'peacock', 'tiger'); //['dog', 'cat', 'cow', 'peacock', 'tiger', 'rat'];
      ```

    - `splice` accept 3 paramter startIndex, deleteCount, string or number(optional) and return an array with removed elements
    - it mutate the original array

12. `find`

    - Parameter: accepts callback function and callback function accepts 3 argument element,index and array
    - Return: the first element of the array which satisfy the callback function Otherwise, undefined is returned
    - Example:

      ```js
      let number = [1, 3, 2, 4, 5];
      number.find((el) => el % 2 == 0); //2
      let number = [1, 3, 2, 4, 5];
      number.find((el) => el % 2 !== 0); //1
      let word = ['computer', 'program', 'language'];
      word.find((el) => el.length < 8); //'program'
      ```

    - `find` accepts callback function and return the first element of the array which satisfy the callback function Otherwise, undefined.
    - No it doesn't mutate the original array

13. `unshift`

    - Parameter: element for add to the start of the array.
    - Return: the new length of array
    - Example:

      ```js
      let numbers = [2, 3, 4, 5];
      numbers.unshift(1); //5
      let name = ['sunny', 'anish', 'yatharth', 'shubham'];
      name.unshift('Sonu'); //5
      ```

    - `unShift` The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
    - it mutate the original array.

14. `findIndex`

    - Parameter: callback(element, index, array ) thisArg
    - Return: indexValue of the first element in the array which satisfy the cb function. Otherwise, -1.
    - Example:

      ```js
      let number = [1, 2, 3, 4];
      number.findIndex((el) => el % 2 == 0); //1
      let number = [1, 2, 3, 4];
      number.findIndex((el) => el % 2 !== 0); //0
      let word = ['computer', 'program', 'language'];
      word.findIndex((el) => el.length > 7); //0
      ```

    - `findIndex The findIndex() method returns the index of the first element in the array that satisfies the cb function. Otherwise, it returns -1.
    - No it does not mutate the original array

15. `filter`

    - Parameter: callback(element, index, array ) thisArg
    - Return: an array of elments which satisfied the cb function
    - Example:

      ```js
      let number = [1, 3, 2, 4, 5, 6, 7, 8];
      number.filter((el) => el % 2 == 0); //[2,4,6,8]
      let number = [1, 3, 2, 4, 5, 6, 7, 8];
      number.filter((el) => el % 2 !== 0); //[1,3,5,7]
      let word = ['railway', 'airport', 'helipad', 'lion', 'cat'];
      word.filter((el) => el.length > 5); //['railway', 'airport', 'helipad']
      ```

    - `filter` accepts a callback function and returns an array of elments which satisfied the cb function
    - No it doesn't mutate the array

16. `flat`

    - Parameter: a number of depth to concatinate the sub-array, the default value is 1.(number data type)
    - Return: a new array by cocatinating the sub array depend on the passing of depth value.if we pass infinity as a parameter it return a new array by cocatinating all the sub-array.
    - Example:

      ```js
      let arr = [1,[3,5,[9,[5]],]2];
      arr.flat(Infinity) // [1,3,5,9,5,2]
      let arr2 = [[4],[3],[2],[1]];
      arr2.flat() // [4,3,2,1]
      let arr3 = [1,2,3,[4,5,6]];
      arr3.flat() // [1,2,3,4,5,6]
      ```

    - `flat` accepts a number of depth as a parameter and return a new array by concatinating the sub-aaray.
    - No it doesn't mutate the original array.

17. `forEach`

    - Parameter: accepts callback function and callback function accepts 3 argument element,index,array.
    - Return: undefined
    - Example:

      ```js
      let arr = ['red', 'yellow', 'green'];
      arr.forEach((el) => el.length > 3); //undefined
      let arr = [1, 2, 3, 4, 5, 6];
      arr.forEach((el) => el.length > 4); //undefined
      ```

    - `forEach` The forEach() method executes a provided function once for each array element.
    - No it does not mutate the original array

18. `pop`

    - Parameter: no parameter
    - Return: it will return the removed element from the last of an array
    - Example:

      ```js
      let number = [1, 2, 3, 4, 5];
      number.pop(); //5
      let arr = ['red', 'yellow', 'green'];
      arr.pop(); //'green'
      ```

    - `pop`doesn't accepts any parameter and return the last removed element of an arraymy tane nh
    - No it does not mutate the original array
    - mutate the original array

19. `reduce`

    - Parameter: a callback function,it takes 4 parameter(initialValue,element,index,array) and another one is initialValue
    - Return:
    - Example:

      ```js
      let num = [1, 2, 3, 4, 5, 6];
      num.reduce((sum, el) => {
        sum += el;
        return sum;
      }, 0); //21
      let num = [1, 2, 3, 4, 5, 6];
      num.reduce((multiple, el) => {
        multiple *= el;
        return mmultiple;
      }, 1); //720
      let color = ['red', 'pink', 'blue', 'grey'];
      color.reduce((obj, el, i) => {
        obj[i] = el;
        return obj;
      }, {}); //{0: 'red', 1: 'pink', 2: 'blue', 3: 'grey'}
      ```

    - `reduce` accepts a callback function and initialvalue/accumulator and return accumulator value
    - No it does not mutate the original array

20. `slice`

    - Parameter: a startIndex and endIndex
    - Return: an array of extracted value
    - Example:

      ```js
      let num = [1, 2, 3, 4, 5, 6];
      num.slice(2, 4); //[3,4]
      let colors = ['red', 'pink', 'green', 'brown', 'black'];
      colors.slice(3); //['brown', 'black']
      let number = [2, 4, 7, 9, 14, 75];
      number.slice(-3); //[9, 14, 75]
      ```

    - `slice` return extracted item into new array. It will extract item from first parameter to last parameter.
    - No it does not mutate the original array.

21. `some`

    - Parameter: callback function
    - Return: true if the callback function returns a truthy value for at least one element in the array. Otherwise, false.
    - Example:

      ```js
      let num = [1, 2, 3, 4, 5, 6];
      sum.some((el) => el % 2 == 0); //true
      let color = ['red', 'pink', 'black', 'blue'];
      color.some((el) => el.length > 5); //false
      let animals = ['fox', 'cat', 'dog'];
      animals.some((el) => el.length <= 3); //true
      ```

    - `some` method test at least one element in the array passes the test of the provided function. It returns a Boolean value.
    - No it does not mutate the original array

22. `map`

    - Parameter: callback function
    - Return: return the value of an array according to callback function
    - Example:

      ```js
      let arr = ['abc', 'xyz', 'mno'];
      arr.map((el) => el.length == 3); //[true,true,true]
      let fruits = ['apple', 'banana', 'pineapple'];
      fruits.map((el) => el.toLowerCase()); //['APPLE','BANANA','PINEAPPLE']
      let num = [20, 10, 30, 40];
      num.map((el) => el / 10); //[2,1,3,4]
      ```

    - `map` accepts cb function and return an array of value according to an array.
    - No it does not mutate the original array.
