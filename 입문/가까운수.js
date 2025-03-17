// 정수 배열 array와 정수 n이 매개변수로 주어질 때,
// array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.

// solution
const solution = (array, n) => {
  const newArray = array
    .sort((a, b) => a - b)
    .map((item) => Math.abs(n - item));

  const minValue = Math.min(...newArray);

  const minIndex = arr.indexOf(minValue);

  return array[minIndex];
};
