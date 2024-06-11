var userName =localStorage.getItem('userName');
document.getElementById('welcome').innerHTML += ' ' + userName;
localStorage.removeItem('userName')
