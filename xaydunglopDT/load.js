let mePhone = new Phone(100);
let youPhone = new Phone(100);
function creatNewMessMe(){
    let text = document.getElementById('phoneMe').value;
    mePhone.compose(text);
    mePhone.sendMess(youPhone);
    document.getElementById('inbox1').innerHTML ='=>'+ mePhone.inbox ;
    document.getElementById('outbox1').innerHTML = mePhone.outbox;
}function creatNewMessYou(){
    let text = document.getElementById('phoneyou').value;
    youPhone.compose(text);
    youPhone.sendMess(mePhone);
    document.getElementById('inbox2').innerHTML = youPhone.inbox;
    document.getElementById('outbox2').innerHTML = youPhone.outbox;

}