import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export default function App() {
  return (
    <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
        <nav>
          <Link to="./components/ProfilePage.tsx">Go to Profile</Link>
        </nav>
      </SignedIn>
    </header>
  );
}