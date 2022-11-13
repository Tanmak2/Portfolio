var card = document.getElementsByClassName('card');

for (var i = 0; i < card.length; i++) {
  card[i].addEventListener('click', function () {
    card[i].setAttribute('style', 'transform: rotateY(180deg)');
  });
}
