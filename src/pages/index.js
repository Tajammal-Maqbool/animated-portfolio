import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <nav className='absolute h-16 w-full flex items-center justify-between z-50 px-10'>
        <div>
          <h1 className='text-xl font-bold'>
            Zarror
          </h1>
        </div>
        <div className='flex items-center justify-center gap-4'>
          <Link href='/'>
            Home
          </Link>
          <Link href='#about'>
            About
          </Link>
          <Link href='#services'>
            Services
          </Link>
        </div>
        <div>
          <button className='bg-[#676CDB] text-white px-4 py-2 rounded-sm'>
            Contant Us
          </button>
        </div>
      </nav>

      <main className='overflow-hidden'>
        <div data-aos="fade-up" className='grid grid-cols-1 md:grid-cols-2'>
          <div className='px-6 flex flex-col gap-1 items-start justify-center'>
            <h1 className='text-4xl font-bold'>Hello</h1>
            <h1 className='text-4xl font-bold'>I&apos;m Zarror</h1>
            <p className='text-sm max-w-[500px]'>
              I&apos;am freelance web developer based in Indonesia who loves to craft attractive design experiences for the web.
            </p>
            <div className='mt-4 flex'>
              <button data-aos="fade-left" data-aos-delay={300} className='text-sm bg-[#676CDB] text-white px-4 py-2 rounded-sm flex items-center justify-center gap-1'>
                <Image className='w-5 h-5' src='/assets/mail.png' alt='main' width={32} height={32} />
                Email me
              </button>
              <button data-aos="fade-left" data-aos-delay={600} className='text-sm bg-transparent text-white px-4 py-2 flex items-center justify-center gap-1'>
                <Image className='w-5 h-5' src='/assets/download.png' alt='main' width={32} height={32} />
                Download CSV
              </button>
            </div>

          </div>
          <div>
            <Image data-aos="zoom-in" data-aos-delay={300} className='w-full h-full' src='/assets/hero.png' alt='hero' width={1000} height={1000} />
          </div>
        </div>

        <div className='grid grid-cols-5 h-20 bg-black w-full'>
          <button data-aos="fade-left" data-aos-delay={200} className='flex items-center justify-center'>
            <Image className='w-16 h-16' src='/assets/figma.svg' alt='figma' width={128} height={128} />
          </button>
          <button data-aos="fade-left" data-aos-delay={300} className='flex items-center justify-center'>
            <Image className='w-16 h-16' src='/assets/html.svg' alt='html' width={128} height={128} />
          </button>
          <button data-aos="fade-left" data-aos-delay={400} className='flex items-center justify-center'>
            <Image className='w-16 h-16' src='/assets/react.svg' alt='react' width={128} height={128} />
          </button>
          <button data-aos="fade-left" data-aos-delay={500} className='flex items-center justify-center'>
            <Image className='w-16 h-16' src='/assets/sass.svg' alt='sass' width={128} height={128} />
          </button>
          <button data-aos="fade-left" data-aos-delay={600}className='flex items-center justify-center'>
            <Image className='w-16 h-16' src='/assets/css.svg' alt='css' width={128} height={128} />
          </button>
        </div>

        <div data-aos="fade-left" className='bg-[#222A36] w-full flex items-center justify-around px-10 py-32'>
          <div className='flex flex-col gap-3 px-4'>
            <h1 className='text-6xl font-bold text-[#676CDB]'>4+</h1>
            <h1 className='text-4xl font-bold text-white'>Years</h1>
            <h1 className='text-4xl font-bold text-white'>Experience</h1>
            <h1 className='text-4xl font-bold text-white'>Working</h1>
          </div>
          <div className='flex flex-col items-center'>
            <div>
              <h1 className='text-3xl font-bold text-center'>
                Developer and Designer, specialized in UI/UX
                <br></br>
                and Web Developer
              </h1>
            </div>
            <div className='h-[300px] grid grid-cols-3 gap-2 mt-2'>
              <div data-aos="fade-left" data-aos-delay={100} className='w-[200px] h-full p-1 flex items-end justify-center bg-[#676CDB]'>
                <h1 className='text-xl font-bold text-center'>
                  Website Designer
                </h1>
              </div>
              <div data-aos="fade-left" data-aos-delay={200} className='w-full h-full p-1 flex items-end justify-center bg-[#C4C4C4]'>
                <h1 className='text-xl font-bold text-center text-[#676CDB]'>
                  UI/UX Designer
                </h1>
              </div>
              <div data-aos="fade-left" data-aos-delay={300} className='w-full h-full p-1 flex items-end justify-center bg-[#C4C4C4]'>
                <h1 className='text-xl font-bold text-center text-[#676CDB]'>
                  Web Developer
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-black w-full h-full min-h-[500px] grid grid-cols-2 pt-10'>
          <div className='p-12'>
            <h1 className='text-4xl font-bold text-white px-10 underline'>
              Contact Me
            </h1>
            <div className='px-10 mt-10'>
              <h1 className='text-2xl font-bold text-white'>
                Let&apos;s work together
              </h1>
              <p className='text-sm text-white'>
                Have a project you&apos;d like to discuss? I&apos;d love to hear from you.
              </p>
              {/* email */}
              <div className='mt-10'>
                <h1 className='text-xl font-bold text-white'>
                  Email
                </h1>
                <p className='text-sm text-white'>
                  zarror@gamil.com
                </p>
              </div>
              <div className='mt-2'>
                <h1 className='text-xl font-bold text-white'>
                  Phone
                </h1>
                <p className='text-sm text-white'>
                  +62 812 3456 7890
                </p>
              </div>
              <div className='mt-2'>
                <h1 className='text-xl font-bold text-white'>
                  Location
                </h1>
                <p className='text-sm text-white'>
                  Indonesia
                </p>
              </div>
              {/* social icons */}
              <div className='flex items-center justify-start gap-4 mt-4'>
                <button data-aos="fade-left" data-aos-delay={100} className='flex items-center justify-center bg-[#676CDB] w-10 h-10 rounded-full'>
                  <Image className='w-5 h-5' src='/assets/dribble.png' alt='dribble' width={32} height={32} />
                </button>
                <button data-aos="fade-left" data-aos-delay={200} className='flex items-center justify-center bg-[#676CDB] w-10 h-10 rounded-full'>
                  <Image className='w-5 h-5' src='/assets/linkedin.png' alt='linkedin' width={32} height={32} />
                </button>
                <button data-aos="fade-left" data-aos-delay={300} className='flex items-center justify-center bg-[#676CDB] w-10 h-10 rounded-full'>
                  <Image className='w-5 h-5' src='/assets/upwork2.png' alt='upwork' width={32} height={32} />
                </button>
                <button data-aos="fade-left" data-aos-delay={400} className='flex items-center justify-center bg-[#676CDB] w-10 h-10 rounded-full'>
                  <Image className='w-5 h-5' src='/assets/youtube.png' alt='youtube' width={32} height={32} />
                </button>
                <button data-aos="fade-left" data-aos-delay={500} className='flex items-center justify-center bg-[#676CDB] w-10 h-10 rounded-full'>
                  <Image className='w-5 h-5' src='/assets/github.png' alt='github' width={32} height={32} />
                </button>
              </div>
            </div>
          </div>
          <div>
            <form>
              <div className="p-12">
                <h2 className="text-3xl font-semibold leading-7">👋 Get in touch</h2>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label htmlFor="first-name" className="block text-sm font-medium leading-6">
                      First name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 text-black p-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="last-name" className="block text-sm font-medium leading-6">
                      Last name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 text-black p-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label htmlFor="email" className="block text-sm font-medium leading-6">
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block text-black w-full rounded-md border-0 p-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="col-span-6">
                    <label htmlFor="city" className="block text-sm font-medium leading-6">
                      Message
                    </label>
                    <div className="mt-2">
                      <textarea
                        type="text"
                        name="message"
                        id="message"
                        autoComplete="address-level2"
                        className="block text-black w-full rounded-md border-0 p-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <button
                    type="submit"
                    className="rounded-md w-[200px] bg-[#676CDB] mx-auto px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  )
}
