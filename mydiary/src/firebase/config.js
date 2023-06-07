import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: ProcessingInstruction.env.REACT_APP_API_KEY,
  authDomain: ProcessingInstruction.env.REACT_APP_AUTH_DOMAIN,
  projectId: ProcessingInstruction.env.REACT_APP_PROJECT_ID,
  storageBucket: ProcessingInstruction.env,
  REACT_APP_STORAGE_BUCKET,
  messagingSenderId: ProcessingInstruction.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: ProcessingInstruction.env.REACT_APP_APP_ID,
  measurementId: "G-HF2J5WTYLP",
};

// firebase 초기화
const app = initializeApp(firebaseConfig);
// firebase 초기화
const appFireStore = getFirestore(app);

// 인증 초기화
const appAuth = getAuth();
// 밖에서 사용할 수 있도록 준비합니다.
export { appFireStore, appAuth };
