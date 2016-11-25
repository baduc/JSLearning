//var yearOfBirths = [1992, 1990, 1997];
//var empty = [];
//console.log(yearOfBirths);
//
//for (var i = 0; i < yearOfBirths.length; i++) {
//    empty[i] = yearOfBirths[i];
//}
//
//function calculateAge(yearOfBirth) {
//    return 2016 - yearOfBirth;
//}
//
//function isFullAge(yearOfBirth) {
//    var age = calculateAge(yearOfBirth);
//    if (age >= 18) {
//        return true;
//    } else {
//        return false;
//    }
//}
//
//for (var i = 0; i < empty.length; i++) {
//    console.log(calculateAge(empty[i]));
//}

var years = [2008, 1992, 1997, 2002, 1985];

function printFullAge(years) {
    var ages = [];
    var fullAge = [];

    for (var i = 0; i < years.length; i++) {
        ages[i] = 2016 - years[i];
    }

    for (var i = 0; i < ages.length; i++) {
        if (ages[i] >= 18) {
            fullAge[i] = true;
            console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old and is of full age');
        } else {
            fullAge[i] = false;
            console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old and is not of full age');
        }
    }
    return fullAge;
    
}

var full1 = console.log(printFullAge(years));
var full2 = console.log(printFullAge([2012, 2000, 1988]));

