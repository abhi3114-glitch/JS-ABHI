// Cat API ka URL
const url = 'https://api.thecatapi.com/v1/images/search';

// Button aur container ko select kar rahe hain
const button = document.querySelector('.btn');
const container = document.querySelector('.container');

// Button click event
button.addEventListener('click', function () {

  // API se data fetch kar rahe hain
  fetch(url)
    .then((response) => {
      // response ko JSON me convert kar rahe hain
      return response.json();
    })
    .then((data) => {
      // pehle se koi image hai to hata do
      container.innerHTML = '';

      // image element create kar rahe hain
      const img = document.createElement('img');

      // API se image URL milta hai data[0].url me
      img.src = data[0].url;

      // CSS classes add kar rahe hain
      img.classList.add('random_cats');

      // image ko container ke andar add kar do
      container.appendChild(img);
    })
    .catch((error) => {
      // agar koi error aaye to console me dikhao
      console.log('Error fetching cat image:', error);
    });

});
