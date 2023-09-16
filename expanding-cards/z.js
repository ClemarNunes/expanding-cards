let panels = document.querySelectorAll('.panel')


panels.forEach((item)=>{
    item.addEventListener('click', ()=>{
        removeClassList()
        item.classList.add('active')
    })
})



function removeClassList(){
    panels.forEach(item => item.classList.remove('active'));
        
    
     
}




let i =1

let time = setInterval(()=>{
    removeClassList()
    panels[i].classList.add('active')
    i++
    if(i === 5){
        panels[4].classList.add('active')
        i= 0
    }
}, 2000)