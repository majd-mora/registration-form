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

// Giving an Id for each user
personData.forEach((item, i) => {
  item.id = i + 1;
});
// console.log(personData);


// Inserting New Users

    // Definition to give the info as an array of objects
    let data = [];
    // Adding new Users function ( array of objects )
    const addUser = (e) => {
        e.preventDefault(); // to stop form submitting
        let User = { // Getting the input values
            firstName: document.getElementById('fname').value,
            lastName: document.getElementById('lname').value,
            gender: document.querySelector('input[name="gender"]:checked').value,
            date: document.getElementById('birthday').value
        }

        console.log(personData);
        personData.push(User); // Pushing added users to the end of table
        loadTableData(personData); // Show new users that has been pushed
        document.forms[0].reset(); // to clear inputs after submitting
    }
    document.getElementById('submit').addEventListener('click', addUser);


// Showing table with contents 
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