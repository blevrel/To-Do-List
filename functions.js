function addItem()
{
    const taskInput = document.getElementById("task");
    const inputValue = taskInput.value.trim();
    let list = document.getElementById("list");
    let items = list.getElementsByTagName("li");
    let elem;
    for (let i = 0; i < items.length; ++i)
    {
        elem = items[i].getElementsByTagName("input")[0];
        console.log(elem.getAttribute("id"));
        if (elem.getAttribute("id") === inputValue)
        {
            //mettre un message ou effet duplicata
            taskInput.value = "";
            return ;
        }
    }
    if (inputValue === "")
    {
        //msg ou effet whitespace
        return;
    }
    const liElem = document.createElement("li");
    const liCheckbox = document.createElement("input");
    liCheckbox.type = "checkbox";
    liCheckbox.id = inputValue;
    liElem.appendChild(liCheckbox);
    const label = document.createElement("label");
    label.htmlFor = inputValue;
    label.appendChild(document.createTextNode(inputValue));
    liElem.appendChild(label);
    list.appendChild(liElem);
    taskInput.value = "";
}

function removeItem()
{
    let list = document.getElementById("list");
    let items = list.getElementsByTagName("li");
    for (let i = items.length - 1; i >= 0; i--)
    {
        let checkbox = items[i].getElementsByTagName("input")[0];
        if (checkbox.checked) {
            list.removeChild(items[i]);
        }
    }
}

function keyHandler(event)
{
    if (event.key === 'Enter')
        addItem();
    event.preventDefault();
}