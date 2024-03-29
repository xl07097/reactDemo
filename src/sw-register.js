if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(function (reg) {
      reg.onupdatefound = function () {
        var installingWorker = reg.installing
        installingWorker.onstatechange = function () {
          switch (installingWorker.state) {
            case 'installed':
              if (navigator.serviceWorker.controller) {
                var event = new Event('sw.update', {
                  bubbles: true,
                  cancelable: true,
                })
                document.dispatchEvent(event)
              }
              break
          }
        }
      }
    })
    .catch(function (e) {
      console.error('Error during service worker registration:', e)
    })
}
