// fetch('https://jsonplaceholder.typicode.com/users', {
//     method: 'POST',
//     headers: {
//         'Content-type': 'application/json'
//     },
//     body: JSON.stringify({
//         name: 'kunnani'
//     })
// })
//     .then(response => {
//         return response.json()
//     })
//     .then(data => {
//         console.log(data);
//         return fetch('https://jsonplaceholder.typicode.com/users');
//     })
//     .then(again => again.json())
//     .then(data2 => console.log(data2))
//     .catch(err => console.log(err));

//2

fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(data => {
        data;
        // for (let i = 0; i < data.length; i++) {
        //     console.log(data[i].name);
        // }

        const nep = data.map((x) => {
            return x.name
        })
        return nep


    })
    .then(data2 => console.log(data2))
    // .then()

    .catch(err => console.log(err))

//3

let id = Math.floor(Math.random() * 10);
console.log(id);

fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(resp => resp.json())
    .then(data => {
        console.log(data.title);
    }

    )

//4

let id2 = Math.floor(Math.random() * 1000);
console.log(id2);

fetch(`https://jsonplaceholder.typicode.com/posts/${id2}`)
    .then(resp => {

        if (!resp.ok) {
            throw new Error('id not found')
        }
        return resp.json();
    })
    .then(data => {

        console.log(data.title);
    }

    )
    .catch(err => console.log(err));


