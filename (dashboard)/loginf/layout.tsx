"use client"; 
import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation'; // Import useRouter

export default function FacultyLoginLayout({ children }: { children: React.ReactNode }): JSX.Element {
  const router = useRouter(); // Initialize the router

  const handleSignIn = () => {
    router.push('/faculty'); // Redirect to the faculty page
  };
  
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Faculty Login Page</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          rel="stylesheet"
        />
      </Head>

      <div className="bg-white flex items-start justify-end min-h-screen">
        <div className="bg-white w-full max-w-4xl shadow-lg">
          <div className="w-full p-8">
            <div className="flex justify-center mb-4">
              <img
                alt="Saint Joseph School of Fairview Inc. logo"
                className="w-24 h-24"
                src="/sjsfilogo.png"
              />
            </div>
        
            <h1 className="text-center text-2xl font-bold text-red-700 mb-2">
              SAINT JOSEPH SCHOOL OF FAIRVIEW INC.
            </h1>

            <div className="flex items-center justify-center mb-4">
              <button
                onClick={() => window.history.back()} // Go back to the previous page
                className="text-red-700 hover:text-red-800 mr-4"
                aria-label="Go Back"
              >
                <i className="fas fa-arrow-left text-xl"></i>
              </button>
              <h2 className="text-center text-xl font-bold text-black">Faculty Login</h2>
            </div>
            <p className="text-center text-black mb-6">Sign in to your account.</p>


      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="email">
            Email *
          </label>
          <input
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
            id="email"
            name="email"
            placeholder="Email"
            type="email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="password">
            Password *
          </label>
          <div className="relative mt-1">
            <input
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
              id="password"
              name="password"
              placeholder="Password"
              type="password"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <i className="fas fa-eye text-gray-500"></i>
            </div>
          </div>
        </div>

        <div className="mb-4 text-right">
          <a className="text-red-700 font-semibold" href="#">
            Forgot Password? Click Here
          </a>
        </div>

        <div>
          <button
            className="w-full bg-red-700 text-white py-2 rounded-md font-semibold hover:bg-red-800"
            type="button" 
            onClick={handleSignIn} // Call the handleSignIn function on click
          >
            Sign In
          </button>
        </div>
      </form>

      <p className="mt-6 text-center text-xs text-gray-500">
        By using this service, you understood and agree to the SJSFI Online Services{' '}
        <a className="text-blue-500 underline" href="#">
          Terms of Use
        </a>{' '}
        and{' '}
        <a className="text-blue-500 underline" href="#">
          Privacy Statement
        </a>
        .
      </p>
            {/* {children} */}
          </div>
        </div>
      </div>
    </>
  );
}