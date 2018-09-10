// js101_lv0_練習一：判斷是否及格 201809062324

function score (n) {
  if (n >= 100) {
    return 'You are NO.1'
  } if (n >= 60) {
    return 'pass'
  } else {
    return 'fail'
  }
}
console.log(score(59))
console.log(score(60))
console.log(score(100))
