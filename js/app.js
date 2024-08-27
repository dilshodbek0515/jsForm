const passwordInput = document.querySelector('.password');
const eyeOpen = document.querySelector('.eye-open');
const eyeClosed = document.querySelector('.eye-closed');
const formEl = document.querySelector(".forma")
eyeOpen.addEventListener('click', () => password('open'));
eyeClosed.addEventListener('click', () => password('closed'));

function password(content) {
    switch (content) {
        case 'open':
            passwordInput.type = 'text';
            eyeOpen.style.display = 'none';
            eyeClosed.style.display = 'block';
            break;
        case 'closed':
            passwordInput.type = 'password';
            eyeOpen.style.display = 'block';
            eyeClosed.style.display = 'none';
            break;
        default:
            console.error('Unknown content:', content);
    }
}
console.log(monthName);

function form() {
    formEl.style.display = "flex"
}

function formClosed() {
    formEl.style.display = "none"
}
// 1-masala

// {
//     let a = 10

//     if (a >= 0) {
//         console.log(a + 1)

//     } else (
//         console.log(a)
//     )
// }

// 2-masala
// {
//     let a = 8

//     if (a >= 0) {
//         console.log(a + 1)

//     } else if (a <= 0) {
//         console.log(a - 2)
//     } else {
//         console.log(a)
//     }
// }

// 3-masala
// {
//     let a = 0

//     if (a == 0) {
//         console.log(a + 10)

//     } else if (a >= 0) {
//         console.log(a + 1)
//     } else if (a <= 0) {
//         console.log(a - 2)
//     } else {
//         console.log(a);
//     }
// }


// 4-masala
// {
//     let a = -2
//     let b = 2
//     let c = 2

//     let box = 0;

//     if (a > 0) {
//         box += 1;
//     }
//     if (b > 0) {
//         box += 1;
//     }
//     if (c > 0) {
//         box += 1;
//     }
//     console.log(box)
// }

// 5-masala

// {
//     let a = 20
//     let b = 10
//     let c = -30

//     let musbat = 0
//     let manfiy = 0

//     if (a > 0) {
//         musbat++
//     } else {
//         manfiy++
//     }
//     if (b > 0) {
//         musbat++
//     } else {
//         manfiy++
//     }
//     if (c > 0) {
//         musbat++
//     } else {
//         manfiy++
//     }
//     console.log(`musbat:${musbat} manfiy:${manfiy}`);
// }

// 6-masala

// {
//     let a = 5
//     let b = 2

//     if (a > b) {
//         console.log(a)
//     } else {
//         console.log(b)
//     }
// }

// 7-masala
// {
//     let a = 2
//     let b = 4

//     let tartibRaqam

//     if (a < b) {
//         tartibRaqam = 1
//     } else if (b < a) {
//         tartibRaqam = 2
//     } else {
//         tartibRaqam = "teng"
//     }

//     console.log(tartibRaqam);
// }

// 8-masala

// Ikkita sonni kiriting
// {
//     let a = 3
//     let b = 2

//     if (a > b) {
//         console.log(`Katta son: ${a} \nKichik son: ${b}`);
//     } else if (b > a) {
//         console.log(`Katta son: ${b} \nKichik son: ${a}`);
//     } else {
//         console.log("Ikkala son teng: " + a);
//     }
// }

// 9 - masala
// {
//     let a = 2
//     let b = 3

//     if (a > b) {
//         let son = a;
//         a = b;
//         b = son;
//     } else {
//         console.log("xato");
//     }

//     console.log(`kichik ${a} katta ${b}`);
// }

// 10-masala

// {
//     let a = 2;
//     let b = 2;

//     if (a !== a) {
//         let num = a + b;
//         a = num;
//         b = num;
//     } else {
//         a = 0;
//         b = 0;
//     }

//     console.log(`A  ${a}`)
//     console.log(`B  ${b}`)
// }


