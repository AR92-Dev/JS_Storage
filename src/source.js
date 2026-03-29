const input = document.getElementById("input")
const button = document.getElementById("button")
const nameVal = document.getElementById("name")
button.addEventListener("click",(a)=>{
    localStorage.setItem("name",input.value)
    nameVal.textContent = localStorage.getItem("name")
})