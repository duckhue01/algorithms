




let arr = [12,234,634,34,53,45,34,5,34]


const RadixSort = () => {
    let max  = arr[0]
    arr.forEach(e => {
        if (max < e) {
            max = e
        }
    })

    const CoutingSort = (exp) => {
        const countArr =  Array.from(new Array(10), () => 0);
        const out = new Array(arr.length);

        arr.forEach((e) => {
            countArr[Math.floor(e / exp) % 10]++
        });
        // console.log(countArr);
        countArr.forEach((e, i, arr) => {
            if (i > 0) {
            arr[i] += arr[i - 1];
            }
        });

        for (let i = arr.length - 1; i >= 0; i--) {
            out[countArr[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
            --countArr[Math.floor(arr[i] / exp) % 10];
        }
        // console.log(out);
        arr = out.map(e => e)



    };

    for (let exp = 1; max / exp > 0; exp *= 10)
        CoutingSort( exp);
    

};

RadixSort()


console.log(arr);
