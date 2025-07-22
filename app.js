// if (!navigator.serviceWorker.controller) {
//     navigator.serviceWorker.register("/offlineiOS/sw.js").then(function(reg) {
//         console.log("Service worker has been registered for the scope: " + reg.scope);
//     });
// }

const test = document.getElementById('status');
const output = document.getElementById('output');
const time = document.getElementById('test');
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

if (navigator.onLine) {
    fetch("https://worldtimeapi.org/api/ip")
        .then(response => response.json())
        .then(data => {
            console.log(data.datetime);
            time.textContent = `Current time: ${data.datetime}`;
        })
} else {
    time.textContent = "Not online";
}