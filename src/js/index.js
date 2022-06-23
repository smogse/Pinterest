//вставляем картинки, аватарки, имена пользователей
const images = document.getElementById('images');
let avatar, username;

fetch('https://62ab5fb5bd0e5d29af0ed526.mockapi.io/store')
.then((response) => response.json())
.then((arr) => {
    arr.forEach(elem => {
        let pinContainer = document.createElement('div');
        pinContainer.className = 'pin-container';
        pinContainer.style.backgroundImage = `url(${elem.image})`;
        getRandomHeight(pinContainer);

        avatar = document.createElement('img');
        avatar.className = 'avatar';
        avatar.src = elem.avatar;

        username = document.createElement('span');
        username.className = 'username';
        username.textContent = elem.username;

        let addButton = document.createElement('button');
        addButton.className = 'add-button';
        addButton.style.display = 'none';


        pinContainer.append(avatar, username, addButton);
        images.append(pinContainer);

        pinContainer.addEventListener('mouseover', () => {
                console.log('onmouseover',addButton.style.display);
            addButton.style.display = 'block';
                console.log('onmouseover',addButton.style.display);
                pinContainer.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${elem.image})`;

            }
        ) ;
        pinContainer.addEventListener('mouseout', () => {
            addButton.style.display = 'none';
            pinContainer.style.backgroundImage = `url(${elem.image})`;
            console.log('mouseout',addButton.style.display);

            }
        ) ;
    })
})

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