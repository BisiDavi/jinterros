import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

import useFirebase from "@/hooks/useFirebase";

type dataType = {
  email: string;
  firstName: string;
  lastName: string;
  newsletter: string;
  policy: string;
};

export default function useAuth() {
  const { initFB, writeData } = useFirebase();
  const app = initFB();

  async function authSignup(data: dataType, password: string) {
    const { email, firstName, lastName } = data;
    console.log("data", data);
    const auth: any = getAuth(app);
    try {
      await createUserWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          console.log(
            "userCredential-createUserWithEmailAndPassword",
            userCredential
          );
          const user = userCredential.user;
          const saveData = {
            user: user.providerData[0],
            name: `${firstName} ${lastName}`,
            policy: data.policy,
            newsletter: data.newsletter,
          };
          writeData(JSON.stringify(saveData), `/users/${user.uid}/`);
        }
      );
      return await updateProfile(auth.currentUser, {
        displayName: `${firstName} ${lastName}`,
      });
    } catch (err) {
      console.log(err);
    }
  }

  function authSignIn(email: string, password: string) {
    const auth = getAuth(app);
    return signInWithEmailAndPassword(auth, email, password);
  }

  function authSignOut() {
    const auth = getAuth(app);
    return signOut(auth);
  }

  function authDetails() {
    const auth = getAuth(app);
    return auth?.currentUser;
  }

  return { authSignup, authSignIn, authSignOut, authDetails };
}
