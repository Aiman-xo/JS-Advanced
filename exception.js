try {
    let x = 7;
    console.log(x);
    console.log('object');
}
catch (error) {
    console.log(error);
}
finally {
    console.log('this always runs...');
}

//2

// faking a server

function fakeCall() {
    return new Promise((reject, resolve) => {
        const connection = Math.random() >= 0.5;

        setTimeout(() => {
            if (connection) {
                resolve('successfully connected');
            }
            else {
                reject('hmm not quite interesting...');
            }
        }, 1000);
    })
}

async function makeCall() {

    try {
        const resp = await fakeCall();
        console.log(resp);
        // console.log(resolve);
    } catch (err) {
        console.log(err);
    }
}

makeCall()


const name = 'kunnani234567890-098765432kchjdahdsbbnuis';

try {
    if (name.length > 10) {
        throw new Error('invalid length');
    }
    else {
        console.log('niceee');
    }
} catch (err) {
    console.log(err);
}
