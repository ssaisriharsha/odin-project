const textbox = document.querySelector("#item");
const addItem = document.querySelector("div button");
const list = document.querySelector("ul");
addItem.addEventListener("click", (e) => {
    if (textbox.value.trim() != "") {
        const listElement = document.createElement("li");
        const deleteButton = document.createElement("button");
        listElement.textContent = textbox.value;
        textbox.value = "";
        deleteButton.textContent = "Delete";
        list.appendChild(listElement);
        listElement.appendChild(deleteButton);
        deleteButton.addEventListener("click", () => {
            deleteButton.parentNode.remove();
        });
        textbox.focus();
    }
    else {
        alert("Invalid");
        textbox.value = "";
        textbox.focus();
    }
});