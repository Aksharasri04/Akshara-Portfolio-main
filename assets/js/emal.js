emailjs.init("USERID"); // Replace with your actual User ID


document.getElementById('contact-form').addEventListener('submit', function(event) {
 event.preventDefault(); 

 console.log(new FormData(this)); // Log the form data

 emailjs.sendForm('SERVICE ID', 'TEMPLATEID', this)
.then(function(response) {
console.log('SUCCESS!', response.status, response.text);
alert('Your message has been sent successfully!');
   }, function(error) {
console.error('FAILED...', error);
alert('Failed to send the message. Please try again.');
});
}); 