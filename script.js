let marks = [75, 75, 85, 6, 48, 44]

let result = marks.every(function (ele) {
    return ele > 35;
})

if (result) {
    console.log("pass");
}
else {
    console.log("fail");

}
