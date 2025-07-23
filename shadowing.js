//Create a global variable and shadow it with a function-level variable.

let x = 100;

function soo() {
    let x = 200;
    console.log(x);
}
soo()
console.log(x);

//Try shadowing a let with another let inside a block.
if (true) {
    let x = 'jony';
    {
        let x = 'many';
        console.log(x);
    }


    console.log(x);
}

//Compare what happens when you shadow using var vs let in a block.
{
    let y = 5;
    if (true) {
        var y = 200;
    }
    console.log(y);
}

{
    let c = 50;
    if (true) {
        var c = 100;

        console.log(c);
    }
    console.log(c);
}