document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  window.onload = function() {
    // Check if local storage is supported
    if (localStorage) {
      // Retrieve the form element
      var form = document.getElementById('contact-form');
  
      // Add event listener for form submission
      form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
  
        // Get the form input values
        var fname = document.getElementById('fname').value;
        var lname = document.getElementById('lname').value;
        var country = document.getElementById('country').value;
        var subject = document.getElementById('subject').value;
  
        // Save the form data in local storage
        localStorage.setItem('fname', fname);
        localStorage.setItem('lname', lname);
        localStorage.setItem('country', country);
        localStorage.setItem('subject', subject);
  
        // Reset the form inputs
        form.reset();
  
        // Display the stored data
        displayStoredData();
      });
  
      // Retrieve the stored form data and display it
      displayStoredData();
    }
  
    // Function to display the stored data
    function displayStoredData() {
      var dataList = document.getElementById('data-list');
      dataList.innerHTML = ''; // Clear the existing data
  
      // Retrieve the stored form data
      var storedFname = localStorage.getItem('fname');
      var storedLname = localStorage.getItem('lname');
      var storedCountry = localStorage.getItem('country');
      var storedSubject = localStorage.getItem('subject');
  
      // Check if any data exists in local storage
      if (storedFname && storedLname && storedCountry && storedSubject) {
        var dataItems = [
          'First Name: ' + storedFname,
          'Last Name: ' + storedLname,
          'Country: ' + storedCountry,
          'Subject: ' + storedSubject
        ];
  
        // Create list items for each data item
        dataItems.forEach(function(item, index) {
          var listItem = document.createElement('li');
          listItem.textContent = item;
          dataList.appendChild(listItem);
  
          // Add horizontal line after the "Subject" field
          if (index === dataItems.length - 1) {
            var horizontalLine = document.createElement('hr');
            dataList.appendChild(horizontalLine);
          }
        });
      }
    }
  };

  

  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  
  