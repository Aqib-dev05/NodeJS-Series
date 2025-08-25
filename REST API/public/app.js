//For button functionality
function addTdClickListeners() {
  let tdata = document.querySelectorAll("td");
  tdata.forEach((td) => {
    td.addEventListener("click", (e) => {
      //for delete button
      if (e.target.id === "del") {
        const id =
          e.target.parentElement.parentElement.firstElementChild.textContent;
        fetch(`http://localhost:3000/users/${id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => {
            location.reload();
          })
          .catch((error) => console.error("Error:", error));
      }

      //for edit button
    });
  });
}

//to display data in tabale by getting from API
function Display() {
  fetch("http://localhost:3000/users", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      const tableBody = document.getElementById("tableBody");
      data.forEach((item) => {
        const row = document.createElement("tr");
        row.innerHTML = `
                        <td>${item.id}</td>
                        <td>${item.name}</td>
                        <td>${item.age}</td>
                        <td>${item.salary}</td>
                        <td>
                         <button id="del">Delete</button>&nbsp
                         <button id="edit">Edit</button>
                         </td>
                    `;
        tableBody.appendChild(row);
      });
      addTdClickListeners();
    })
    .catch((error) => console.error("Error:", error));
}

document.onload = Display();
