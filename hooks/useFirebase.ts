import { GoogleAuthProvider, signInWithRedirect, getAuth } from "firebase/auth";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { useRouter } from "next/router";

import { createFirebaseApp } from "@/lib/firebaseConfig";

export default function useFirebase() {
  const router = useRouter();

  function initFB() {
    const app = createFirebaseApp();
    return app;
  }
  function getAuthdetails() {
    const app = initFB();
    const auth = getAuth(app);
    const user = auth.currentUser;
    const currentUser: any = {};
    if (user !== null) {
      currentUser.displayName = user.displayName;
      currentUser.email = user.email;
      currentUser.photoURL = user.photoURL;
      currentUser.emailVerified = user.emailVerified;
      currentUser.uid = user.uid;
    }
    return currentUser;
  }

  function initializeDB() {
    const app = initFB();
    const db = getDatabase(app);
    return db;
  }

  function writeData(data: any, dbNode: string) {
    const db = initializeDB();
    return set(ref(db, dbNode), data);
  }

  function readData(dbNode: string) {
    const db = initializeDB();
    const dataRef = ref(db, dbNode);
    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      return data;
    });
  }

  function googleProvider() {
    const app = initFB();
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    return signInWithRedirect(auth, provider).then((result:any) => {
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const token = credential?.accessToken
      const user = result.user
      console.log("result", result);
      return router.back();
    });
  }

  return { getAuthdetails, initFB, writeData, readData, googleProvider };
}
