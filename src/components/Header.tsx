import { PROFILE_URL, PROFILE_EMAIL } from "../constants";

const Header = () => {
  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="/" className="flex items-center">
            <img
              src="/logo.jpeg"
              className="rounded-full mr-3 h-6 sm:h-9"
              alt="Assignment Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Arvind .A
            </span>
          </a>
          <div className="flex items-center lg:order-2">
            <a
              href={`mailto:${PROFILE_EMAIL}`}
              className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Contact
            </a>
            <a
              href={PROFILE_URL}
              target={"_blank"}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              rel="noreferrer"
            >
              Profile
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
