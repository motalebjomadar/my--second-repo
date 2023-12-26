const container = document.getElementById('container');
container.addEventListener('click', function () {
    console.log('you are clicked container');
})
const items = document.getElementById('items');
items.addEventListener('click', function (event) {
    console.log('you are clicked ul');
})
const listItem = document.getElementById('item2');
listItem.addEventListener('click', function(event) {
    event.stopPropagation();
    console.log('Item two is selected');
})