const sentence = "Hello World to my friends";
const toLow = sentence.toLowerCase();

/*
* The filter() method creates a new array containing only the elements
for which the callback function returned true.
In other words, it "filters" the array, keeping only the non-space characters.
*/
const charac = [...toLow].filter((char) => char !== " ");

const charCount = charac.reduce((acc, cur) => {

  /*
  * the acc[cur] part is used to access the count of the current character
  in the accumulator object, and update it accordingly
  */

  if (!acc[cur]) {
    acc[cur] = 1;
  } else if (acc[cur]) {
    acc[cur]++;
  }
  return acc;
}, {});

Object.keys(charCount).forEach((key) => {
  console.log(`${key}: ${charCount[key]}`);
});
