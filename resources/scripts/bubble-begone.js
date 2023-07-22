const bubbleTrigger = document.querySelector('.bubble-trigger');
const bubble = document.querySelector('.bubble');

bubbleTrigger.addEventListener('mouseenter', () => {
  bubble.style.display = 'block';
});
bubbleTrigger.addEventListener('mouseleave', () => {
  bubble.style.display = 'none';
});

bubble.addEventListener('mouseleave', () => {
  bubble.style.display = 'none';
});
