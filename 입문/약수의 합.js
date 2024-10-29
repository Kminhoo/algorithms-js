// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

// solution
const solution = (n) => {
  let sum = 0;

  for (let i = 0; i <= n; i++) {
    n % i === 0 ? (sum += i) : null;
  }

  return sum;
};
