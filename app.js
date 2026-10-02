// Счётчик посещений через CounterAPI.dev (рабочий сервис)
fetch('https://api.counterapi.dev/v1/qvolis-bio/profile-views/up')
    .then(response => response.json())
    .then(data => {
        const counter = document.getElementById('visit-counter');
        if (counter && data && data.count !== undefined) {
            counter.textContent = '👁 ' + data.count;
        } else {
            const counter = document.getElementById('visit-counter');
            if (counter) counter.textContent = '👁';
        }
    })
    .catch(error => {
        console.log('Ошибка счётчика:', error);
        const counter = document.getElementById('visit-counter');
        if (counter) {
            counter.textContent = '👁 —';
        }
    });
