const arr1 = [9, 2, 8, 5, 7, 2, 8, 4, 3, 2, 5, 1]

function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        let lowest = i
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[lowest]) {
                lowest = j
            }
        }
        if(i !== lowest) {
            let temp = arr[i]
            arr[i] = arr[lowest]
            arr[lowest] = temp
        }
    }
}

selectionSort(arr1)
console.log(arr1)