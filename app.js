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

    // Edit row Function
    function edit_row(no) {
    document.getElementById("edit_button"+no).style.display="none";
    document.getElementById("save_button"+no).style.display="block";

    var firstName = document.getElementById("fname"+no);
    var lastName = document.getElementById("lname"+no);
    var gender = document.querySelector('input[name="gender"]'+no);
    var birthday = document.getElementById("birthday"+no);

    var firstName_data = firstName.innerHTML;
    var lastName_data = lastName.innerHTML;
    var gender_data = gender.innerHTML;
    var birthday_data = birthday.innerHTML;

    firstName.innerHTML="<input type='text' id='fname_text"+no+"' value='"+firstName_data+"'>";
    lastName.innerHTML="<input type='text' id='lname_text"+no+"' value='"+lastName_data+"'>";
    gender.innerHTML="<input type='radio' name='gender_text"+no+"' value='"+gender_data+"'>";
    birthday.innerHTML="<input type='date' id='birthday_text"+no+"' value='"+birthday_data+"'>";
}

    // Save row Function
    function save_row(no) {
        var firstName_val = document.getElementById("fname_text"+no).value;
        var lastName_val = document.getElementById("lname_text"+no).value;
        var gender_val = document.querySelector('input[name="gender"]'+no).value;
        var birthday_val = document.getElementById("birthday_text"+no).value;

        document.getElementById("fname"+no).innerHTML= firstName_val;
        document.getElementById("lname"+no).innerHTML= lastName_val;
        document.querySelector('input[name="gender"]'+no).innerHTML= gender_val;
        document.getElementById("birthday"+no).innerHTML= birthday_val;

        document.getElementById("edit_button"+no).style.display="block";
        document.getElementById("save_button"+no).style.display="none";
    }

    // Delete row function
    function delete_row(no) {
        document.getElementById("row"+no+"").outerHTML="";
    }



//// Inserting New Users
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
        personData.push(User); // Pushing added users to the end of table
        console.log(personData);
        loadTableData(personData); // Show new users that has been pushed
        document.forms[0].reset(); // to clear inputs after submitting
        personData.forEach((item, i) => {
          item.id = i + 1;
        });
    }
    document.getElementById('submit').addEventListener('click', addUser);

// Showing table with contents 
function loadTableData(data) {
    const tableBody = document.getElementById('tableData');
    let dataHtml = '';

    for(let person of personData) {
        dataHtml += `<tr id="row">
        <td>${person.firstName}</td>
        <td>${person.lastName}</td>
        <td>${person.gender}</td>
        <td>${person.date}</td>
        <td>
        <input type="button" id="edit_button" value="Edit" class="edit" onclick=edit_row() ${person.Actions}</input>
        <input type="button" id="save_button" value="Save" class="save" onclick=save_row() ${person.Actions}</input>
        <input type="button" value="Delete" class="delete" onclick=delete_row() ${person.Actions}</input>
        </td>
        </tr>`;
    }
    tableBody.innerHTML = dataHtml;
}
loadTableData(personData);

