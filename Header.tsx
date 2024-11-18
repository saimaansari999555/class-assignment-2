
import Link from "next/link";




// pages/index.js

export default function Home() {
  return (
    <div className="bg-gray-900 min-h-screen text-white font-sans">
      {/* Navbar */}
      <header className="flex justify-between items-center py-6 px-10">
        <h1 className="text-2xl font-bold">BrandName</h1>
        <nav className="space-x-8 text-sm">
         <Link rel="stylesheet" href=""  className="hover:text-gray-400">Home</Link>
         <Link rel="stylesheet" href=""  className="hover:text-gray-400">Product</Link>
         <Link rel="stylesheet" href=""  className="hover:text-gray-400">Pricing</Link>
         <Link rel="stylesheet" href=""   className="hover:text-gray-400">Contact</Link>
        </nav>
        <div>
          <a href="#" className="mr-4 hover:text-gray-400">Login</a>
          <button className="bg-blue-600 px-4 py-2 rounded text-white hover:bg-blue-500">
            JOIN US
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h2 className="text-blue-400 text-sm">Welcome</h2>
        <h1 className="text-5xl font-bold mt-4">Selling on the internet like a pro</h1>
        <p className="text-gray-400 mt-6 text-lg">
          We know how large objects will act, but things on a small scale just do not act that way.
        </p>
        <div className="mt-8 space-x-4">
          <button className="bg-blue-600 px-6 py-2 rounded text-white hover:bg-blue-500">
            Get Quote Now
          </button>
          <button className="border border-blue-600 px-6 py-2 rounded text-blue-600 hover:bg-blue-600 hover:text-white">
            Learn More
          </button>
        </div>
      </section>

      {/* Courses Section */}
      <section className="px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-gray-800">
            <div className="bg-pink-200 h-16 w-16 mb-4 rounded"></div>
            <h3 className="text-xl font-semibold">Training Courses</h3>
            <p className="text-gray-600 mt-2">
              The gradual accumulation of information about atomic and small-scale behaviour...
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-gray-800">
            <div className="bg-green-200 h-16 w-16 mb-4 rounded"></div>
            <h3 className="text-xl font-semibold">2,769 Online Courses</h3>
            <p className="text-gray-600 mt-2">
              The gradual accumulation of information about atomic and small-scale behaviour...
            </p>
          </div>
          <div className="bg-blue-200 p-6 rounded-lg shadow-md text-gray-800">
            <div className="bg-blue-400 h-16 w-16 mb-4 rounded"></div>
            <h3 className="text-xl font-semibold">Training Courses</h3>
            <p className="text-gray-600 mt-2">
              The gradual accumulation of information about atomic and small-scale behaviour...
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
