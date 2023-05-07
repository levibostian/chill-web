// Hide notification dot as it's a distraction making you think, "I should check my notifications". 
// Ideally, just the notification dot would hide but I couldn't figure out how to do that so I just hide the entire notification button. 
Array.from(document.getElementsByTagName("notification-indicator")).forEach(element => {
  element.style.display = 'none';
});