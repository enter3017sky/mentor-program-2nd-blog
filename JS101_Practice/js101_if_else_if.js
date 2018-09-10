
var age = 10

/*
age >= 65, old man
65 > age >=, young
age < 20, children
*/

if (age >= 65) {
  console.log('old man')
} else {
  if (age >= 20) {
    console.log('young')
  } else {
    console.log('children')
  }
}

if (age >= 65) {
  console.log('old man')
} else if (age >= 20) {
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
