import { useState } from 'react';

function AddProduct() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <>
            <div>


                <button
                    onClick={toggleModal}
                    className="block text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-900 border-white ml-auto mr-11"
                    type="button"
                >
                    Add Product
                </button>
                {isModalOpen && (
                    <div
                        id="authentication-modal"
                        tabIndex={-1}
                        aria-hidden="true"
                        className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full overflow-y-auto overflow-x-hidden bg-gray-900 bg-opacity-50"
                    >
                        <div className="relative p-4 w-full max-w-md">
                         
                            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                              
                                <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                        Add Products
                                    </h3>
                                    <button
                                        type="button"
                                        onClick={toggleModal}
                                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                        </svg>
                                        <span className="sr-only">Close modal</span>
                                    </button>
                                </div>
                               
                                <div className="p-4">
                                    <form className="space-y-4">
                                        <div>
                                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">title</label>
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                                placeholder="name@company.com"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">contents</label>
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                                placeholder="name@company.com"
                                                required
                                            />
                                        </div>

                                        <div>

                                            <div>
                                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload file</label>
                                                <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" />
                                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                                            </div>


                                        </div>

                                        <button
                                            type="submit"
                                            className="inline-flex justify-center hover:text-gray-900 items-center py-2 px-4 sm:ms-2 text-sm font-medium text-center text-white rounded-lg inline-flex justify-center hover:text-gray-900 items-center py-2 px-4 sm:ms-2 text-sm font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400 hover:bg-gray-100 focus:ring-4 focus:ring-gray-400  "
                                        >
                                            Save
                                        </button>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default AddProduct;
