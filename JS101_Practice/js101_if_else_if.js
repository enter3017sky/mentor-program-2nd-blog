
var age = 10

if (age >= 65) {
  console.log('old man')
} else {
  if (age >= 20) {
    console.log('young')
} else {
    console.log('children')
}

if (age >= 65) {
  console.log('old man')
} else if (age >= 40) {
  console.log('壯年')
} else if (age >= 20) {
  console.log('young')
} else if (age >= 10) {
  console.log('children')
} else {
  console.log('baby')
}


function ageTest(age){
  if (age >= 65) {
    console.log('老人')
  } else if (age >= 40) {
    console.log('壯年')
  } else if (age >= 20) {
    console.log('年輕人')
  } else if (age >= 10) {
    console.log('小屁孩')
  } else {
    console.log('baby')
  }
}
ageTest(8)
ageTest(15)
ageTest(25)
ageTest(45)
ageTest(66)