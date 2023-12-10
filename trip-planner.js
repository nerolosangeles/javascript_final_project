const destinationList = document.getElementById("destination-list");
const addDestinationForm = document.getElementById("add-destination-form");

addDestinationForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("destination-name").value;
    const arrivalDate = document.getElementById("arrival-date").value;
    const departureDate = document.getElementById("departure-date").value;

    addDestination(name, arrivalDate, departureDate);
    this.reset();
});

function addDestination(name, arrivalDate, departureDate) {
    const destinationItem = document.createElement("li");
    destinationItem.classList.add("destination-item");

    const detailsElement = document.createElement("div");
    detailsElement.classList.add("destination-details");
    detailsElement.innerHTML = `
        <h3>${name}</h3>
        <p>Arrival: ${arrivalDate}</p>
        <p>Departure: ${departureDate}</p>
    `;
    destinationItem.appendChild(detailsElement);

    const buttonsElement = document.createElement("div");
    buttonsElement.classList.add("buttons");

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("edit-button");
    editButton.addEventListener("click", function() {
        // Implement edit functionality
    });
    buttonsElement.appendChild(editButton);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener("click", function() {
        destinationItem.remove();
    });
    buttonsElement.appendChild(deleteButton);

    destinationItem.appendChild(buttonsElement);

    destinationList.appendChild(destinationItem);
}
