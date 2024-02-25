const ul = document.querySelector('ul');

fetch('http://localhost:3000/users')
  .then((x) => x.json())
  .then((data) => {
    for (let i = 0; i < data.length; i += 1) {
      const user = data[i];
      const listItem = `
                <li>
                    <p>Id = ${user.id}</p>
                    <p>Name = ${user.name}</p>
                    <p>Age = ${user.age}</p>
                </li>
            `;
      ul.innerHTML += listItem;
    }
  });
