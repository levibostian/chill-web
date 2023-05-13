// there is a little dot over the notifications button when you have any unread notifications. I want that dot to not show up. 
// The dot shows up when a certain class is attached to the button. We observe the button and make sure it never has that class attached
new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    if (mutation.target.classList.contains("AppHeader-button--hasIndicator")) {
      mutation.target.classList.remove("AppHeader-button--hasIndicator")
    }
  })
}).observe(document.querySelector("#AppHeader-notifications-button"), { 
  attributes: true 
});