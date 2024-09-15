console.log("hellow from script.js")
// document.addEventListener("DOMContentLoaded", function() {
//     // Load the sidebar content
//     fetch('partials/sidebar.html')
//         .then(response => response.text())
//         .then(data => {
//             document.getElementById('sidebar-container').innerHTML = data;
//         })
//         .catch(error => console.error('Error loading sidebar:', error));

//     // Handle link clicks to load content dynamically
//     document.body.addEventListener('click', function(event) {
//         if (event.target.tagName === 'A' && event.target.dataset.page) {
//             event.preventDefault(); // Prevent the default link behavior

//             const page = event.target.dataset.page;
//             loadPage(page);
//         }
//     });

//     function loadPage(page) {
//         fetch(`partials/${page}`)
//             .then(response => response.text())
//             .then(data => {
//                 document.getElementById('content').innerHTML = data;
//             })
//             .catch(error => console.error('Error loading page:', error));
//     }
// });
console.log("line 29 script.js")
document.getElementById ("start-progress").addEventListener ("click", startProgress, false);
function startProgress() {
    const progressBar = document.getElementById('dynamic-progress');
    const progressText = document.getElementById('progress-text');
    let progressValue = 0;

    // Use an interval to update the progress bar every second
    const interval = setInterval(() => {
        if (progressValue >= 100) {
            clearInterval(interval);
            progressText.innerText = 'Completed!';
        } else {
            progressValue += 10;  // Increase the progress value
            progressBar.value = progressValue;
            progressText.innerText = progressValue + '% completed';
        }
    }, 1000);  // Update every 1 second
}
