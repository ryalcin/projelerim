const secs = document.querySelector(".secs")
const mins = document.querySelector(".mins")
const hours = document.querySelector(".hours")

function tiktak(){
let second = new Date().getseconds();
let minute =new Date().getminutes();
let hour = new Date().gethours();

sec.style.transform = 'rotate(${180 + (second * 6)}deg)'
mins.style.transform = 'rotate(${180 + (minute * 6)}deg)'
hours.style.transform = 'rotate(${180 + (hour * 30)}deg)'

console.log({second,minute,hours});
}
setInterval(tiktak, 1000)
