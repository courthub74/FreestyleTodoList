// Todo JS

// query the inputs and outputs
    // And buttons

// INPUT TEXT
let input_todo = document.getElementById('input_todo');

// INPUT BUTTON
let input_submit = document.getElementById('input_submit');

// OUTPUT DIV
let output_div = document.getElementById('output_div');

 // IF nothing is in the input field,
    // disable submit button
// if (input_todo.value.length > 0) {
//     input_submit.removeAttribute('disabled');
// } else {
//     // set disabled attribute back
//     input_submit.setAttribute('disabled', 'disabled');
// }

// Add Event Listener to input button that has a
// Function that takes input from input
    // and displays it in the output
    // and adds a cross off, edit and delete button
    // make the todos delete cross off and edit with effects
input_submit.addEventListener('click', function() {
    // Todo Submit pressed
    console.log("Submit Button Pressed");
    // store input value in a variable
    let input_value = input_todo.value;
    console.log(`The input value is: ${input_value}`);
    // clear the input field
    input_todo.value = '';
    // ADD a div for each todo item and buttons
    let todo_item = document.createElement('div');
    // NOW append to the new todo div to output div
    output_div.appendChild(todo_item);
    // give the new todo div a class
    todo_item.classList.add('todo_item');
    // test print it
    console.log(todo_item);
    // create a p tag with the todo output
    let todo_output = document.createElement('input');
    // set its value
    todo_output.value = input_value;
    // append to the todo item div
    todo_item.appendChild(todo_output);
    // give the todo item a class
    todo_output.classList.add('todo_output');
    // add readOnly Attribute to the todo item
    todo_output.setAttribute('readOnly', true);

    // THE EDIT BUTTONS

    // EDIT BUTTONS DIV
    let buttons_div = document.createElement('div');
    // set it's class
    buttons_div.classList.add('buttons_div');
    // append to the todo item
    todo_item.appendChild(buttons_div);

    // CROSS OFF BUTTON
    let cross_off_button = document.createElement('button');
    // append to the buttons div
    buttons_div.appendChild(cross_off_button);
    // append text to the button
    cross_off_button.appendChild(document.createTextNode("Cross"));
    // set button to the cross off button class
    cross_off_button.classList.add('cross_off_button');
    // set id of the cross off button 
    cross_off_button.setAttribute('id', 'cross_off_button');

    // create an event listener to the cross off
    cross_off_button.addEventListener('click', () => {
        // test print
        console.log("Cross Off Button Pressed");
        // toggle the states of the button and the todo item
        if (cross_off_button.innerHTML === "Cross") {
            // change the state of the todo item to crossed
            todo_output.classList.add('crossed');
            // change the innerText of the button
            cross_off_button.innerHTML = "Uncross";
            // disable edit button 
                // the variable queried
                // add disable property
            edit_button.disabled = true;
        } else {
            if (cross_off_button.innerHTML === "Uncross") {
                // remove the crossed class from todo output
                todo_output.classList.remove('crossed');
                // change the innerText of button back
                cross_off_button.innerHTML = "Cross";
                // enable the edit button
                edit_button.disabled = false;
            }
        }
    });

    // EDIT BUTTON
    let edit_button = document.createElement('button');
    // append to the buttons div
    buttons_div.appendChild(edit_button);
    // append text to the button
    edit_button.appendChild(document.createTextNode("Edit"));
    // set button to the cross off button class
    edit_button.classList.add('edit_button');
    // set id of the cross off button 
    edit_button.setAttribute('id', 'edit_button');
    // add event listener
    edit_button.addEventListener('click', () => {
        // toggle the states 
        // when read only is turned off
        if (edit_button.innerHTML === "Edit"){
            // test print
            console.log("Edit Button Pressed");
            // change the text of button
            edit_button.innerHTML = "Save";
            // change the color of the output
                // by removing readOnly attribute from todo output
            todo_output.removeAttribute('readOnly');
        } else {
            if (edit_button.innerHTML === "Save") {
                // test print
                console.log("Save Button Pressed");
                // change text back
                edit_button.innerHTML = "Edit";
                // re-add read only
                todo_output.setAttribute('readOnly', true);
            }
        }
    });

    // DELETE BUTTON
    let delete_button = document.createElement('button');
    // append to the buttons div
    buttons_div.appendChild(delete_button);
    // append text to the button
    delete_button.appendChild(document.createTextNode("Delete"));
    // set button to the delete button class
    delete_button.classList.add('delete_button');
    // set id of the delete button
    delete_button.setAttribute('id', 'delete_button');
    // add eventlistener 
    delete_button.addEventListener('click', () => {
        // test print
        console.log("Delete Button has been pressed");
        // remove the todo item
        todo_item.remove();
    });

    // UNDERLINE
    let under_line = document.createElement('ul');
    // set it's class
    under_line.classList.add('ul');
    // append to todo item
    todo_item.appendChild(under_line);
});
