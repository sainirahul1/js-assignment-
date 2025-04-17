function ispalindrome(str){
    let left=0;
    let right=str.length-1;
    while(left<right){
        if(str[right]!==str[left]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}

    function findlongestpalindrome(s){
        let longestpalindrome='';
        for(let i=0;i<s.length;i++){
            for(let j=i+1;j<=s.length;j++){
                let substring=s.substring(i,j);
                if(ispalindrome(substring)){
                    if(substring.length>longestpalindrome.length){
                        longestpalindrome=substring;
                    }
                }
            }
        }
        return longestpalindrome;

    }
let s = "racecar";
console.log(findlongestpalindrome(s)); 
