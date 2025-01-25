import { Link } from "react-router-dom";
import { FiLogOut, FiLogIn } from "react-icons/fi";
import { signOut } from "firebase/auth";
import toast from "react-hot-toast";

import useAuthContext from "../context/AuthContext";
import { auth } from "../firebase";
import DarkMode from "./UI/DarkMode";

export default function Header() {
  const { logout, loggedIn } = useAuthContext();

  async function handleLogout() {
    try {
      await signOut(auth);
      logout();
      toast.success("Logged out successfully!");
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Failed to log out!");
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="flex justify-between items-center px-4 lg:px-8 h-20 bg-white dark:bg-slate-800 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="Budget Buddy Logo" className="w-8 h-8" />
            <span className="hidden md:block font-semibold text-xl ml-2 text-gray-900 dark:text-white">
              Budget Buddy
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-1 text-sm md:text-base">
          <DarkMode />
          {loggedIn ? (
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-slate-700 rounded-lg font-medium transition-colors"
            >
              <FiLogOut className="text-gray-500 dark:text-gray-400 size-5" />
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-slate-700 rounded-lg font-medium transition-colors"
            >
              <FiLogIn className="text-gray-500 dark:text-gray-400 size-5" />
              Login
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
