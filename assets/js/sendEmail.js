function sendMail(contactForm){
    emailjs.send('service_84s88l3', 'template_10lt8mg', {
        "from_name" : contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request" : contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    )

}