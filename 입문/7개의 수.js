// 머쓱이는 행운의 숫자 7을 가장 좋아합니다. 정수 배열 array가 매개변수로 주어질 때,
// 7이 총 몇 개 있는지 return 하도록 solution 함수를 완성해보세요.

// solution
const solution = (array) => {
  let count = 0;

  array.map((item) => {
    let strNum = String(item);

    if (strNum.length > 1) {
      strNum.split("").map((str) => (str === "7" ? count++ : null));
    } else {
      strNum === "7" ? count++ : null;
    }
  });

  return count;
};

// 더 나은 해결책
// 문자열로 합친후 7로 분리하여 배열을 만들고 배열의 길이 -1
const solution1 = (array) => {
  return array.join("").split("7").length - 1;
};
