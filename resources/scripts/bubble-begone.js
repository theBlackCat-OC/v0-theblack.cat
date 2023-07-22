const bubbleTrigger = document.querySelector('.bubble-trigger-bug');
const bubble = document.querySelector('.bubble-bug');


bubbleTrigger.addEventListener('mouseenter', () => {
  bubble.style.display = 'block';
});

bubbleTrigger.addEventListener('click', () => {
  bubble.style.display = 'block';
});


bubbleTrigger.addEventListener('mouseleave', () => {
  bubble.style.display = 'none';
});


document.addEventListener('click', (event) => {
  if (!bubble.contains(event.target) && !bubbleTrigger.contains(event.target)) {
    bubble.style.display = 'none';
  }
});
