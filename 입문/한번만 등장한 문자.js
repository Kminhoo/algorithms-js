// 문자열 s가 매개변수로 주어집니다.
// s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return 하도록
// solution 함수를 완성해보세요. 한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다.

// solution
const solution = (s) => {
  let strArr = s.split("");

  return strArr
    .filter((item) => strArr.indexOf(item) === strArr.lastIndexOf(item))
    .sort()
    .join("");
};
