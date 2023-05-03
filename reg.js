function addData(){
    let email = document.getElementById('email').value;
    let pssd = document.getElementById('pssd').value;

    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPssd', pssd);
}
