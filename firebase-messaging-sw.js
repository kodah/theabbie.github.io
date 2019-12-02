importScripts("https://www.gstatic.com/firebasejs/7.5.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.5.0/firebase-messaging.js");

var firebaseConfig = {
    apiKey: "AIzaSyBECQksrlWkWOTP4jriMmA9thfcKgbHyuE",
    authDomain: "codrcrew.firebaseapp.com",
    databaseURL: "https://codrcrew.firebaseio.com",
    projectId: "codrcrew",
    storageBucket: "codrcrew.appspot.com",
    messagingSenderId: "517463115484",
    appId: "1:517463115484:web:93ce55f61c78b015371619",
    measurementId: "G-Z9TTWE5FSJ"
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };
  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});
