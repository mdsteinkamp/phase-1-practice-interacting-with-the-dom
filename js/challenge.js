//Page counter that increments by one second once page has loaded
//Minus & Plus buttons affect the page counter
document.addEventListener('DOMContentLoaded', () => {
    let counter = 0;
    const timer = document.querySelector('#counter')
    const pageTimer = setInterval(pageCounter, 1000)

    function pageCounter() {
        counter++;
        timer.textContent = counter;
        // const pauseer('click', clearBtn = document.querySelector('#pause');
        // pauseBtn.addEventListenInterval(pageTimer));
    }



    const minus = document.querySelector('#minus');
    const plus = document.querySelector('#plus');
    minus.addEventListener('click', () => {
        timer.textContent--;
    });
    plus.addEventListener('click', () => {
        timer.textContent++;
    })

    const likeBtn = document.querySelector('#heart');
    likeBtn.addEventListener('click', (event) => {
        console.log(event)
        let p = document.createElement('p')
        let likeList = document.querySelector('ul.likes')
        p.textContent = `The number ${timer.textContent} has been clicked ### times.`
        likeList.appendChild(p)
    })



});
