import * as firebase from 'firebase'

const prodConfig = {
    apiKey: "AIzaSyCd7LfctVY3UuT1v_twdvvENhl0e0C4OxQ",
    authDomain: "martinapp-af485.firebaseapp.com",
    databaseURL: "https://martinapp-af485.firebaseio.com",
    projectId: "martinapp-af485",
    storageBucket: "martinapp-af485.appspot.com",
    messagingSenderId: "350740932380"
  };

  const devConfig = {
    apiKey: "AIzaSyChJNUB-faFkWBIS_kfRNN8ECUIXNzflLw",
    authDomain: "fire-auth-415e22.firebaseapp.com",
    databaseURL: "https://fire-auth-415e22.firebaseio.com",
    projectID: "fire-auth-415e22",
    storageBucket: "fire-auth-415e22.appspot.com",
    messagingSenderId: "225683135643"
};
const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  const auth = firebase.auth();

  export {
    auth,
  };
