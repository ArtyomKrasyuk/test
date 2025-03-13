document.getElementById('auth').onclick = async function(e){
    let login = document.getElementById('login-input').value;
    let password = document.getElementById('password-input').value;

    let url = 'http://127.0.0.1:8080/login';
    let info = {'login': login, 'password': password};
    let response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
        body: JSON.stringify(info),
        credentials: 'include'
    });
    let message = null;
    if(response.ok) message = await response.text();
    console.log(message);
}

document.getElementById('check').onclick = async function(e){
    let url = 'http://127.0.0.1:8080/api/hello';
    let response = await fetch(url, {
        method: 'GET',
        credentials: 'include'
    });
    let message = null;
    if(response.ok) message = await response.text();
    console.log(message);
}

document.getElementById('logout').onclick = async function(e){
    let url = 'http://127.0.0.1:8080/logout';
    let response = await fetch(url, {
        method: 'GET',
        credentials: 'include'
    });
    let message = null;
    if(response.ok) message = await response.text();
    console.log(message);
}