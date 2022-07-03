// Место для первой задачи
function sayHello(name) {
    return("Привет, "+ name +"!")
}

// Место для второй задачи
function returnNeighboringNumbers(dig) {
    return [dig - 1, dig, dig + 1];
}

// Место для третьей задачи
function getMathResult(baseNum, iterator) {
    if (typeof(iterator) !== 'number' || iterator <= 0) {
        return baseNum;
    }

    let str = '';

    for (let i = 1; i <= iterator; i++) {
        if (i === iterator) {
            str += `${baseNum * i}`
        } else {
            str += `${baseNum * i}---`
        }
    }
    return str;
}

console.log(getMathResult(5, 3));