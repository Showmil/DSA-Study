function minSubArrayLen(arr, target) {
    let minLength = Infinity;
    let windowSum = 0;
    let left = 0;

    for (let right = 0; right < arr.length; right++) {
        windowSum += arr[right];

        while (windowSum >= target) {
            minLength = Math.min(minLength, right - left + 1);
            windowSum -= arr[left];
            left++;
        }
    }

    return minLength === Infinity ? 0 : minLength;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 ([4, 3])