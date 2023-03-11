// fetch('https://kitsu.io/api/edge/anime/')
// .then((response)=> response.json())
// .then((json) => {
//     console.log(json.data);
//     getinfo(json)
// })

// function getinfo(json) {
//     console.log(json.data.map((anime) => (anime.attributes.synopsis)));
//     let temp = document.getElementById('card-template');
//     let clon = temp.content.cloneNode(true); 
//     json.data.map((anime) => (anime.attributes.synopsis),
//     clon.querySelector('.card-title').innerText = anime);  //inserts title from object array into 'card-title'
//     document.getElementById('here').appendChild(clon);
// }


//------------random function--------------//

// let myArray = ['January', 'February', 'March'];
// let rand = Math.floor(Math.random() * myArray.length);

// // function showquote(){
// //     document.getElementById('card-list').innerHTML = rand;
// // }
// console.log(rand)
// // showquote()

const strings = ['vdsv', 'svsdvs', 'svsdvdv', 'davavav', 'avdv']

const randomPick = strings[(Math.floor(Math.random() * strings.length))];
console.log(randomPick)
