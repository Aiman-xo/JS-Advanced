// // async function sum() {
// //     const resp = await fetch('https://jsonplaceholder.typicode.com/users')
// //     const data = await resp.json();
// //     console.log(data);
// // }

// // sum().then()


// const first = async function () {
//     const resp = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await resp.json()
//     console.log(data[0].username);
// }

// first();


// const second = async function () {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         if (!response.ok) {
//             throw new Error('you must check')
//         }
//         const data = await response.json()
//         data.forEach((val) => {
//             val.name = val.name + ' ' + 'kunnani'
//         })
//         return data


//     }
//     catch (err) {
//         console.log(err.message);
//     }


// }
// second().then(data => {
//     if (data) {
//         console.log(data);
//     }
// })

async function getJson(url) {
    try {
        const resp = await fetch(url)
        if (!resp.ok) {
            throw new Error('error status ' + ' ' + resp.status)
        }
        const data = await resp.json()
        return data;
    }
    catch (err) {
        console.log(err.message);
    }


}

getJson('https://jsonplaceholder.typicode.com/users')

async function takesURL() {
    let id = Math.floor(Math.random() * 10);
    try {
        const data1 = await getJson(`https://jsonplaceholder.typicode.com/users/${id}`
        )
        id = Math.floor(Math.random() * 10);
        console.log(data1);

        const data2 = await getJson(`https://jsonplaceholder.typicode.com/posts/${id}`)
        console.log(data2);

        const data3 = await getJson('https://jsonplaceholder.typicode.com/comments/3')
        console.log(data3);

    }
    catch (err) {
        console.log(err);
    }
}

takesURL();