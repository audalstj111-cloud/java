// 현재 시간을 출력하기 위하여 우선 현재 시간을 구하자!!!
// 오전 오후
// let date = new Date();
// let hour = date.getMonth();

// 제어문 : 반복

// fo <<<배열

// let tot = 0;
// tot = tot + 73;
// //배열 내부에 여러개의 점수가 있다
// 각 점수들을 모두 누적하여애 한다
// 프로그램은 눈이 없으니 다음과 같이 명령한다
// 처음부처 마지막까지 순서대로 하나씩 꺼내어 tot에 누적 한다
// fpr(시작:끝:종강) 반복문
// 1qnxj 100Rkwldml
// let rec = 0;
// for (i = 1; i <= 10; i = i++) {
//   rec = rec + 1 / i;
// }
// console.log(rec);
// // let i = 1;

// while (i <= 7) {
//   console.log("welcome");
//   if (i === 7) {
//     break;
//   }
//   i++;
// }

// 키보드 입력 방식을반드시 알아야 한다
// prompt()
// parse
//Imfeger정수
// Plopt실수

// while (1) {
//   let input = parseInt(prompt("정수 입력하시오!!!"));
//   if (input === 7) {
//     console.log("7을 입력되었으니 종료합니다");
//     break;
//   }
// }

// 1부터 사용자로부터 입력받은 정수까지 장수의 합을 풀력 하시오

// 오늘 모든 공부 한거 종합
while (1) {
  let input = parseInt(prompt("정수 입력하시오!!!"));
  if (input === 7) {
    console.log("7을 입력되었으니 종료합니다");
    break;
  }
  let tot = 0;
  for (i = 1; i <= input; i++) {
    tot = tot + i;
  }
  console.log(tot);
}
