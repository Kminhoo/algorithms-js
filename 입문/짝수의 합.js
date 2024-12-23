//정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.

// solution
const solution = (n) => {
  let result = 0;

  while (n) {
    if (n % 2 === 0) {
      result += n;
    }
    n--;
  }

  return result;
};
