if (!navigator.serviceWorker.controller) {
    navigator.serviceWorker.register("/sw.js").then(function(reg) {
        console.log("Service worker has been registered for the scope: " + reg.scope);
    });
}

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
    }, {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 10000
    });
} else {
    test.textContent = 'Geolocation is not supported by your device.';
}