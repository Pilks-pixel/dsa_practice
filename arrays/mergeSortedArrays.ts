function mergeSortedArrays(arr1: number[], arr2: number[]): number[] | string {
    // input 2 arrays of numbers - sorted accending order
    // Check input are arrays return / log if not
    // merge / concat arrys O(n + m) - copy both arrays into new array
    // use array.sort meth - O log n
    //  const sortedArr = arr1.concat(arr2).sort((a,b) => a - b)

    // brute force - use 2 pointers to iterate through both arrays
    // compare current elements of both arrays
    // push smaller element to new array
    // move pointer of array from which element was taken
    // output 1 array sorted 

    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return "function expects an array"
    }

    if (arr1.length === 0) return arr2
    if (arr2.length === 0) return arr1
    const sortedArr = []
    let i = 0
    let j = 0
   
    while (i < arr1.length || j < arr2.length) {
        console.log(arr1[i], arr2[j]);
        if(arr1[i] < arr2[j] || arr2[j] === undefined) {
            sortedArr.push(arr1[i])
            i++
        } else {
            sortedArr.push(arr2[j])
            j++
        }
    }

    console.log(sortedArr);
    return sortedArr
}

mergeSortedArrays([0,3,4,31], [4,6,30])

