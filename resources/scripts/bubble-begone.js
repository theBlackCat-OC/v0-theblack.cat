const bubbleTrigger = document.querySelector('.bubble-trigger-bug');
const bubble = document.querySelector('.bubble-bug');


bubbleTrigger.addEventListener('mouseenter', showBubble);
bubbleTrigger.addEventListener('touchstart', showBubble);


bubbleTrigger.addEventListener('mouseleave', hideBubble);
bubbleTrigger.addEventListener('touchend', hideBubble);


document.addEventListener('click', (event) => {
  if (!bubble.contains(event.target) && !bubbleTrigger.contains(event.target)) {
    hideBubble();
  }
});

function showBubble() {
  bubble.style.display = 'block';
}

function hideBubble() {
  bubble.style.display = 'none';
}