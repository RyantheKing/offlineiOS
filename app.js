// if (!navigator.serviceWorker.controller) {
//     navigator.serviceWorker.register("/offlineiOS/sw.js").then(function(reg) {
//         console.log("Service worker has been registered for the scope: " + reg.scope);
//     });
// }

const test = document.getElementById('status');
const output = document.getElementById('output');
if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude, accuracy } = position.coords;
        test.textContent = 'Location found:';
        output.textContent = 
            `Latitude:  ${latitude}\n` +
            `Longitude: ${longitude}\n` +
            `Accuracy:  ±${accuracy} meters`;
    },
    err => {
        test.textContent = `Error (${err.code}): ${err.message}`;
    },
    {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 10000
    });
} else {
    test.textContent = 'Geolocation is not supported by your device.';
}

if (navigator.online) {
    fetch("north-america.pool.ntp.org")
        .then(response => response.json())
        .then(data => {
            if (navigator.onLine) {
                time.textContent = `Current time: ${data.datetime}`;
            } else {
                time.textContent = `Last known time: ${data.datetime}`;
            }
        })
}