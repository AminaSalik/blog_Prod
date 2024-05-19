
import imagCam1 from '../assets/panasonic-lumix-gh5-camera_4x3.avif';

function Post() {
    return (
        <>
            <section>
                <div className="flex flex-col items-center py-9">
                    <h1 className="text-5xl font-bold ">
                        Featured Posts
                    </h1>

                </div>

                <div className="flex flex-wrap justify-center space-x-0 md:space-x-4 p-4">
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4">
                        <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src={imagCam1} alt="Nature Image 1" />
                            </a>
                            <div className="p-3">
                                <a href="#">
                                    <h5 className="mb-2 text-lg lg:text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        Noteworthy technology acquisitions 2021
                                    </h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit modi optio nulla ipsa ea asperiores soluta, delectus ex iste officiis quidem, earum qui aspernatur quisquam. Corrupti provident perferendis nostrum obcaecati.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4">
                        <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src={imagCam1} alt="Nature Image 2" />
                            </a>
                            <div className="p-3">
                                <a href="#">
                                    <h5 className="mb-2 text-lg lg:text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        Noteworthy technology acquisitions 2021
                                    </h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aut illum cumque fugit exercitationem libero unde eligendi voluptate quod sequi, sunt itaque tempora quis ad commodi voluptatem iure, omnis laborum?.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4">
                        <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="rounded-t-lg" src={imagCam1} alt="Nature Image 3" />
                            </a>
                            <div className="p-3">
                                <a href="#">
                                    <h5 className="mb-2 text-lg lg:text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        Noteworthy technology acquisitions 2021
                                    </h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aut illum cumque fugit exercitationem libero unde eligendi voluptate quod sequi, sunt itaque tempora quis ad commodi voluptatem iure, omnis laborum?
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Post
