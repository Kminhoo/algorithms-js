// 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

// solution
const solution = (arr) => {
  let average = 0;

  for (const number of arr) {
    average += number;
  }

  average = average / arr.length;

  return average;
};
