// 숫자와 "Z"가 공백으로 구분되어 담긴 문자열이 주어집니다.
// 문자열에 있는 숫자를 차례대로 더하려고 합니다.
// 이 때 "Z"가 나오면 바로 전에 더했던 숫자를 뺀다는 뜻입니다.
// 숫자와 "Z"로 이루어진 문자열 s가 주어질 때,
// 머쓱이가 구한 값을 return 하도록 solution 함수를 완성해보세요.

// solution
const solution = (s) => {
  let sum = 0;
  let prevNum = 0;

  s.split(" ").map((item, idx) => {
    if (item === "Z") {
      sum -= prevNum;
    } else {
      prevNum = Number(item);
      sum += Number(item);
    }
  });

  return sum;
};

// 다른 방법
const solution1 = (s) => {
  const stack = [];

  s.split(" ").forEach((item) => {
    if (item === "Z") {
      // 만약 Z라면 stack 배열의 마지막 요소를 제거하여 더했다가 뺀것과 같은 효과를 준다.
      stack.pop();
    } else {
      stack.push(Number(item));
    }
  });

  return stack.reduce((acc, cur) => acc + cur, 0);
};
