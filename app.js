
const container = document.querySelector('#container');

const content = document.createElement('div');

content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

// create p that says hey im red
const p = document.createElement('p');
p.textContent = "Hey, I'm red!"
p.style.color = 'red';
document.getElementById('container').appendChild(p);

// create h3 says hey im blue
const h3 = document.createElement('h3');
h3.textContent = 'I\'m a blue h3!';
h3.style.color = 'blue';
document.getElementById('container').appendChild(h3);
