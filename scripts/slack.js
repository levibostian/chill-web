// Got the favicon from slack web app. When the icon was not in the unread state, I looked at the html and copied the favicon href 
const faviconIconUrl = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFyklEQVR4nO2bPXMTVxiFz3tlyySFspqBTCiAVefGQi7CDAFnrBYmweoIjfUPLHcUEEuBIl3kX4BVBNNJDhmczkqRDzCFMBR0XgwzyWTMeCEzmcH27kkhY4y1kvZaV/5I/My4uffq7LtntOu7Z18JDJOaW7H7+tQYyWEAFgUOfc6sr6FSS8edMBr9s1ftKKKj8P0RiFgEHAFmVt+sVZ5mvg2lERYxKXbml1cTAPNNph0RTt7/LF5spZH86esx+Gy2xgVQWLhwo6WGDsYMaHPy71Aq++BsrBQ0lZy9NgFKew1g3JQJRgxIza3Y0agshlzurq4yUUvH3a2D/bNX7Sh7Q2uoN38napmi23ZlG1SnAgDQF1UTGsutvl5ktw/2oldLw4/Gchrrm2LEAJIprfWC4e1j4ouWBpTeMZvKmBCBIKWznCIfNWponhBxWmt9E8wYADiGdHYdIwYIUDOhsxcYMcDzOWlCZy8wYsDDoXiVB9QEU/cAzA/FcwfRBGMGABsmgIMgSyBqqN8cG/6kvqXdF/SYFpw/F68BjRud/YrRb8BB5NCAvS5gr3nvHpCaW7GjR9QoyBSot71tgkuBC7K0topq2EDEBHY5Z8WOxMZIpoS0KeIGhSqbj8Of/vpqTNg0iDCBA4/jDz6PV4Imk/euU1dv4cKNRKBWPVTJA7ACpl1sCVUUUA8zunzyAGAjIuUzv70e7eZBkrPXJjYSJavJEgvAd8l713MAoFJzK3aoJMcUvl9Mza1Y3ZDun71qh0yUAGAiVc5ZSjPMMEFgIGKCnYQqygdHulFMK4ICERPsJFRR0vxa6RqBgYi+itswJLT0JHBacf/syx2dxYS4nR6QgKMUdz/MUD5nAsr5WUdDyEed1iHkI+WRhU6FtA8cQWX7mO9hSkdDrfYUO61DrfYU1cOheJVk4IuK7sDC72cbd4RPvrhZBUPmCZRCLZNv0NAro66hAGD+fDy7G2GGkOMPzsXzzeYXLt7MtTWBUli4+E1TjVBs0dh8GJofiud8n2kAFZhNeR0BJwkO3j/f+r0gUDfB95gGWAJZe6sBclIxMtjByTsgJ32P6Y4NPOSQQ/4zvPd6fNEasVTsw7GNl51W4AdE1U4tfT/eTDBIg5AS1vxq4s87TpiiFsu2FeuJtaxjJ/hAyfPWqsczTzfr2DTg2ckrY4TkgTb7abJqP59OB0210XBIjieeT1dayb+8mxwDkWeXnlEEcDyw8PGXj6eAjX+Dz05emSBQbHvyLQihYYtIefHEVyPNNF7eTU6QKHbr5AGAgK0gt5Z/TI4CgCx+ctmWqArbmRH4DdDUcPn6n0TCrbhbB/8o99u9kWj4OjrHjXgqoVRv54GIpoaF2AfZ7YO9Ea0wwwTWuvJzioKRTpUomkEEOLx9RLQ1jJBSMHK96XV3CBsDEZqJ4bVQgtMK+yQQEe5+lwlBR0GkpvUhQUCY0TkeoBWIGIHySNHz9AIRxUo3ahHfn+qGbivWfFVUiRd3QgciBAoJJ9xuTpdjmSdVELvWYEGicDxTqwciiefTWaL1wQmOJ5Zu57tZ1NFLC7ndMIFE4dilhTywJRBJLN3OkcxAUMG7G6NDcJIKg4ml6WK3CwPqJtDz0wArJjtJ6jdZTtHz029PHjDUK+ycvKL3YrPF88Ru87/vDzg0YK8L2GuMd4ntlOUfBuZaTLs+MLM9zDDBvjEAkOFWswoYiUSiznJ5YPxo5nHF1FEP1CXAjS6T5fLAiCnNA2XAJhG5tVJOWSakDqYBgLUe8bMmhA6qAQDNdJkcWAMUcMqQjhHcTgV0AxFKQIvMDjBjAFHVWk40dHdQbb4JDikiHXeIAMZ+NufrPcL2NDZlcl2vP2HNVw0aO8GIASZCFZ1A5G2YoVdlMMZuguFCFRRahSphApGtYYYJjP56HAAWT1zOiorUO87rkbsjQNX3/VLixZ1qGI2/ygNZFcElgQwTsARwCVbosXQs8ySURlj+BTjnifDo3pgCAAAAAElFTkSuQmCC"

function beginObservingElementChanged(element, callback) {
  new MutationObserver(callback).observe(element, { 
    subtree: true, 
    characterData: true, 
    childList: true 
  });

  // run once at the start in case it's a while until element changes 
  callback()
}

function changeTitle() {
  if (document.title == "Slack") { return }
  document.title = "Slack"
}

function changeFavicon() {
  const element = document.querySelector("link[rel='shortcut icon']")
  if (!element) return 
  if (element.href == faviconIconUrl) return 

  element.href =  faviconIconUrl
}

// The shortcut icon gets added to the head. Unlike title where the HTML has it when the DOM is loaded initially. 
// We must wait for the icon to get added and once it is, we can finally modify the value. 
// Only observe the head elements for performance 
beginObservingElementChanged(document.querySelector('head'), (mutations) => {
  changeFavicon()
  if (!mutations) return 

  mutations.forEach(mutation => {
    mutation.addedNodes.forEach(addedNode => {
      if (addedNode.rel == "shortcut icon") {
        // Favicon got added! 
        changeFavicon()
      }
    })
  })
})

// Title can change dynamically. Observe it so when it changes, we change it again. 
beginObservingElementChanged(document.querySelector('title'), (mutations) => {
  changeTitle() 
})

