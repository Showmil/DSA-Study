function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr; // 더 이상 분할할 수 없으면 반환
    }

    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid)); // 왼쪽 절반 정렬
    let right = mergeSort(arr.slice(mid));  // 오른쪽 절반 정렬

    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i++]);
        } else {
            result.push(right[j++]);
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergeSort([4, 2, 7, 1, 9])); // [1, 2, 4, 7, 9]