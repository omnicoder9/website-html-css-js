document.addEventListener("DOMContentLoaded", function() {
    // Load the sidebar content
    fetch('partials/sidebar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('sidebar-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading sidebar:', error));

    // Handle link clicks to load content dynamically
    document.body.addEventListener('click', function(event) {
        if (event.target.tagName === 'A' && event.target.dataset.page) {
            event.preventDefault(); // Prevent the default link behavior

            const page = event.target.dataset.page;
            loadPage(page);
        }
    });

    function loadPage(page) {
        fetch(`partials/${page}`)
            .then(response => response.text())
            .then(data => {
                document.getElementById('content').innerHTML = data;
            })
            .catch(error => console.error('Error loading page:', error));
    }
});
