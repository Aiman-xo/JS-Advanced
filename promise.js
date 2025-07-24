// so we have these tasks

// wash the dress
// clean the plates
// study the topics

function dress() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            let washing = true;

            if (washing) {

                resolve('washing dress done');

            }
            else {
                reject('washing cannot be done');
            }
        }, 1000)
    })
}

function clean() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let clean = false;

            if (clean) {
                resolve('you cleaned the pplats')
            }
            else {
                reject('shut up and go do it')
            }
        }, 2000)
    })
}


dress().then((value) => {
    console.log(value);
    return clean()
}).then((value) => {
    console.log(value);
    console.log('done.');
}).catch(error => {
    console.log(error);
})


//1

let giga = new Promise((resolve) => {
    setTimeout(() => {
        resolve('loaded after 3 seconds..');

    }, 3000)
})

giga.then(val => console.log(val))

//3

function loginUser(user) {

    return new Promise((resolve, reject) => {
        if (user === 'admin') {
            resolve(`your welcome mr ${user}`)
        } else {
            reject('who the hell are you!!');
        }
    })
}

loginUser('admin').then(val => val.toUpperCase()).then(val => console.log(val));


//2

function fetch() {
    let task = Math.random() > 0.5;
    return new Promise((resolve, reject) => {
        if (task) {
            resolve('you are done with the task');
        }
        else {
            reject('you are not done with the task')
        }
    })
}

fetch().then(val => console.log(val)).catch(val => console.log(val))

//3

function getID() {
    let luck = Math.random() >= 0.5;
    return new Promise((resolve, reject) => {
        if (luck) {
            resolve(101);
        }
        else {
            reject('try again from first then')
        }
    })
}

function getuserObj(id) {
    let luck = Math.random() >= 0.5;
    return new Promise((resolve, reject) => {
        if (luck) {
            resolve({ id, name: 'manu' });
        }
        else {
            reject('try again from second then')
        }
    })
}

function getuserall(user) {
    let luck = Math.random() >= 0.5;
    return new Promise((resolve, reject) => {
        if (luck) {
            resolve([user]);
        }
        else {
            reject('try again from third then')
        }
    })
}

getID().then(getuserObj).then(getuserall).then(val => console.log(val)).catch(err => console.log(err));


//1

function mult() {
    return new Promise((resolve) => {
        resolve(2)
    })
}

mult().then(val => val * 2).then(val => val * 5).then(val => val - 3).then(val => console.log(val))