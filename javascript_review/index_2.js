const mycats = {
    cats : {
        criollo : {
            breed1 : 'siames',
            breed2 : 'tiger',
            breed3 : 'Persa'
        }
    },
    colors : ['black', 'white', 'brown']
};
let {breed2} = mycats.cats.criollo;
// console.log(breed2, mycats.colors[0]);

// const soygei = new Promise((resolve, reject) => {
//     setTimeout (() => {
//         let answer = false;

//         if (answer) {
//             resolve('si soi');
//         } else {
//             reject('no soi');
//         }
//     }, 3000);
// });

// soygei.then(resultado => {
//    console.log(resultado);
// }).catch(error => {
//     console.log(error);
// });