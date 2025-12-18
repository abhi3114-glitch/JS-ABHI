const buttons=document.querySelectorAll('.button')
const body=document.querySelector("body")


buttons.forEach((button)=>{
    console.log(button)
    addEventListener('click',function(harshit){
        console.log(harshit)
        console.log(harshit.target)
        body.style.backgroundColor=harshit.target.id
    })
})