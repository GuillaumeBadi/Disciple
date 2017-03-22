
/**
  Implement and export a function called concatenate,
    wich takes two strings and add them together,
    and a getLength function, wich takes a string and return its length
*/

function getLength (str) {
  return str.length
}

function concatenate (str1, str2) {
  return str1.concat(str2)
}

export { concatenate, getLength }
