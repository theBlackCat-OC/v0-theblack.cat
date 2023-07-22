const bubbleTrigger = document.querySelector('.bubble-trigger-bug');
const bubble = document.querySelector('.bubble-bug');

bubbleTrigger.addEventListener('mouseenter', () => {
  bubble.style.display = 'block';
});
bubbleTrigger.addEventListener('mouseleave', () => {
  bubble.style.display = 'none';
});

bubble.addEventListener('mouseleave', () => {
  bubble.style.display = 'none';
});
