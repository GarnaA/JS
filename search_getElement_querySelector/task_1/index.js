//table with id="age-table"
let table = document.getElementById('age-table')

//all labels in this table
table.getElementsByTagName('label')

//first td in this table
table.rows[0].cells[0]

//form with name = "search"
let form = document.getElementsByName('search')[0]
document.querySelector('form[name="search"]')

//first input in this form
form.getElementsByTagName('input')[0]
form.querySelector('input')

//last input in this form
let inputs = form.querySelectorAll('input')
inputs[inputs.length-1]