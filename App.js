import { useEffect, useState } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

import NavigationSignedIn from './components/NavigationSignedIn';
import NavigationNotSign from './components/NavigationNotSign';

export default function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Listening ig the user is logged in or out
    // Always add auth (or the tool you are using)
    const unsubscribe = onAuthStateChanged(auth, (user) => {

      if (user) {
        setLoggedIn(true);
        console.log("There is a user logged in: " + user.email)
      } else {
        setLoggedIn(false);
        console.log("No user logged in.")
      }

    })
    return unsubscribe

  }, [])

  return (
    <>
      {loggedIn ? (
        <NavigationSignedIn />

      ) : (
        <NavigationNotSign />
      )}
    </>
  );
}

