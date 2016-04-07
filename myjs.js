// Write a function called 'tripleFive' which loops three times using a for loop. Each iteration of the loop, output 'Five!' using console.log.

var tripleFive = function() {
    for (var i=1; i<=3; i++) {
        console.log('Five!');
    }
}

// Write a function called 'lastLetter' which takes a single string argument and returns the last character in the string.

var lastLetter = function(string) {
    return string[string.length-1];
}


// Write a function called 'square' which takes a single argument which is a number, and returns number * number.

var square = function(num) {
    return num * num;
}

//Write a function called 'negate' which takes a single number argument and returns the negative of that number.

var negate = function(num) {
    return num - (num * 2);
}

var negate2 = function(num) {
    return 0 - num;
}

// Write a function called 'toArray' which takes three arguments and returns an array with each of those arguments as items.

var toArray = function(arg1, arg2, arg3) {
    var array = [arg1,arg2,arg3];
    return array;
}

//Write a function called 'startsWithA' which takes a single string argument and returns true if the given string's first letter is 'A' and false otherwise.

var startsWithA = function(str) {
    if (str.charAt(0) === 'A') {
        return true;
    }
    return false;
}

var startsWithA2 = function(str) {
    return str.startsWith('A');
}

//Write a function called 'excite' which takes a single string argument and returns the given string plus three exclamation marks.

var excite = function(str) {
    return str + '!!!';
}

//Write a function called 'sun' which takes a single string argument and returns true if the string contains the word 'sun' within it. You may use the indexOf method that is built-in to strings, or you can do it manually with a for loop.

var sun = function(str) {
    var search = str.indexOf('sun');
    if (search > 0) {
        return true;
    }
    return false;
}

var sun2 = function(str) {
    for (var i=0; i<str.length; i++) {
        if (str.charAt(i)==='s' && str.charAt(i+1)==='u' && str.charAt(i+2)==='n') {
            return true;
        }
        return false;
    }
}

var sun3 = function(str) {
    return str.includes('sun');
}

//Write a function called 'tiny' which takes a single number argument and returns true if the number is between 0 and 1.

var tiny = function(num) {
    if (num>0 && num<1) {
        return true;
    }
    return false;
}

//Write a function called 'getSeconds' which takes a single string argument in the format 'MM:SS' (minutes, and seconds) and returns the total number of seconds represented by that timespan.

var getSeconds = function(str) {
    var minutesAsSeconds = parseInt(str.charAt(0)+str.charAt(1))*60;
    var seconds = parseInt(str.charAt(3)+str.charAt(4));
    return minutesAsSeconds + seconds;
}