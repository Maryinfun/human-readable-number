module.exports = function toReadable(number) {
    let str = number.toString();
    s = "";
    n = str.length;
    str = str.slice();
    arr1 = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    arr2 = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    if (number >= 0 && number < 20) {
        s += arr1[number];
        return s;
    } else if (number >= 20 && number < 100 && number % 10 === 0) {
        a = number / 10 - 2;
        s += arr2[a];
        return s;
    } else if (number > 20 && number < 100 && number % 10 != 0) {
        a = Math.floor(number / 10);
        b = number % 10;
        s += arr2[a - 2] + " " + arr1[b];
        return s;
    } else if (number >= 100 && number < 1000 && number % 100 === 0) {
        a = number / 100;
        s += arr1[a] + " hundred";
        return s;
    } else if (number > 100 && number < 1000 && number % 10 === 0) {
        a = Math.floor(number / 100);
        b = (number - a * 100) / 10;
        if (b === 1) {
            s += arr1[a] + " hundred " + "ten";
        } else s += arr1[a] + " hundred " + arr2[b - 2];
        return s;
    } else if (number > 100 && 0 < number % 100 && number % 100 < 20) {
        a = Math.floor(number / 100);
        b = number % 100;
        s += arr1[a] + " hundred " + arr1[b];
        return s;
    } else if (number > 100 && number < 920 && number % 100 < 20) {
        a = Math.floor(number / 100);
        b = number % 100;
        s += arr1[a] + " hundred " + arr2[b - 2];
        return s;
    } else if (100 < number < 1000 && number % 10 != 0 && number % 100 > 20) {
        // сотни
        a = Math.floor(number / 100);
        // дес+ед
        b = (number - a * 100 - (number % 10)) / 10 - 2;
        c = number % 10;
        s += arr1[a] + " hundred " + arr2[b] + " " + arr1[c];
        return s;
    }
};
