// Welcome to PR Demo
// Get the element
const p = document.querySelector('#demo');

// This function tells about this application
about = () => 'awesome appplication!';

// This function renders stuff to the DOM
p.textContent = `This is an ${about()}`;
