// Welcome to PR Demo
// Get the element
const p = document.querySelector('#demo');

// This function tells about this application
about = () => 'awesome application!';

// This function renders stuff to the DOM
p.textContent = `This is an ${about()}`;
