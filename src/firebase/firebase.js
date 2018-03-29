import * as firebase from 'firebase';

const prodConfig = {
  apiKey: "AIzaSyChJNUB-faFkWBIS_kfRNN8ECUIXNzflLw",
  authDomain: "fire-auth-415e22.firebaseapp.com",
  databaseURL: "https://fire-auth-415e22.firebaseio.com",
  projectID: "fire-auth-415e22",
  storageBucket: "fire-auth-415e22.appspot.com",
  messagingSenderId: "225683135643"
};
const devConfig = {
  apiKey: "AIzaSyChJNUB-faFkWBIS_kfRNN8ECUIXNzflLw",
  authDomain: "fire-auth-415e22.firebaseapp.com",
  databaseURL: "https://fire-auth-415e22.firebaseio.com",
  projectID: "fire-auth-415e22",
  storageBucket: "fire-auth-415e22.appspot.com",
  messagingSenderId: "225683135643"
};

const config = proccess.env.Node_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.app.length){
  firebase.initializeApp(config);
}
const auth = firebase.auth();

export {
  auth,
};
