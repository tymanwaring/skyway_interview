import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';

export default function Customers(props) {

    // Setting state for clients
    const [clients, setClients] = useState([])

    // Getting customers from mock database
    let url = "http://localhost:8000/customers"
    const getData = () => {
        var requestOptions = {
          method: "GET",
          redirect: "follow",
        };
    
        fetch(url, requestOptions)
          .then((response) => response.json())
          .then((result) => setClients(result))
          .catch((error) => console.log("error", error));
          
      };
    
      //get data on componant mount
      useEffect(() => {
        getData()
      }, []);



    return (
        <div className="flex bg-gray-100 min-h-screen bg-gray-800">
            
            <aside className="hidden sm:flex sm:flex-col">
                <Link to="/" className="inline-flex items-center justify-center h-20 w-20 bg-purple-600 hover:bg-purple-500 focus:bg-purple-500">
                    <svg fill="none" viewBox="0 0 64 64" className="h-12 w-12">
                        <title>Company logo</title>
                        <path d="M32 14.2c-8 0-12.9 4-14.9 11.9 3-4 6.4-5.6 10.4-4.5 2.3.6 4 2.3 5.7 4 2.9 3 6.3 6.4 13.7 6.4 7.9 0 12.9-4 14.8-11.9-3 4-6.4 5.5-10.3 4.4-2.3-.5-4-2.2-5.7-4-3-3-6.3-6.3-13.7-6.3zM17.1 32C9.2 32 4.2 36 2.3 43.9c3-4 6.4-5.5 10.3-4.4 2.3.5 4 2.2 5.7 4 3 3 6.3 6.3 13.7 6.3 8 0 12.9-4 14.9-11.9-3 4-6.4 5.6-10.4 4.5-2.3-.6-4-2.3-5.7-4-2.9-3-6.3-6.4-13.7-6.4z" fill="#fff" />
                    </svg>
                </Link>
                <div className="flex-grow flex flex-col justify-between text-gray-500 bg-gray-800">
                    <nav className="flex flex-col mx-4 my-6 space-y-4">
                        <a className="inline-flex items-center justify-center py-3 text-purple-600 bg-white rounded-lg">
                            <span className="sr-only">Admin Dashboard</span>
                            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        </a>
                    </nav>
                    <div className="inline-flex items-center justify-center h-20 w-20 border-t border-gray-700">
                        <button className="p-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
                            <span className="sr-only">Settings</span>
                            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </aside>
            <div className="flex-grow text-gray-800">
                <header className="flex items-center h-20 px-6 sm:px-10 bg-gray-900">
                    <button className="block sm:hidden relative flex-shrink-0 p-2 mr-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800 focus:bg-gray-100 focus:text-gray-800 rounded-full">
                        <span className="sr-only">Menu</span>
                        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                    </button>
                </header>
                <main className="p-6 sm:p-10 space-y-6 bg-gray-800">
                    <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
                        <div className="mr-6">
                            <h1 className="text-4xl font-semibold mb-2 text-white">Admin Dashboard</h1>
                        </div>
                    </div>
                    <section className="grid md:grid-cols-2 xl:grid-cols-2 gap-6">
                        <div className="flex items-center p-8 bg-white shadow rounded-lg">
                        <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6">
                                <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <div>
                                <span className="block text-2xl font-bold">{clients.length}</span>
                                <span className="block text-gray-500">Customers</span>
                            </div>

                        </div>
                        <div className="flex items-center p-8 bg-white shadow rounded-lg">
                            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
                                <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                            </div>
                            <div>
                                <span className="block text-2xl font-bold"></span>
                                <span className="block text-gray-500">Room for other mock data if needed</span>
                            </div>
                        </div>
                    </section>
                    <section className="grid md:grid-cols-2 xl:grid-cols-2 xl:grid-rows-3 xl:grid-flow-col gap-6">
                    <div className="row-span-3 bg-white shadow rounded-lg">
                            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                                <table class="w-full text-l text-center rtl:text-right text-black dark:text-black">
                                    <thead class="text-l text-black uppercase bg-gray-50 dark:bg-gray-50 dark:text-gray-700">
                                        <tr>
                                            {/* Tell about this */}
                                            <th scope="col" class="px-6 py-3">
                                                Customer Name
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Number of Fleets
                                            </th>
                                            <th scope="col" class="px-6 py-3">
                                                Number of Drones
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        
                                        {clients.map((customer) =>
                                            <tr key={customer.id} class="text-l text-black bg-white border-b dark:bg-white hover:bg-gray-50 dark:hover:bg-gray-100">
                                                <td className="px-6 py-4">{customer.name}</td>
                                                <td className="px-6 py-4">{customer.fleets}</td>
                                                <td className="px-6 py-4">{customer.drones}</td>
                                            </tr>)}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>

    )

}