/* functionalities */

//what does let do
let personData = [
    {
        firstName: 'Majd',
        lastName: 'Mora',
        gender: 'Male',
        date: "1999-03-08"
    },
    {
        firstName: 'Gwen',
        lastName: 'Stacy',
        gender: 'Female',
        date: "1982-05-14"
    },
    {
        firstName: 'Andrew',
        lastName: 'Garfield',
        gender: 'Male',
        date: "1989-07-16"
    },
    {
        firstName: 'Dwayne',
        lastName: 'Johnson',
        gender: 'Male',
        date: "1972-08-23"
    }
];

personData.forEach((item, i) => {
  item.id = i + 1;
});

console.log(personData);





    let data = [];

    const addUser = (e) => {
        e.preventDefault();
        let User = {
            firstName: document.getElementById('fname').value,
            lastName: document.getElementById('lname').value,
            gender: document.querySelector('input[name="gender"]:checked').value,
            date: document.getElementById('birthday').value,
        }
        console.log(personData);
        personData.push(User);
        loadTableData(personData);
        document.forms[0].reset();
        e.preventDefault();
    }
    document.getElementById('submit').addEventListener('click', addUser);




// var data = [];
// document.querySelector('form button').addEventListener('click', function(event) {
//     var inputs = document.querySelectorAll('form input');
//     var newPerson = {};
//     for (var i = 0; i < inputs.length; i++) {
//         newPerson[inputs[i].name] = inputs[i].value;
//         inputs[i].value = '';
//         const selectedGender = document.querySelector('input[name="gender"]:checked').value;
//     }
//     console.log(personData)
//     personData.push(newPerson);
//     loadTableData(personData);
//     event.preventDefault();
// }, false);

function loadTableData(data) {
    const tableBody = document.getElementById('tableData');
    let dataHtml = '';

    for(let person of personData) {
        dataHtml += `<tr>
        <td>${person.firstName}</td>
        <td>${person.lastName}</td>
        <td>${person.gender}</td>
        <td>${person.date}</td>
        </tr>`;
    }
    tableBody.innerHTML = dataHtml;
}


loadTableData(personData);