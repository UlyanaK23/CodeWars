// Check to see if a string has the same amount of 'x's and 'o's. 
// The method must return a boolean and be case insensitive. 
// The string can contain any char.

function XO(str) {
    str = str.toLowerCase()
    var arrayOfCharacter = str.split('')
    
    var countX = arrayOfCharacter.reduce(function(n, val) {return n + (val === 'x')}, 0)
    var countO = arrayOfCharacter.reduce(function(n, val){return n + (val === 'o')}, 0)
    
    if (countX == countO) {
        return true
    } else {return false} 
}
