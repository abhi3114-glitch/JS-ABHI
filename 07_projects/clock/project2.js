// document.querySelector('#clock')
const clock=document.getElementById('clock')



setInterval(function(){
    // console.log(clock)
    let date=new Date;
    clock.innerHTML=date.toLocaleTimeString();
},1000)






