today = new Date();
var cmas = new Date(today.getFullYear(), 10, 28);
if (today.getMonth()==11 && today.getDate()>25){
    cmas.setFullYear(smas.getFullYear()+1);
}
var one_day=1000*60*60*24;
console.log(Math.ceil((cmas.getTime()-today.getTime())/(one_day))+" days left until Christmas!");

