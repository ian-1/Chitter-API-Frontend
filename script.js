const apiURL = 'https://chitter-backend-api-v2.herokuapp.com'

async function getPeeps() {
	const response = await fetch(`${apiURL}/peeps`);
  const peeps = await response.json();
  peeps.forEach(peep => {
    let fieldNode = document.createElement('fieldset');
    fieldNode.setAttribute('class', 'peepBox');

    let legendNode = document.createElement('legend');
    legendNode.setAttribute('class', 'peepLegend');
    legendNode.innerText = peep.user.handle;

    let lableNode = document.createElement('lable');
    lableNode.setAttribute('class', 'peep');
    lableNode.innerText = peep.body;

    fieldNode.appendChild(legendNode);
    fieldNode.appendChild(lableNode);
    document.getElementById('peepsContainer').appendChild(fieldNode);
  });
};

async function createUser() {
	
  
  const response = await fetch(apiURL);

  const user = await response.json();
  peeps.forEach(peep => {
    let fieldNode = document.createElement('fieldset');
    fieldNode.setAttribute('class', 'peepBox');

    let legendNode = document.createElement('legend');
    legendNode.setAttribute('class', 'peepLegend');
    legendNode.innerText = peep.user.handle;

    let lableNode = document.createElement('lable');
    lableNode.setAttribute('class', 'peep');
    lableNode.innerText = peep.body;

    fieldNode.appendChild(legendNode);
    fieldNode.appendChild(lableNode);
    document.getElementById('peepsContainer').appendChild(fieldNode);
  });
};

async function createUser(data) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
	const response = await fetch(`${apiURL}/users`, options);
  return await response.json();
}

async function logIn(data) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
	const response = await fetch(`${apiURL}/sessions`, options);
  const returnedData = await response.json();
  console.log(returnedData)
}

async function createPeep(data) {
  const options = {
    method: 'POST',
    headers: {
      'Authorization': 'Token token=_2a_12_xxtHlXAxU0_qMXpSJ92wNu',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
	const response = await fetch(`${apiURL}/peeps`, options);
  const returnedData = await response.json();
  console.log(returnedData)
}

getPeeps().catch(error => {
	console.log(error);
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#newUser').addEventListener('click', (event) => {
    userData = createUser({"user": {"handle":"wolf", "password":"mypassword"}}).catch(error => {
      console.log(error);
    })
    .then(() => {
      logIn({"session": {"handle":`${userData.user.handle}`, "password":"mypassword"}}).catch(error => {
        console.log(error);
      });
    })
  });
});

// createPeep({"peep": {"user_id":436, "body":"my first peep"}}).catch(error => {
// 	console.log(error);
// });
