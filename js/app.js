document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener( 'submit', handleSubmitForm);

  const deletebut = document.querySelector("#delete");
  deletebut.addEventListener( 'click', handleDelete);

});


const handleDelete = function(event){
  const resultBox = document.querySelector(`#reading-list`);
  resultBox.textContent = '';
};

const handleSubmitForm = function(event){
  event.preventDefault();

  const newBoxItem = document.createElement('div');
  newBoxItem.className = 'box';
  // const boxTitle = document.createTextNode('h2');
  // newBoxItem.appendChild(boxTitle);

  const boxTitle = document.createElement('h2');
  boxTitle.textContent = `${this.title.value}`;
  newBoxItem.appendChild(boxTitle);

  const boxAuthor = document.createElement('h3');
  boxAuthor.textContent = `${this.author.value}`;
  newBoxItem.appendChild(boxAuthor);

  const boxCategory = document.createElement('p');
  boxCategory.textContent = `${this.category.value}`;
  newBoxItem.appendChild(boxCategory);
  //
  // newBoxItem.textContent = `${this.title.value} ${this.author.value} ${this.category.value}`;


  const resultBox = document.querySelector(`#reading-list`);

  resultBox.appendChild(newBoxItem);

  document.getElementById('new-item-form').reset();
};






// newListItem.classList.add('purple');
