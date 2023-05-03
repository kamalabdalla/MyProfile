
function checkData(){
    let emailEnterd = document.getElementById('email').value;
    let pssdEnterd = document.getElementById('pssd').value;

   let mail = localStorage.getItem('userEmail');
   let pss = localStorage.setItem('userPssd');

   if(emailEnterd == mail){
    if(pssdEnterd == pss){
        alert('log in successfull');
    }
    else{
        alert('wrong passwad');
    }
   }
   else{
    alert('invelid credential')
   }
}