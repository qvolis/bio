// Счётчик посещений через CountAPI
// Каждый уникальный ключ = отдельный счётчик
fetch('https://api.countapi.xyz/hit/qvolis-bio/visits')
    .then(response => response.json())
    .then(data => {
        const counter = document.getElementById('visit-counter');
        if (counter) {
            counter.textContent = '👁 ' + data.value;
        }
    })
    .catch(error => {
        console.log('Ошибка счётчика:', error);
        const counter = document.getElementById('visit-counter');
        if (counter) {
            counter.textContent = '👁 —';
        }
    });
