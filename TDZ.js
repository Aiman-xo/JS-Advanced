{
    //TDZ starts here
    //console.log(x);  //this shows error
    let x = 88;//TDZ ends here.
    console.log(x);
}

function main() {
    // console.log(b);
    var a = 5;
    function ins() {
        console.log(b);
    }

    let b = 10;
    ins();

    console.log(a);
    console.log(b);
}

main()

// const arr = [1, 2, 3, 4];
// const arr2 = [...arr];
// console.log(arr2)
// arr2[0] = 100;
// console.log(arr);

// const obj = {
//     name: "akhil",
//     edu: {
//         heigher: "wow school"
//         , college: "gems"
//     },
//     age: 21
// }

// const obj2 = { ...obj };
// obj2.edu.college = "moyndh";
// console.log(obj);
