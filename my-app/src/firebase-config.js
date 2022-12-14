import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"



const firebaseConfig = {
    apiKey: "AIzaSyBpsmRuCDJbp1qUA0AWJMNUIsKkJFeB2nA",
    authDomain: "tripoto-clone-authentication.firebaseapp.com",
    projectId: "tripoto-clone-authentication",
    storageBucket: "tripoto-clone-authentication.appspot.com",
    messagingSenderId: "206673037211",
    appId: "1:206673037211:web:da494b1f5ab925b6b9033e"
  };

  const app = initializeApp(firebaseConfig);

  export const auth=getAuth(app)