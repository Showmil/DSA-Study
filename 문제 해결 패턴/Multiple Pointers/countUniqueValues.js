function countUniqueValues(arr1){
  // 1. 고유값 개수를 세는 변수 선언
  var count = 0;
  // 2. 고유값을 저장할 변수 선언
  var uniqueValues = -1;
  // 3. 고유값과 일치하면 그냥 다음 인덱스로 넘어가고, 다르면 고유값에 새로운 값 저장하고 넘어가기
  for (var i in arr1) {
      if (arr1[i] != arr1[uniqueValues]) {
          uniqueValues = i;
          count++;
      }
  }
  return count;
}