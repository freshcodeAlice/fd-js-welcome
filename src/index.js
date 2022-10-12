const arr = [2, 3, 4, 5, 6, 7, 8, 9, 10];

function binarySearchFunction(array, searchValue) {
    let start = 0;
    let end = array.length-1;
    let middle = Math.round((start+end)/2);

    while(true) {
        if(searchValue === array[middle]) {
            return middle;
        }
        if (searchValue > array[middle]){
            start = middle + 1;
            middle = Math.floor((start+end)/2)
        } else {
            end = middle - 1;
            middle = Math.floor((start+end)/2);
        }
    }
}


function resursiveBinary(array, searchValue) {
    const middle = Math.ceil((array.length-1)/2);
    if(array[middle] === searchValue) {
        return middle;
    } else if(array[middle] > searchValue) {
        return resursiveBinary(array.slice(0, middle), searchValue);
    } else if (array[middle] < searchValue) {
        return middle + resursiveBinary(array.slice(middle), searchValue);
    } else {
        return -1;
    }
}