document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector("#container");
    const para = document.createElement("p");
    para.textContent = "Hey I'm Red";
    para.style.color = "red";
    container.appendChild(para);
    const heading = document.createElement("h3");
    heading.setAttribute("style", "color: blue");
    heading.textContent = "I'm blue h3.";
    container.appendChild(heading);
    const div = document.createElement("div");
    div.setAttribute("style", "background-color: pink; border: 5px solid black;");
    div.innerHTML = "<h3>I'm in a div</h3><p>Me Too!</p>";
    container.appendChild(div);
    const button = document.createElement("button");
    button.textContent = "Click me!";
    button.setAttribute("style", "background-color: green; border: 3px solid black; padding: 8px; margin: 8px; color: white; font-size: 18px; font-weight: bold;")
    button.addEventListener("click", (e) => {
        e.target.style.backgroundColor = "blue";
        console.log(e.target.getAttribute("style"));
        alert("Button clicked");
    });

    button.addEventListener("dblclick", () => {
        alert("double clicked!");
    });

    button.addEventListener("contextmenu", (e) => {
        alert("Context menu not allowed.");
        e.preventDefault();
    });
    container.appendChild(button);
});

document.onmousemove = () => {console.log("moved")};

document.addEventListener("beforeunload", () => {
    alert("unloading...");
});

document.addEventListener("mouseenter", ()=>{});

document.addEventListener("load", () => {
    console.log("loaded...");
});
