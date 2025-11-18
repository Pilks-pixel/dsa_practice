// You have n boxes. You are given a binary string boxes of length n, where boxes[i] is '0' if the ith box is empty, and '1' if it contains one ball.

// In one operation, you can move one ball from a box to an adjacent box. Box i is adjacent to box j if abs(i - j) == 1. Note that after doing so, there may be more than one ball in some boxes.

// Return an array answer of size n, where answer[i] is the minimum number of operations needed to move all the balls to the ith box.

// Each answer[i] is calculated considering the initial state of the boxes.

// Input: boxes = "110"
// Output: [1,1,3]

function minOperations(boxes: string): number[] {
    const results :number[] = new Array(boxes.length).fill(0);
    let ballsFromLeft = 0;
    let movesFromLeft = 0;

    for(let i = 0;i < boxes.length;i++) {
        results[i] += movesFromLeft
        ballsFromLeft += parseInt(boxes[i])
        movesFromLeft += ballsFromLeft
    }

    

    return results;
};