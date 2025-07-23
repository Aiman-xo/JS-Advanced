// {
//     let x = 80;
//     {
//         var x = 100;
//         console.log(x);
//     }
// }

// var x = 50;
// {
//     let x = 100;
//     console.log(x);
// }

// {


//     const y = 20;
//     {
//         var y = 200;
//         console.log(y);
//     }
// }

{
    var e = 20;
    console.log(e);
    {
        let e = 200;
        console.log(e);
    }
}

function illegal() {
    let user1 = 'Aiman';

    if (user1) {
        var user2 = 'john';
        console.log('main user is ' + user1);
        console.log('second user is ' + user2);
    }
}

illegal()


function check() {
    var x = 10;
    if (true) {
        let x = 20;
        console.log(x);
    }
    console.log(x);
}
check();