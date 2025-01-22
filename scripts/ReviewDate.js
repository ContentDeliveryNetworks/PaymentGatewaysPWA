   // Function to get date 'n' days back
    function getDateFromDays(daysOffset) {
      const today = new Date();
      today.setDate(today.getDate() - daysOffset); // Subtract 'n' days
      const day = today.getDate();
      const month = today.toLocaleString('default', { month: 'short' });
      const year = today.getFullYear().toString().slice(-2); // Get last 2 digits of the year
      return `${day}${getDaySuffix(day)} ${month} ${year}`;
    }

    // Function to get suffix for the day (e.g., 'th', 'st', 'nd', 'rd')
    function getDaySuffix(day) {
      if (day > 3 && day < 21) return 'th'; // Special case for days 11-20
      switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
      }
    }

    // Function to update dates in elements based on their id
    function setDateForElements() {
      // Loop over all elements with an id starting with "date"
      document.querySelectorAll('[id^="date"]').forEach(function (element) {
        const id = element.id;
        // Extract the number from the id (e.g., "date50" => 50)
        const idNumber = parseInt(id.replace('date', ''), 10);
        
        if (!isNaN(idNumber)) {
          const dateStr = getDateFromDays(idNumber); // Get the date for that many days ago
          element.innerText = dateStr; // Set the date as text content
        }
      });
    }

    // Run the function when the page loads
    window.onload = setDateForElements;
