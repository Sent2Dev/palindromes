function palindrom(){
    let arr = ['kot', 'lol', 'kajak', 'grubcio'];
    let newString;
    let palindromes = [];
    for(let element of arr){
        newString = element;
        newString= newString.split('');
        newString= newString.reverse();
        newString= newString.join('');
        if(newString == element){
        palindromes.push(newString)
        }
    }
    return palindromes;
}
console.log(palindrom());