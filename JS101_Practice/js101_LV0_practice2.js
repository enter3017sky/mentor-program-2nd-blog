// js101_lv0_練習二：判斷是否及格 201809062341

function bmi (n) {
  if (n < 18.5) {
    console.log('體重過輕')
  } if (n >= 18.5 && n < 24) {
    console.log('正常範圍')
  } if (n >= 24 && n < 27) {
    console.log('過重')
  } if (n >= 27 && n < 30) {
    console.log('輕度肥胖')
  } if (n >= 30 && n < 35) {
    console.log('中度肥胖')
  } if (n >= 35) {
    console.log('重度肥胖')
  }
}

bmi(36)
bmi(32)
bmi(28)
bmi(25)
bmi(20)
bmi(18)
