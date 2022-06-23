//вставляем картинки, аватарки, имена пользователей
const images = document.getElementById('images');
let pinContainer, imgWrapper, img, avatar, username;

fetch('https://62ab5fb5bd0e5d29af0ed526.mockapi.io/store')
.then((response) => response.json())
.then((arr) => {
    arr.forEach(elem => {
        pinContainer = document.createElement('div');
        pinContainer.className = 'pin-container';

        imgWrapper = document.createElement('div');
        imgWrapper.className = 'img-wrapper';

        img = document.createElement('img');
        img.className = 'img';
        img.src = elem.image;
        getRandomHeight(img);

        avatar = document.createElement('img');
        avatar.className = 'avatar';
        avatar.src = elem.avatar;

        username = document.createElement('span');
        username.className = 'username';
        username.textContent = elem.username;

        pinContainer.append(imgWrapper, avatar, username);
        imgWrapper.append(img);
        images.append(pinContainer);
    })
})
// .then(() => {
//     let arr = document.querySelectorAll('.pin-container');
//     arr.forEach((elem) => {
//         elem.onmouseover = () => {
//             // const container = document.createElement('div');
//             const addButton = document.createElement('button');
//             // addButton.style.position = 'absolute';
//             elem.append(addButton);
//             // container.append(addButton);
//         }

//         elem.onmouseleave = () => {
//         }
//     })
// })

//высота картинок
function getRandomHeight (elem) {
    let px = 200 + Math.random() * (419 - 200);
    return elem.style.height = `${px}px`;
}

//делаем подсветку поисковика в фокусе
const searchContainer = document.getElementById('searchContainer');
const search = document.getElementById('search');
const searchIcon = document.getElementById('searchIcon');

search.onfocus = () => {
    searchContainer.style.boxShadow = 'rgb(0 132 255 / 50%) 0 0 0 4px';
    searchIcon.style.display = 'none';
}

search.onblur = () => {
    searchContainer.style.boxShadow = 'none';
    searchIcon.style.display = 'block';
}

//меняем цвет фона поисковика при наведении мышкой
searchContainer.onmouseover = () => {
    search.style.backgroundColor = '#ddd';
    searchContainer.style.backgroundColor = '#ddd';
}

searchContainer.onmouseleave = () => {
    search.style.backgroundColor = '#e9e9e9';
    searchContainer.style.backgroundColor = '#e9e9e9';
}

// function a(arr) {
//     arr.forEach(elem => {
//       elem.style.border = '1px solid black';  
//     })
// }