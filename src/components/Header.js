import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const dispatch=useDispatch()
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in/Signed up, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        //   const uid = user.uid;
        const { uid, email, displayName,photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName,photoURL:photoURL }));
        navigate("/browse")
      } else {
        // User is signed out
       dispatch(removeUser())
       navigate("/")
      }
    });
    //unsubscribe - when component unmounts
    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        // src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        src={LOGO}
        alt="Logo"
      />
      {user && (
        <div className="flex p-3">
          <img className="w-12 h-12" src={user.photoURL} alt="UserIcon" />
          <button onClick={handleSignOut} className="font-bold text-white">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
