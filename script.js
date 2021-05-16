const apiURL = 'https://chitter-backend-api-v2.herokuapp.com/peeps'

async function getPeeps() {
	const response = await fetch(apiURL);
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

getPeeps().catch(error => {
	console.log(error);
});
