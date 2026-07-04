document.addEventListener('DOMContentLoaded', () => {
    
    // ----- 1. Search Form Handling (index.html) -----
    const searchForm = document.getElementById('busSearchForm');
    if (searchForm) {
        // Set minimum date to today
        const dateInput = document.getElementById('travelDate');
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);

        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const source = document.getElementById('source').value;
            const destination = document.getElementById('destination').value;
            const date = document.getElementById('travelDate').value;

            if (source && destination && date) {
                console.log(`Searching for buses from ${source} to ${destination} on ${date}`);
                // In a real app, you would redirect to booking.html with query parameters
                // window.location.href = `booking.html?from=${source}&to=${destination}&date=${date}`;
                alert("Search functionality initiated! In the full project, this will redirect to the results page.");
            } else {
                alert("Please fill in all fields.");
            }
        });
    }

    // ----- Simple Mobile Menu Toggle (Basic implementation) -----
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if(menuToggle) {
        menuToggle.addEventListener('click', () => {
            // In a real project, toggle a CSS class that shows/hides the menu
            alert("Mobile menu toggle clicked. (Needs CSS implementation for slide-out menu)");
        });
    }
});