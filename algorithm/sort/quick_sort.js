// 快速排序

// 分治  一直分割分割

// 1. 随机选择数组的一个数A，基数，中点
// 2. 其他数字跟他比较，小于它的放左边，大于它的放右边
// 3. 递归的思想，将左边和右边的重复上两步。

// a,b,c

// 复杂排序
//     归并排序
//     快速排序
//     堆排序
// 时间复杂度： n * logn  复杂排序的时间复杂度都是 n * logn

// 简单排序
    // 冒泡 选择 插入
    // 时间复杂度: n * n

// 执行效率

const arr = [85, 24, 63, 45, 17, 31, 96, 50];
function quickSort(arr){
    if(arr.length <=1){
        return arr;
    }
    let pivotIndex = Math.floor(arr.length / 2);
    // 基准点是排好了序的
    console.log(pivotIndex);
    let pivot = arr.splice(pivotIndex,1)[0];
    console.log(pivot);
    let left = [];
    let right = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < pivot){
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivot], quickSort(right));   // 递归
}
console.log(quickSort(arr));




