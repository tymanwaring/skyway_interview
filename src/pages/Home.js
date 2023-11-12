import HomeButton from "../components/HomeButton";

// Mock home page for testing
export default function Home() {
  return (
    <div className="bg-gray-900 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className = "space-y-4 md:space-y-6">
                <HomeButton text = "customer login" link="/login"></HomeButton>
                <HomeButton text = "admin login" link="/admin"></HomeButton>
                <a href = "https://www.thebakersbog.com" rel="noreferrer" target="_blank" ><button type="submit" className="w-full m-2 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Tyler Web Example</button></a>
            </div>
    </div>
    </div>
  );
}
