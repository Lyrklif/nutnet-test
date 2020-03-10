// This is the service worker with the Advanced caching

// Add this below content to your HTML page, or add the js file to your page at the very top to register service worker
let swRegistration;
let isSubscribed = false;

// Check compatibility for the browser we're running this in
if ("serviceWorker" in navigator) {
  if (navigator.serviceWorker.controller) {
    console.log("[PWA Builder] active service worker found, no need to register");
  } else {
    // Register the service worker
    navigator.serviceWorker
      .register("pwabuilder-sw.js", {
        scope: "./"
      })
      .then(function (reg) {
        console.log("[PWA Builder] Service worker has been registered for scope: " + reg.scope);
        swRegistration = reg;
        initializeUI();
      });
  }
}

function initializeUI() {
  // Set the initial subscription value
  swRegistration.pushManager.getSubscription()
    .then(function(subscription) {
      isSubscribed = !(subscription === null);

      if (isSubscribed) {
        console.log('User IS subscribed.');
      } else {
        console.log('User is NOT subscribed.');
        subscribeUser();
      }

    });
}


function subscribeUser() {
  // TODO PUBLIC_KEY
  const applicationServerKey = 'BJ_308ngfLy-m8CvpI2y1gCO942m1nFr28I_NUazNU47eTy-nu69N3sIch8V-4DyM230gjMZ8H2qodJ8PA1EhMU';
  swRegistration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: applicationServerKey
  })
    .then(function(subscription) {
      console.log('User is subscribed.');

      updateSubscriptionOnServer(subscription);

      isSubscribed = true;

    })
    .catch(function(err) {
      console.log('Failed to subscribe the user: ', err);
    });
}

function updateSubscriptionOnServer(subscription) {
  // TODO: Send subscription to application server

  const subscriptionJson = document.querySelector('.js-subscription-json');
  const subscriptionDetails = document.querySelector('.js-subscription-details');

  if (subscription) {
    subscriptionJson.textContent = JSON.stringify(subscription);
    subscriptionDetails.classList.remove('is-invisible');
  } else {
    subscriptionDetails.classList.add('is-invisible');
  }
}
