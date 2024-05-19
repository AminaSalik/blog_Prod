import backgroundImage from '../assets/blog.webp';
import Navbar from './Navbar'
import Post from './Post'
import Filter from './Filter'
import Cards from './Card'
import Footer from './Foot'


function Home() {
  return (
    <>
      <Navbar />

      <section className="bg-center bg-no-repeat bg-cover bg-gray-700 bg-blend-multiply"
        style={{ backgroundImage: `url(${backgroundImage})` }} // Set background image dynamically
      >

        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl"> Blog</h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Stay up-to date with all the latostdevelopments on our from Radom's dynamic world of Web3..</p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-2 px-3 sm:px-4 sm:ms-2 text-sm sm:text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400 mr-3">
              Learn more
            </a>
          </div>
        </div>
      </section>

      <Post />
      <Filter />
      <Cards />
      <Footer />

    </>
  )
}

export default Home
