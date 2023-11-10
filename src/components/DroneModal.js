import React from "react";

export default function DroneModal(props) {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <>
            <li className="flex items-center cursor-pointer" onClick={() => setShowModal(true)}>
                <span className="text-gray-600">{props.id}</span>
                <span className="ml-auto font-semibold">{props.name}</span>
                <span className="ml-auto font-semibold">{props.totalDrones}</span>
            </li>
            {showModal ? (
                <div className="bg-gray-900 dark:bg-gray-900">
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="relative p-6 flex-auto">
                                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                        <div className="row-span-3 bg-white shadow rounded-lg">
                                            <div className="flex items-center px-6 py-5 font-semibold border-b border-gray-100">
                                                <span className="mr-6">Drone ID</span>
                                                <span className="ml-6">Drone Name</span>
                                            </div>
                                            <div className="overflow-y-auto">
                                                <ul className="p-6 space-y-6">
                                                {props.drones.map((drone) => 
                                                    <li className="flex items-center">
                                                        <span className="text-gray-600">{drone.id}</span>
                                                        <span className="ml-auto font-semibold">{drone.name}</span>
                                                    </li>
                                                )}
                                                </ul>
                                            </div>
                                        </div>
                                        <button
                                            className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Add Drone
                                        </button>
                                        <button
                                            className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Done
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black flex-1"></div>
                </div>
            ) : null}
        </>
    );
}