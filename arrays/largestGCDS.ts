// https://leetcode.com/problems/greatest-common-divisor-of-strings/?envType=study-plan-v2&envId=leetcode-75

function gcdOfStrings(str1: string, str2: string): string {
    const [leng1, leng2] = [str1.length, str2.length]
    // Shortest string as prefix
    // Check if length divdes both strings (length) 
    // If not not valid, reduce prefix by one and check again
    // If it divides, check if repeated it equals input strings
    for(let i = Math.min(leng1, leng2);i > 0;i--) {
       if (isValid(i)) {
            return str1.slice(0,i)
        }
    }

    return ""
    
    function isValid(k: number):boolean {
        console.log(leng1 % k, leng2 % k)
        if (leng1 % k !== 0 || leng2 % k !== 0) {
            return false
        }

        const base = str1.slice(0,k)
        const repeat1 = leng1 / k
        const repeat2 = leng2 / k
        return (base.repeat(repeat1) === str1 && base.repeat(repeat2) === str2) 

    }

};

function gcdOfStringsMath(str1: string, str2: string): string {
    // Step 1: Check if a common base is even possible
    if (str1 + str2 !== str2 + str1) {
        return "";
    }

    // Step 2: Find GCD of the lengths
    const gcd = (a: number, b: number): number => {
        while (b !== 0) {
            const temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    };

    const gcdLength = gcd(str1.length, str2.length);

    // Step 3: The GCD string is the prefix of that length
    return str1.slice(0, gcdLength);
}
