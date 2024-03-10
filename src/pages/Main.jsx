import React from 'react'
import Footer from './Footer';
function Main() {
  return (
    <main className='container m-auto'>
      <div className=' mt-12 flex flex-col items-center justify-center m-auto min-h-40'>
        <h1 className='text-white text-7xl font-bold'>Own Your audience.</h1>
        <h1 className='flex text-red-400 text-7xl font-bold'>So you don't lose them.</h1>
      </div>
      <div className='w-96 mt-20 flex flex-col gap-8 items-center justify-center min-h-32 m-auto'>
        <div className='flex flex-col items-center justify-center'>
          <h2 className='text-2xl text-white'>Turn your audience into email and </h2>
          <h2 className='text-2xl text-white'>text message subscribers.</h2>
        </div>
        <div className='w-full flex gap-3 items-center justify-center'>
          <button className='w-full hover:bg-blue-600 transition rounded p-2 bg-blue-700 text-white'>Get Started Now</button>
          <button className='w-full hover:bg-gray-900 hover:text-white transition border p-2 text-gray-500 border-gray-500 rounded'>View A Demo</button>
        </div>
        <div className='flex items-center gap-2'>
          <img src="./src/assets/Dot.svg" alt="" />
          <h1 className='font-bold text-white'>1000+</h1>
          <p className='text-base text-gray-500'>creators have already started</p>
        </div>
      </div>
      <section className='flex flex-col  w-full items-center justify-center m-auto mt-28 '>
        <div className='w-full h-40 flex flex-col  pt-3'>
          <div className='flex justify-center'>
            <h1 className='text-5xl text-white'>Why Creators Love Marico</h1>
          </div>
          <div className='w-full flex items-center gap-10 mt-10 h-16'>
            <div className='w-full flex flex-col gap-1 justify-center items-center h-'>
              <div className='flex  gap-2 items-center justify-center'>
                <img className='w-8 h-8' src="./src/assets/Smile_emoji.svg" alt="" />
                <h1 className='text-2xl font-bold text-white'>Reduced Anxiety</h1>
              </div>
              <p className='text-base text-gray-500'>Never worry about losing your audience.</p>
            </div>
            <div className='w-full flex flex-col gap-1 justify-center items-center h-16'>
              <div className='flex  gap-2 items-center justify-center'>
                <img className='w-8 h-8' src="./src/assets/Happy_emoji.svg" alt="" />
                <h1 className='text-2xl font-bold text-white'>Lower WorkLoad</h1>
              </div>
              <p className='text-base text-gray-500'>Just share one link. We'll handle the rest.</p>
            </div>
            <div className='w-full flex flex-col gap-1 justify-center items-center h-16'>
              <div className='flex  gap-2 items-center justify-center'>
                <img className='w-8 h-8' src="./src/assets/Party_emoji.svg" alt="" />
                <h1 className='text-2xl font-bold text-white'>More Time</h1>
              </div>
              <p className='text-base text-gray-500'>Spend less time on marketing tools</p>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-2 items-center mt-28 justify-center'>
          <h2 className='text-blue-500 font-bold'>STEP 1</h2>
          <h1 className='text-white text-5xl'>Cannot Your Content</h1>
          <p className='text-xl text-gray-500'>Bring all of your content together and get a Homepage that <br />
            automatically updates whenever you create anywhere online.
          </p>
          <button className='hover:bg-gray-900 hover:text-white transition mt-2 border p-2 text-gray-500 border-gray-500 rounded'>View Avaliable Sources</button>
        </div>
        <div className='container mt-24 min-h-96 flex '>

          <div className='w-3/6 min-h-96'>
            <div className=' flex flex-col ml-20 gap-10 min-h-56'>
              <h2 className='text-white text-2xl'>Your homepage</h2>
              <div className='flex flex-col gap-y-3'>
                <h1 className='text-5xl font-semibold text-white '>Your Content. <br />
                </h1>
                <h1 className='text-5xl font-semibold text-white'>
                  All in <span className='text-blue-500'>One Spot</span>
                </h1>
              </div>
              <div className='w-full flex flex-col gap-y-2'>
                <div className='flex items-center gap-x-2'>
                  <div className='w-6 h-6 flex items-center justify-center rounded-full bg-gray-700'>
                    <span className='text-sm text-white'>1</span>
                  </div>
                  <h2 className='text-xl text-gray-500'>Bring all of your content together into one homepage.</h2>
                </div>
                <div className='flex items-center gap-x-2'>
                  <div className='w-6 h-6 flex items-center justify-center rounded-full bg-gray-700'>
                    <span className='text-sm text-white'>2</span>
                  </div>
                  <h2 className='text-xl text-gray-500'>Your page automatically updates whenever you create.</h2>
                </div>
                <div className='flex gap-x-4 mt-10 '>
                  <button className='p-2 rounded bg-blue-700 hover:bg-blue-600 transition text-white'>Get Started Now</button>
                  <button className='p-2 text-gray-500 hover:bg-gray-900 hover:text-white transition rounded border border-gray-400 '>View A Demmo</button>
                </div>
              </div>
            </div>
          </div>
          <div className='flex-1'>
            <img src="./src/assets/images/screen_image.png" alt="" />
          </div>
        </div>
      </section>
      <section className='w-full mt-3 '>
        <div className='flex flex-col gap-2 items-center mt-28 '>
          <h2 className='text-blue-500 font-bold'>STEP 2</h2>
          <h1 className='text-white text-5xl'>Share Your Homepage</h1>
          <div className=' items-center flex flex-col justify-center'>
            <p className='text-xl text-gray-500'>Share your Wavium homepage link with your followers, and
            </p>
            <p className='text-xl text-gray-500'>
              we'll handle the rest
            </p>
          </div>
          <button className='hover:bg-gray-900 hover:text-white transition mt-2 border p-2 text-gray-500 border-gray-500 rounded'>View Avaliable Sources</button>
        </div>
        <div className='container mt-24 flex flex-col items-center gap-y-10'>
          <div className='w-full flex  px-20 gap-x-3'>

            <div className='w-full min-h- flex flex-col p-4 gap-y-1 bg-zinc-950'>
              <h2 className='text-xl text-green-500'>One Link</h2>
              <div className='flex flex-col gap-y-3'>
                <h1 className='text-5xl pt-3 font-semibold text-gray-400 '>All You Create <br />
                </h1>
                <h1 className='text-5xl font-semibold text-white'>
                  One Link
                </h1>
              </div>
              <div className='w-full flex ml-[94px] justify- '>
                <img className='' src="./src/assets/images/Mobile.png" alt="" />
              </div>

            </div>

            <div className='w-full flex flex-col  p-6 bg-zinc-950 h-96 gap-10 '>
              <h2 className='text-xl text-green-500'>Collect Subscribers</h2>
              <div className='flex flex-col gap-y-3'>
                <h1 className='text-5xl font-semibold text-gray-400 '>Emails. <br />
                </h1>
                <h1 className='text-5xl font-semibold text-gray-400 '>Phone #s. <br />
                </h1>
                <h1 className='text-5xl font-semibold text-white'>
                  All Yours.
                </h1>
              </div>
            </div>
          </div>
          <button className='w-40 bg-blue-600 hover:bg-blue-500 transition text-white p-2 rounded'>Get Started</button>
        </div>
      </section>
      <section className='w-full mt-3 flex flex-col'>
        <div className='flex flex-col gap-2 items-center mt-28 '>
          <h2 className='text-blue-500 font-bold'>STEP 3</h2>
          <h1 className='text-white text-5xl'>Send Emails & Text Meassages</h1>
          <div className=' items-center flex flex-col justify-center'>
            <p className='text-xl text-gray-500'>No more going through a social platform. Reach and engage
            </p>
            <p className='text-xl text-gray-500'>
              your audience directly over email and text massage.
            </p>
          </div>
        </div>
        <div className='container mt-24 min-h-96 flex '>

          <div className='w-3/6 min-h-96'>
            <div className=' flex flex-col ml-20 gap-10 min-h-56'>
              <h2 className='text-white text-2xl'>Ceate & Share</h2>
              <div className='flex flex-col gap-y-3'>
                <h1 className='text-5xl font-semibold text-white '>Reach Your <br />
                </h1>
                <h1 className='text-5xl font-semibold text-white'>
                  Audience <span className='text-blue-500'>Directly</span>
                </h1>
              </div>
              <div className='w-full flex flex-col gap-y-2'>
                <div className='flex items-center gap-x-2'>
                  <div className='w-6 h-6 flex items-center justify-center rounded-full bg-gray-700'>
                    <span className='text-sm text-white'>1</span>
                  </div>
                  <h2 className='text-xl text-gray-500'>Embed content or create something new to share.</h2>
                </div>
                <div className='flex items-center gap-x-2'>
                  <div className='w-6 h-6 flex items-center justify-center rounded-full bg-gray-700'>
                    <span className='text-sm text-white'>2</span>
                  </div>
                  <h2 className='text-xl text-gray-500'>Share content over email, text message or your homepage.</h2>
                </div>
                <div className='flex gap-x-4 mt-10 '>
                  <button className='p-2 rounded bg-blue-700 hover:bg-blue-600 transition text-white'>Get Started Now</button>
                  <button className='p-2 text-gray-500 hover:bg-gray-900 hover:text-white transition rounded border border-gray-400 '>View A Demmo</button>
                </div>
              </div>
            </div>
          </div>
          <div className='flex-1'>
            <img src="./src/assets/images/screen_black_pink.png" alt="" />
          </div>
        </div>
        <div className='w-full mt-10 h-96 flex flex-col gap-y-10 items-center '>
          <h1 className='text-white text-5xl'>Experts Agree</h1>
          <div className='w-full'>
            <img src="./src/assets/images/Image.png" alt="" />
          </div>
          <div className='w-full h-32 mt-20'>
            <img className='w-full bg-cover bg-center' src="./src/assets/images/Audience.png" alt="" />
          </div>
        </div>
      </section>
      <Footer/>
     
    </main>
  )
}

export default Main;