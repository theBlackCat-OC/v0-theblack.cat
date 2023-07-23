
    // Function to handle email copying
    function copyEmailToClipboard() {
        var email = document.getElementById('email-content').getAttribute('href').replace('mailto:', '');
        navigator.clipboard.writeText(email)
          .then(function() {
            console.log('Email copied to clipboard');
          })
          .catch(function(err) {
            console.error('Failed to copy email: ', err);
          });
  
        document.getElementById('emailImage').src = "resources/thank-you-flaticons/check.png";
        setTimeout(function() {
          document.getElementById('emailImage').src = "resources/thank-you-flaticons/copy.png";
        }, 2500);
      }
  
      // Function to handle text copying
      function copyTextToClipboard() {
        var textToCopy = "theblackcat#5906";
        navigator.clipboard.writeText(textToCopy)
          .then(function() {
            console.log('Text copied to clipboard');
          })
          .catch(function(err) {
            console.error('Failed to copy text: ', err);
          });
  
        document.getElementById('discordImage').src = "resources/thank-you-flaticons/check.png";
        setTimeout(function() {
          document.getElementById('discordImage').src = "resources/thank-you-flaticons/copy.png";
        }, 2500);
      }
  
      // Add click event listener to the email link
      document.getElementById('emailImage').addEventListener('click', function() {
        copyEmailToClipboard();
      });
  
      // Add click event listener to the discord link
      document.getElementById('discordImage').addEventListener('click', function() {
        copyTextToClipboard();
      });
    