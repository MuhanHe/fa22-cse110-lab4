function timeSecond(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time) 
}
var t = setInterval(timeSecond,1000);
// clearInterval(t);