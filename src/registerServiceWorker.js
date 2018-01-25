/* istanbul ignore next */
// In production, we register a service worker to serve assets from local cache./* istanbul ignore next */

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on the "N+1" visit to a page, since previously
// cached resources are updated in the background.

// To learn more about the benefits of this model, read https://goo.gl/KwvDNy.
// This link also includes instructions on opting out of this behavior.
/* istanbul ignore next */
const isLocalhost = Boolean(/* istanbul ignore next */
  window.location.hostname === 'localhost' ||
  // [::1] is the IPv6 localhost address.
  window.location.hostname === '[::1]' ||
  // 127.0.0.1/8 is considered localhost for IPv4.
  window.location.hostname.match(
    /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/,
  ),
);

/* istanbul ignore next */
export default function register() {/* istanbul ignore next */
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {/* istanbul ignore next */
    // The URL constructor is available in all browsers that support SW.
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location);
    if (publicUrl.origin !== window.location.origin) {/* istanbul ignore next */
      // Our service worker won't work if PUBLIC_URL is on a different origin
      // from what our page is served on. This might happen if a CDN is used to
      // serve assets; see https://github.com/facebookincubator/create-react-app/issues/2374
      return;
    }
    /* istanbul ignore next */
    window.addEventListener('load', () => {/* istanbul ignore next */
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
      /* istanbul ignore next */
      if (isLocalhost) {/* istanbul ignore next */
        // This is running on localhost. Lets check if a service worker still exists or not.
        checkValidServiceWorker(swUrl);

        // Add some additional logging to localhost, pointing developers to the
        // service worker/PWA documentation.
        navigator.serviceWorker.ready.then(() => {/* istanbul ignore next */
          console.log(/* istanbul ignore next */
            'This web app is being served cache-first by a service ' +
            'worker. To learn more, visit https://goo.gl/SC7cgQ',
          );
        });
      } else {/* istanbul ignore next */
        // Is not local host. Just register service worker
        registerValidSW(swUrl);
      }
    });
  }
}
/* istanbul ignore next */
function registerValidSW(swUrl) {/* istanbul ignore next */
  navigator.serviceWorker/* istanbul ignore next */
    .register(swUrl)/* istanbul ignore next */
    .then(registration => {/* istanbul ignore next */
      registration.onupdatefound = () => {/* istanbul ignore next */
        const installingWorker = registration.installing;
        installingWorker.onstatechange = () => {/* istanbul ignore next */
          if (installingWorker.state === 'installed') {/* istanbul ignore next */
            if (navigator.serviceWorker.controller) {/* istanbul ignore next */
              // At this point, the old content will have been purged and
              // the fresh content will have been added to the cache.
              // It's the perfect time to display a "New content is
              // available; please refresh." message in your web app.
              console.log('New content is available; please refresh.');
            } else {/* istanbul ignore next */
              // At this point, everything has been precached.
              // It's the perfect time to display a
              // "Content is cached for offline use." message.
              console.log('Content is cached for offline use.');
            }
          }
        };
      };
    })/* istanbul ignore next */
    .catch(error => {/* istanbul ignore next */
      console.error('Error during service worker registration:', error);
    });
}
/* istanbul ignore next */
function checkValidServiceWorker(swUrl) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl)/* istanbul ignore next */
    .then(response => {/* istanbul ignore next */
      // Ensure service worker exists, and that we really are getting a JS file.
      if (
        response.status === 404 ||
        response.headers.get('content-type').indexOf('javascript') === -1
      ) {/* istanbul ignore next */
        // No service worker found. Probably a different app. Reload the page.
        navigator.serviceWorker.ready.then(registration => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {/* istanbul ignore next */
        // Service worker found. Proceed as normal.
        registerValidSW(swUrl);
      }
    })/* istanbul ignore next */
    .catch(() => {/* istanbul ignore next */
      console.log(
        'No internet connection found. App is running in offline mode.',
      );
    });
}
/* istanbul ignore next */
export function unregister() {/* istanbul ignore next */
  if ('serviceWorker' in navigator) {/* istanbul ignore next */
    navigator.serviceWorker.ready.then(registration => {/* istanbul ignore next */
      registration.unregister();
    });
  }
}
