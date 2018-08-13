let arr = [2, 3, 1, 4, 6];

function mergeSort(arr){
    return main(arr);
    function main(arr){
        if(arr.length === 1) return arr;
        let mid = Math.floor(arr.length / 2);
        let left = arr.slice(0, mid);
        let right = arr.slice(mid);
        return merge(main(left), main(right));
    }
    function merge(left, right){
        console.log(left, right);
        // 最简单 两数相比 swap
        // 四个数 [排好序的左边] mid [排好序的右边]
        // a[i] b[j] 
        // c[a[i] - b[i]] >=0 ? a[i++] : b[i++]
        let il= rl =0, result = [];
        while(il < left.length && rl < right.length){
            if(left[il] < right[rl]){
                result.push(left[il++]);
            } else {
                result.push(right[rl++]);
            }
        }
        return result.concat(left.slice(il)).concat(right.slice(rl));
    }
}

mergeSort(arr);
console.log(mergeSort(arr));

arr = mergeSort(arr);
console.log(arr);

// 求差值
let result = 0;      
for(let i = 1; i < arr.length; i++){
    let diff = arr[i] - arr[i-1];
    if(result < diff){
        result = diff;
        console.log(i);
    }
}
console.log(result);
