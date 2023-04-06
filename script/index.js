$(document).ready(function(){
    $('#team_page #tab_cont').tabs()
})

// Getting element with field by ID
const uName = document.getElementById('name')
const mail = document.getElementById('mail')
const phNum = document.getElementById('phNum')
const msg = document.getElementById('msg')
// Submit button selector
const submit = document.getElementById('submit')

// Validate FormFields
// Just making sure it's not empty
function validate(){
    if(uName.value.length < 1 || mail.value.length < 1 || phNum.value.length < 1 || msg.value.length < 1){
        return false
    } else {
        return true
    }
}

function handleSumbit(e) {
    e.preventDefault()
    const valid = validate()
    // Creating an object to be submitted 
    const data = {}
    if(valid){
        data['Name'] = uName.value
        data['Mail'] = mail.value
        data['Phone Number'] = phNum.value
        data['Message'] = msg.value
        console.log(data)
    } else {
        alert('field can\'t be empty')
    }
}
// Submit Event listener
submit.addEventListener('click', handleSumbit)