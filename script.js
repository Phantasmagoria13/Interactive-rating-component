let rating

function selectedRating(num) {
   return (rating = num)
}

function submit() {
   const container = document.querySelector('#container')
   container.innerHTML = ``

   container.innerHTML += `<img src="./images/illustration-thank-you.svg" alt="illustration-thank-you" id="illustration-thank-you"/> 
   <div id="rating"><p>You selected ${rating} out of 5</p></div>
   <h2>Thank you!</h2>
   <p>We appreciate you taking the time to give a rating. If you ever need more support,
   don’t hesitate to get in touch!</p>`
   container.setAttribute('id', 'second-container')
}
