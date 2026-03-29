const form = document.getElementById("myfrom")
const namein = document.getElementById("namein")
const email = document.getElementById("emailin")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const formdata = new FormData(form);
    localStorage.setItem("formvalues",JSON.stringify(Object.fromEntries(formdata)))
    console.log(JSON.parse(localStorage.getItem("formvalues")))
    if(localStorage.getItem("formvalues")===null){
    namein.textContent="Nothing Saved"
    email.textContent = "Nothing Saved"
}
else{
    namein.textContent =JSON.parse(localStorage.getItem("formvalues")).nameInput
    email.textContent =JSON.parse(localStorage.getItem("formvalues")).emailInput
}
})
if(localStorage.getItem("formvalues")===null){
    namein.textContent="Nothing Saved"
    email.textContent = "Nothing Saved"
}
else{
    namein.textContent =JSON.parse(localStorage.getItem("formvalues")).nameInput
    email.textContent =JSON.parse(localStorage.getItem("formvalues")).emailInput
}
