// Name: random-text

import "@johnlindquist/kit"

let length = await arg("char lenght")

if (length == "") {
    length = 25
}

let result = '';
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const charactersLength = characters.length;
let counter = 0;
while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
}

copy(result)
await div(`<h1 class="p-10 text-4xl text-center">${result}</h1>`)
