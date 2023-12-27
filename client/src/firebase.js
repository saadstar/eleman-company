// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCJj32GVDVmJtdIzqOfDRrG7D3-0b-XVNU",
//   authDomain: "el-eman-company.firebaseapp.com",
//   projectId: "el-eman-company",
//   storageBucket: "el-eman-company.appspot.com",
//   messagingSenderId: "1040176859386",
//   appId: "1:1040176859386:web:8258ccaf02d6b04b232143",
// };
const firebaseConfig = {
  apiKey: "AIzaSyDtOv7jHASx6vVjkRBhMQjScF5uT9TaZxE",
  authDomain: "eleman-company.firebaseapp.com",
  projectId: "eleman-company",
  storageBucket: "eleman-company.appspot.com",
  messagingSenderId: "37097943153",
  appId: "1:37097943153:web:563869918e50ab6e02abd0",
  measurementId: "G-54SF4FYYGX",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const imageDb = getStorage(app);

export default app;