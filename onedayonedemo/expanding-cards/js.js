//获取所有div
let all = document.querySelectorAll(".normal")
all.forEach(a=>{
    a.addEventListener("click",()=>{
        remove()
        a.classList.add("special")
    })
})
function remove(){
    all.forEach(a=>{
        a.classList.remove("special")
    })
}
