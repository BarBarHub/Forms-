const name = document.getElementById('name')
const password = document.getElementById('password')
const comment = document.getElementById('comments')
const address = document.getElementById('address')
const email = document.getElementById('email')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

let re =/^(([^<>()[]\.,;:s@"]+(.[^<>()[]\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/igm;
let pass =/[0-9A-Z]/;
form.addEventListener('submit', (e) => {
    e.preventDefault()
   


    if (name.value === "") {
        alert('name required')
    }
    if (address.value === "") {
        alert('address required')
    }
    if (password.value === "" || !pass.test(password.value)) {
        alert('password invalid')
    }
    if (email.value === "" || re.test(email.value)) {
        alert('email invalid')
    }
    if (comment.value === "") {
        alert('comment required')
    }
    console.log(password.value)
    
    if (password.value.length <=8) {
        alert(' password must be longer than 8 characters')
    }

})
