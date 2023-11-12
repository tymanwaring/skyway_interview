import React, { useState } from 'react';

export default function Modal({handler}) {
    // Setting Fleet modal state
    const [showModal, setShowModal] = useState(false);
    // Setting Fleet data state
    const [name, setName] = useState("")

    const url = "http://localhost:8000/fleets"
    const addFleet = () => {
        fetch(url, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               'id': Math.floor(Math.random() * (9999999 - 1000000 + 1)) + 10000,
               'name': name,
               'drones': []
            })
        }).then(response => response.json())
    }

    // Render fleet modal
    return (
        <>
            <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6 cursor-pointer" onClick={() => setShowModal(true)}>
                <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
            </div>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}

                            <div className="relative p-6 flex-auto">
                                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                            Add a new fleet
                                        </h1>
                                        <form className="space-y-4 md:space-y-6">
                                            <div>
                                                <label htmlFor="fleet_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fleet name</label>
                                                <input name="fleet_name" id="fleet_name" onChange={(e)=>{setName(e.target.value)}}  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="My new fleet!" required=""></input>
                                            </div>
                                            {/* Button on click hide modal, add fleet to fleets, and update the fleet dashboard */}
                                            <button
                                                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                                type="button"
                                                onClick={function myFunction() { setShowModal(false); addFleet(); handler(true)}}
                                            >
                                                Add Fleet
                                            </button>
                                            {/* Close button to close modal */}
                                            <button
                                            className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Close
                                        </button>
                                        </form>
                                    </div>



                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}