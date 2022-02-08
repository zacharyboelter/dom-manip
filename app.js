
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

const pinkDiv = document.createElement('div');
pinkDiv.style.border = 'thick solid black';
pinkDiv.style.backgroundColor = 'pink';
// document.getElementById('container').appendChild(pinkDiv);

const head1 = document.createElement('h3')
head1.textContent = 'I\'m a div';

pinkDiv.appendChild(head1);

const head2 = document.createElement('p');
head2.textContent = 'ME TOO!';

pinkDiv.appendChild(head2);


document.body.insertBefore(pinkDiv, null);
