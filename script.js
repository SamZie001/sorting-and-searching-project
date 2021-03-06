let ann = [12, 11, 13, 5, 6 ]

function insertionSort(arr) 
{ 
    let key, j; 

    for (let i = 1; i < arr.length; i++)
    { 
        key = arr[i]; 
        j = i - 1; 

        /* Move elements of arr[0..i-1], that are 
        greater than key, to one position ahead 
        of their current position */
        
        while (j >= 0 && arr[j] > key)
        { 
            arr[j + 1] = arr[j]; 
            j = j - 1; 
        } 
        arr[j + 1] = key; 
    } 

    return arr
} 


console.log(ann)
console.log(insertionSort(ann))




