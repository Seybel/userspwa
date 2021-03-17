function createNode (element) {
    return document.createElement(element);
}

function append (parent, el) {
    return parent.appendChild(el);
}

const ul = document.getElementById('people');

async function getUsers () {
    try {
    // fetch users
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const res = await data.json();
    
    // display name and email returned from API
    for (let i = 0; i < res.length; i++) {
        const person = res[i];

        let li = createNode('li')
            span = createNode('span');

        li.innerHTML = person.name;
        span.innerHTML = person.email;

        append(li, span)
        append(ul, li)  
    }
        
    } catch (err) {
        console.log(`API:- ${err}`)
    }
}