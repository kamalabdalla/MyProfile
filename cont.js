function storeData(){
    let name = document.getElementById('name').value;
    let address = document.getElementById('address').value;
    let email = document.getEleentById('email').value;
    let subject = document.getElementById('subject').value;


    let con = {userName: name, userAddress:address, userEmail:email, subject:subject};

    
    localStorage.setItem(con);

    
    // localStorage.setItem('userEmail', email);
    // localStorage.setItem('userName', name);
    // localStorage.setItem('userAddress', address);
    // localStorage.setItem('subject', subject);

}
