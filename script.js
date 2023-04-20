var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.querySelectorAll("li");

//FUNCTIONS
function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	addDeleteButton(li);
	listItems = document.querySelectorAll("li");
	xButtons = ul.querySelectorAll("button");
	listenMarkDone(li); //This is not working because it's calling the function twice I think. And toggling "done" twice.
	listenDeleteButton();
}

//ACTIONS
function addListAfterClick() {
	if (inputLength()>0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength()>0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

//Marking items as done:
function markDone(task) {
	task.classList.toggle("done");
}

function firstpassMarkDone() {
	listItems.forEach(function(task) {
		listenMarkDone(task);
	});
}

function listenMarkDone(task) {
	task.addEventListener("click", function() {
		markDone(task);
		// console.log(task);
	});
}

firstpassMarkDone();

//Delete button:
function addDeleteButton(task) {
	var deleteButton = document.createElement("button");
	task.appendChild(deleteButton);
	deleteButton.textContent = "x";
}

listItems.forEach(function(task) {
	addDeleteButton(task);
});


function deleteListItem(task) {
	task.remove();
}

var xButtons = ul.querySelectorAll("button");

function listenDeleteButton() {
	xButtons.forEach(function(x) {
		x.addEventListener("click", function() {
			xTask = x.parentElement;
			deleteListItem(xTask);
		});
	})
}

listenDeleteButton();
