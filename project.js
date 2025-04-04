let form = document.querySelector('#addForm');
let itemList = document.querySelector('#items');
let filter = document.querySelector('#filter')

//form submit event
form.addEventListener('submit', addItem);

// Delete event to itemList
itemList.addEventListener('click', removeItem);

// Filter event
filter.addEventListener('keyup', filterItems);


function addItem(e) {
    e.preventDefault();
// get input value
    let newItem = document.querySelector('#item').value;
    
// Create new li elements
    let li = document.createElement('li');
// Add class 
    li.className = 'list-group-item'
// Add text node with input value
    li.appendChild(document.createTextNode(newItem));
// Create del button element
    let deleteBtn = document.createElement('button');
// Add classes to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
// Append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    li.appendChild(deleteBtn);
    itemList.appendChild(li);
}


function removeItem(e) {
    if (e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItems(e) {
// convert text to lowercase
    let text = e.target.value.toLowerCase();
// Get all li
    let items = itemList.querySelectorAll('li');
    console.log(items)
// convert to an array
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!= -1){
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
}