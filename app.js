/* functionalities */

let sortDirection = false;
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

//what do you call this function inside the sort?
//explain callback functions
personData.sort(function (a, b) {
    const dateA = new Date(a.date), dateB = new Date(b.date)
    return dateA - dateB
});


// W3Schools Read again to understand sorting fname and lname
function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("myTable2");
  switching = true;
  // Set the sorting direction to ascending:
  dir = "asc";
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 1; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /* Check if the two rows should switch place,
      based on the direction, asc or desc: */
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      // Each time a switch is done, increase this count by 1:
      switchcount ++;
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}

var data = [];
document.querySelector('form button').addEventListener('click', function(event) {
    
    var inputs = document.querySelectorAll('form input');
    var newPerson = {};
    for (var i = 0; i < inputs.length; i++) {
        newPerson[inputs[i].name] = inputs[i].value;
        inputs[i].value = '';
    }
    console.log(personData)
    personData.push(newPerson);
    loadTableData(personData);
    event.preventDefault();
}, false);

function loadTableData(personData) {
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

// sorting dates
function sortColumn(columnName) {
    const dataType = typeof personData[0][columnName];
    sortDirection = !sortDirection;

    switch(dataType) {
        case 'number':
        sortNumberColumn(sortDirection, columnName);
        break;
    }
    loadTableData(personData)
}

loadTableData(personData);