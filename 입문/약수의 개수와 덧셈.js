// 두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고,
// 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

// solution
const solution = (left, right) => {
  let result = 0;

  for (let i = left; i <= right; i++) {
    Number.isInteger(Math.sqrt(i)) ? (result -= i) : (result += i);
  }

  return result;
};

// 약수의 개수는 일반적으로 짝수
// 어떤 수의 제곱인 경우만 약수의 개수 홀수
