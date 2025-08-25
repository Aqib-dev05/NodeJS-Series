export default function formHandler(id) {
  let form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = document.querySelector("#name").value;
    let age = document.querySelector("#age").value;
    let salary = document.querySelector("#salary").value;

    let data = { name, age, salary };
    document.querySelectorAll("input").forEach((input) => (input.value = ""));
    document.querySelector(".faram").classList.add("hidden");

    if (id != undefined) {
      fetch(`http://localhost:3000/users/${id}/edit`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          location.reload();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  });
}
