const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let todos = [];

function showMenu() {
    console.log('\n--- TODO CLI APP ---');
    console.log('1. View Todos');
    console.log('2. Add Todo');
    console.log('3. Delete Todo');
    console.log('4. Exit');
    rl.question('Choose an option (1-4): ', handleMenu);
}

function handleMenu(option) {
    switch(option.trim()) {
        case '1':
            viewTodos();
            break;
        case '2':
            addTodo();
            break;
        case '3':
            deleteTodo();
            break;
        case '4':
            rl.close();
            console.log('Goodbye!');
            break;
        default:
            console.log('Invalid option. Please choose 1-4.');
            showMenu();
    }
}

function viewTodos() {
    if (todos.length === 0) {
        console.log('\nNo todos yet!');
    } else {
        console.log('\nYour Todos:');
        todos.forEach((todo, idx) => {
            console.log(`${idx + 1}. ${todo}`);
        });
    }
    showMenu();
}

function addTodo() {
    rl.question('\nEnter new todo: ', (input) => {
        if (input.trim().length === 0) {
            console.log('Todo cannot be empty.');
        } else {
            todos.push(input.trim());
            console.log('Todo added!');
        }
        showMenu();
    });
}

function deleteTodo() {
    if (todos.length === 0) {
        console.log('\nNo todos to delete!');
        showMenu();
        return;
    }
    viewTodos();
    rl.question('\nEnter the number of the todo to delete: ', (num) => {
        const idx = parseInt(num.trim(), 10) - 1;
        if (isNaN(idx) || idx < 0 || idx >= todos.length) {
            console.log('Invalid number.');
        } else {
            const removed = todos.splice(idx, 1);
            console.log(`Deleted: ${removed[0]}`);
        }
        showMenu();
    });
}

showMenu();
