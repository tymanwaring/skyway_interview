import React from 'react';

export default function DroneModal(props, { handler }) {
    const [showModal, setShowModal] = React.useState(false);

    const url = `http://localhost:8000/fleets/${props.id}`

    const addDrone = () => {
        let drone = {
            "id": props.drones.length + 1,
            "name": `drone${props.drones.length + 1}`
        }
        props.drones.push(drone)

        fetch(url, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                'drones': props.drones
            })
        }).then(response => response.json())
    }

    const deleteData = () => {
        fetch(`http://localHost:8000/fleets/${props.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
    }

    return (
        <>
            <tr className="text-l text-black bg-white border-b dark:bg-white hover:bg-gray-50 dark:hover:bg-gray-100 cursor-pointer" onClick={() => setShowModal(true)}>
                <td className="px-6 py-4">{props.id}</td>
                <td className="px-6 py-4">{props.name}</td>
                <td className="px-6 py-4">{props.totalDrones} Drones</td>
            </tr>
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
                                            <table class="w-full text-l text-center rtl:text-right text-black dark:text-black">
                                                <thead class="text-l text-black uppercase bg-gray-50 dark:bg-gray-50 dark:text-gray-700">
                                                    <tr>
                                                        <th scope="col" class="px-6 py-3">
                                                            Drone ID
                                                        </th>
                                                        <th scope="col" class="px-6 py-3">
                                                            Drone Name
                                                        </th>

                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {props.drones.map((drone) =>
                                                        <tr key={drone.id} class="text-l text-black bg-white border-b dark:bg-white hover:bg-gray-50 dark:hover:bg-gray-100">
                                                            <td className="px-6 py-4">{drone.id}</td>
                                                            <td className="px-6 py-4">{drone.name}</td>
                                                        </tr>)}
                                                </tbody>
                                            </table>
                                        </div>
                                        <button
                                            className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                            type="button"
                                            onClick={function onClick() { addDrone(); setShowModal(false); props.handler(true) }}
                                        >
                                            Add Drone
                                        </button>
                                        <button
                                            className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                            type="button"
                                            onClick={function onClick() { deleteData(); setShowModal(false); props.handler(true) }}
                                        >
                                            Delete Fleet
                                        </button>
                                        <button
                                            className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Close
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