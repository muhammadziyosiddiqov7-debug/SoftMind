

let eye = document.getElementById(`eye`)
let btn = document.getElementById(`btn`)

let idInp = document.getElementById(`idinp`)
let passwordInp =document.getElementById(`pass`)
let errorEl =document.getElementById(`error`)

errorEl.style.display=`none`

eye.addEventListener(`click`, () => {
    
    if (passwordInp.type==`password`) {
        
        passwordInp.type = `text`
        eye.classList.remove(`fa-eye-slash`)
        eye.classList.add(`fa-eye`)
        
    }
    else{
        passwordInp.type = `password`
        eye.classList.remove(`fa-eye`)
        eye.classList.add(`fa-eye-slash`)
        
    }
})

function check() {
    
    if ( idInp.value && passwordInp.value) {
        
        btn.style.backgroundColor = ` #111`

        btn.disabled = false
    }
    else{

        btn.style.backgroundColor = ` #a2a2a274`
        btn.disabled = true
        }
    
}

passwordInp.addEventListener(`input` , () =>{
    check()
})
idInp.addEventListener(`input` , () =>{
    check()                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
})

btn.addEventListener(`click` , () =>{
    
    if (idInp.value == '1987675' && passwordInp.value == '7700') {
        
        
        window.location.href= `./index.html`
    }
    
    else{
        errorEl.style.display = `block`
        idInp.style.borderColor = `red`
        passwordInp.style.borderColor = `red`
        window.location.href= `./login.html`
        
        setTimeout( ()=> {
        errorEl.style.display = `none`
        idInp.style.borderColor = ` #FAFAFA`
        passwordInp.style.borderColor = ` #FAFAFA`

        },3000)
        alert(`Sizga mumkin emas ustoz`)

    }

})


function  uzur() {
    
    alert(`Uzur hozirgi kungacha ota-ona yo'nalishi hali ochlimadi 17-fevral kuni sayt butunlay tugatiladi`)

}