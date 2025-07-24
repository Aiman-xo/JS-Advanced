

function threeS() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('this runs after 3 s')
            reject('something fishy...')
        }, 3000)
    })
}

function fourS() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('this runs after 4 s')
            reject('something fishy... on 4')
        }, 4000)
    })
}


async function res() {
    const resp = await threeS()
    console.log(resp);
    const data = await fourS()
    console.log(data);
}
res()