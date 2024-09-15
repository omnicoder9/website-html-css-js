console.log("inside aa.js")

document.addEventListener("DOMContentLoaded", function() {
    console.log("hereherehere")
    const startButton = document.getElementById("start-progress");
    
    // Ensure the button is being found
    if (startButton) {
        console.log("Button found, adding event listener");
        startButton.addEventListener("click", startProgress, false);
    } else {
        console.log("Button not found");
    }

    function startProgress() {
        console.log("startProgress() function triggered");
        const progressBar = document.getElementById('dynamic-progress');
        const progressText = document.getElementById('progress-text');
        let progressValue = 0;

        // Ensure the progress bar and text are being found
        if (!progressBar || !progressText) {
            console.log("Progress bar or text not found");
            return;
        }

        // Use an interval to update the progress bar every second
        const interval = setInterval(() => {
            if (progressValue >= 100) {
                clearInterval(interval);
                progressText.innerText = 'Completed!';
                console.log("Progress completed");
            } else {
                progressValue += 10;  // Increase the progress value
                progressBar.value = progressValue;
                progressText.innerText = progressValue + '% completed';
                console.log(`Progress: ${progressValue}%`);
            }
        }, 1000);  // Update every 1 second
    }
});


// document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById("start-progress").addEventListener("click", startProgress, false);
    
//     function startProgress() {
//         console.log("start progress()");
//         const progressBar = document.getElementById('dynamic-progress');
//         const progressText = document.getElementById('progress-text');
//         let progressValue = 0;

//         // Use an interval to update the progress bar every second
//         const interval = setInterval(() => {
//             if (progressValue >= 100) {
//                 clearInterval(interval);
//                 progressText.innerText = 'Completed!';
//             } else {
//                 progressValue += 10;  // Increase the progress value
//                 progressBar.value = progressValue;
//                 progressText.innerText = progressValue + '% completed';
//             }
//         }, 1000);  // Update every 1 second
//     }
// });


// document.getElementById ("start-progress").addEventListener ("click", startProgress, false);
// function startProgress() {
//     console.log("start progress ()")
//     const progressBar = document.getElementById('dynamic-progress');
//     const progressText = document.getElementById('progress-text');
//     let progressValue = 0;

//     // Use an interval to update the progress bar every second
//     const interval = setInterval(() => {
//         if (progressValue >= 100) {
//             clearInterval(interval);
//             progressText.innerText = 'Completed!';
//         } else {
//             progressValue += 10;  // Increase the progress value
//             progressBar.value = progressValue;
//             progressText.innerText = progressValue + '% completed';
//         }
//     }, 1000);  // Update every 1 second
// }
console.log("end aa.js")