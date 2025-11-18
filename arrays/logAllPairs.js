// Log all pairs of an array
const boxes = [ 1, 2, 3, 4, 5 ];

function logAllPairs() {
    for (let i = 0; i < boxes.length; i++) {
        
        for(let j = i; j < boxes.length; j++) {
            console.log(boxes[i] , boxes[j]); ;
        }
        
    }
}

logAllPairs();

