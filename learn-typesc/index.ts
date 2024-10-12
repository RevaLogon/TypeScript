function formatString(string: string) {
    return string
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

console.log(formatString("hello world!"));

function findAndReplace() {
    interface obj {
        text: string;
	    word: string;
	    replacement: string;
      }
    let objClass: obj = {
        text: "Hello World",
        word: "World",
        replacement: "Earth",
    };
    objClass.text = objClass.text.split(objClass.word).join(objClass.replacement);
    console.log(objClass.text);
}

findAndReplace();

function roundNumbers(number :number) {
    return Math.round(number);
}
for(let i=0;i<5;i=i+0.3){
    console.log(roundNumbers(i));
}

function convertAndFormat(number: number): string {
    return number.toLocaleString();
}

console.log(convertAndFormat(123456789));

function validateNumber(string: string): boolean {
    let number = parseInt(string);
    return !!number;
}

console.log(validateNumber("1234")); console.log(validateNumber("Hello World!"));

function isPalindrome(string: string): boolean {
    let str = string.split(' ')
    .map(word => word.charAt(0).toLowerCase() + word.slice(1))
    .join(' ');
    let reverseString: string = "";
    for (let char of str) {
        
        reverseString = char + reverseString;
        reverseString.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    }
    if (reverseString == str)
        return true;
    else 
        return false;
}

console.log(isPalindrome("HelloWorld"));
console.log(isPalindrome("Racecar"));

