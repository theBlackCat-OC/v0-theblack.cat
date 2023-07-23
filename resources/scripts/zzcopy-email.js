window.addEventListener('DOMContentLoaded', () => {
    var image = document.getElementById('myImage');
    var emailContent = document.getElementById('email-content');

    var isImage1 = true;

    image.addEventListener('click', function() {
        if (isImage1) {
            var email = emailContent.getAttribute('href').replace('mailto:', '');
            navigator.clipboard.writeText(email)
                .then(function() {
                    console.log('Email copied to clipboard');
                })
                .catch(function(err) {
                    console.error('Failed to copy email: ', err);
                });

            image.src = "resources/thank-you-flaticons/check.png";
            isImage1 = false;

            setTimeout(function() {
                image.src = "resources/thank-you-flaticons/copy.png";
                isImage1 = true;
            }, 2500);
        }
    });
});