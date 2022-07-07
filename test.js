// // Место для первой задачи
// function sayHello(name) {
//     return("Привет, "+ name +"!")
// }

// // Место для второй задачи
// function returnNeighboringNumbers(dig) {
//     return [dig - 1, dig, dig + 1];
// }

// // Место для третьей задачи
// function getMathResult(baseNum, iterator) {
//     if (typeof(iterator) !== 'number' || iterator <= 0) {
//         return baseNum;
//     }

//     let str = '';

//     for (let i = 1; i <= iterator; i++) {
//         if (i === iterator) {
//             str += `${baseNum * i}`
//         } else {
//             str += `${baseNum * i}---`
//         }
//     }
//     return str;
// }

// console.log(getMathResult(5, 3));

// Место для первой задачи
function calculateVolumeAndArea(arg) {
    if (typeof(arg) !== 'number' || !Number.isInteger(arg) || arg <= 0) {
        return "При вычислении произошла ошибка";
    } else {
        console.log(`Объем куба: ${Math.pow(arg, 3)}, площадь всей поверхности: ${arg * arg * 6}`)

    }
}
calculateVolumeAndArea(0);
// Место для второй задачи
function getCoupeNumber(num) {
    if (typeof(num) !== 'number' || num < 0 || !Number.isInteger(num)) {
        return console.log("Ошибка. Проверьте правильность введенного номера места");
    }

    if (num === 0 || num > 36) {
        return console.log("Таких мест в вагоне не существует");
    }

    return console.log(Math.floor(num / 4));

}
getCoupeNumber(1,2);




// ================


// Место для первой задачи
function calculateVolumeAndArea(arg) {
    if (typeof(arg) !== 'number' || !Number.isInteger(arg) || arg < 0) {
        return "При вычислении произошла ошибка";
    } else {
        return (`Объем куба: ${Math.pow(arg, 3)}, площадь всей поверхности: ${arg * arg * 6}`)

    }
}

// Место для второй задачи
function getCoupeNumber(num) {
if (typeof(num) !== 'number' || num < 0 || !Number.isInteger(num)) {
        return console.log("Ошибка. Проверьте правильность введенного номера места");
    }

    if (num === 0 || num > 36) {
        return ("Таких мест в вагоне не существует");
    }

    return (Math.ceil(num / 4));

}


// ==================
function getCoupeNumber(seatNumber) {
    if (typeof(seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
        return "Ошибка. Проверьте правильность введенного номера места";
    }

    if (seatNumber === 0 || seatNumber > 36) {
        return "Таких мест в вагоне не существует";
    }

    for (let i = 4; i <= 36; i = i + 4) {
        if (seatNumber <= i) {
            return Math.ceil(i / 4);
        }
    }
    // тут очень много вариантов решения, но выбрал один из элегантных :)
}

// =========================


// Место для первой задачи
function getTimeFromMinutes(min) {
    if (min < 0 || min > 600 || !Number.isInteger(min) || typeof(min) !== 'number') {
        return console.log('Ошибка, проверьте данные')
    }
    const hours = Math.floor(min / 60),
        minutes = min % 60;

    let hourStr = '';

    switch (hours) {
        case 0:
            hourStr = 'часов';
            break;
        case 1:
            hourStr = 'час';
            break;
        case 2:
        case 3:
        case 4:
            hourStr = 'часа';
            break;
        default:
            hourStr = 'часов';
    }

    return console.log(`Это ${hours} часов и ${minutes} минут`)

}
getTimeFromMinutes(502)


// Место для второй задачи
function findMaxNumber(w, x, y, z) {
    if (typeof(w) !== 'number' || typeof(x) !== 'number' || typeof(y) !== 'number' || typeof(z) !== 'number') {
        return 0;
    } else {
        return console.log(`Самое большое число: ${Math.max(w, x, y, z)}`);
    }
}
findMaxNumber(1, 5, 99, 3.5)

// ==============================

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    }
};

function showExperience(plan) {

}

function showProgrammingLangs(plan) {

}