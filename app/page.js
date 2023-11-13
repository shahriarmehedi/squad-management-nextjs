'use client'
import { useEffect, useState } from 'react'

export default function Home() {

  const [players, setPlayers] = useState([])

  // fetch data from a json file

  useEffect(() => {
    fetch('/sbcPlayers.json') // fetch data from a json file
      .then(res => res.json()) // convert the data to json
      .then(data => setPlayers(data?.data?.players)) // then log it out
  }, [])

  console.log(players)

  return (
    <div className="bg-[url('https://i.ibb.co/mXkzmxC/field.jpg')] bg-cover lg:bg-center bg-bottom min-h-screen">
      <div className="flex flex-col lg:flex-row lg:py-14 lg:px-16">
        <div className="relative w-full lg:w-[80%] bg-white bg-opacity-20 rounded-md h-[100vh] lg:h-[86vh] lg:my-5 lg:p-10 lg:bg-[url('https://i.ibb.co/PTdw6sB/pitch.jpg')] bg-cover min-h-screen lg:min-h-fit">


          <div className="bg-[url('/left.png')] bg-cover scale-75 lg:scale-100 w-[200px] h-[80px] absolute left-[-25px] bottom-[-12px] lg:bottom-0 lg:left-0 flex items-center justify-center gap-2 cursor-pointer">
            <picture>
              <img src="/setting.png" alt="" className='w-5 relative right-4' />
            </picture>
            <p className=' relative right-4'>
              Work Area
            </p>
          </div>

          <div className="bg-[url('/right.png')] bg-cover scale-75 lg:scale-100 w-[200px] h-[80px] absolute right-[-25px] bottom-[-10px] lg:bottom-0 lg:right-0  flex items-center justify-center gap-2 cursor-pointer">
            <p className=' text-zinc-800 relative left-4 font-semibold'>
              Submit
            </p>
            <picture>
              <img src="https://cdn-icons-png.flaticon.com/512/25/25649.png" alt="" className='w-5 relative left-4' />
            </picture>
          </div>


          <div className="hidden lg:block bg-[url('/bar.png')]  bg-cover w-full lg:w-[70%] h-[53px] absolute top-0 lg:left-56">
            <div className="flex justify-between px-20">
              <div className='flex items-center gap-2'>
                <div className=''>
                  <h5 className='text-xs pt-2'>Requirements</h5>
                  <div className="flex items-center pt-1">
                    <div className='bg-sky-500 w-48 rounded-lg h-4'></div>
                    <div className=''>
                      <select name="" id="" className='bg-[#202325] text-white text-sm font-semibold'>
                        <option value="">3/3</option>
                        <option value="">2/3</option>
                        <option value="">1/3</option>
                        <option value="">/3</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className=''>
                  <h5 className='text-xs pt-2'>Rating</h5>
                  <div className="flex gap-1 items-center pt-1">
                    <div className=' flex'>
                      {/* star icon yellow filled */}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 3.293l2.146 4.292 4.804.698-3.478 3.388.82 4.77L10 14.77l-4.292 2.146.82-4.77-3.478-3.388 4.804-.698L10 3.293z" clipRule="evenodd" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 3.293l2.146 4.292 4.804.698-3.478 3.388.82 4.77L10 14.77l-4.292 2.146.82-4.77-3.478-3.388 4.804-.698L10 3.293z" clipRule="evenodd" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 3.293l2.146 4.292 4.804.698-3.478 3.388.82 4.77L10 14.77l-4.292 2.146.82-4.77-3.478-3.388 4.804-.698L10 3.293z" clipRule="evenodd" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 3.293l2.146 4.292 4.804.698-3.478 3.388.82 4.77L10 14.77l-4.292 2.146.82-4.77-3.478-3.388 4.804-.698L10 3.293z" clipRule="evenodd" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 3.293l2.146 4.292 4.804.698-3.478 3.388.82 4.77L10 14.77l-4.292 2.146.82-4.77-3.478-3.388 4.804-.698L10 3.293z" clipRule="evenodd" />
                      </svg>

                    </div>
                    <p className=' text-white text-sm font-semibold'>
                      84
                    </p>
                  </div>
                </div>
                <div className=''>
                  <h5 className='text-xs pt-2'>Total chemistry</h5>
                  <div className="pt-1">
                    <select name="" id="" className='bg-[#202325] text-white text-sm font-semibold'>
                      <option value="">0/33</option>
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <div className=''>
                  <h5 className='text-xs pt-2'>Total squad price</h5>
                  <div className="pt-1 flex items-center gap-2">
                    <p className='text-white text-sm font-semibold'>73,150</p>
                    <picture>
                      <img src="/ut.png" alt="" className='w-4' />
                    </picture>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* ----------------MOBILE BAR------------ */}
          <div className="bg-[#202325] w-full h-[70px] absolute top-0 left-0 lg:hidden">
            <div className="flex justify-between px-5">
              <div className='flex items-center justify-between gap-3'>
                <div className=''>
                  <h5 className='text-xs pt-2'>Requirements</h5>
                  <div className="flex items-center pt-1">
                    <div className='bg-sky-500 w-14 rounded-lg h-4'></div>
                    <div className=''>
                      <select name="" id="" className='bg-[#202325] text-white text-sm font-semibold'>
                        <option value="">3/3</option>
                        <option value="">2/3</option>
                        <option value="">1/3</option>
                        <option value="">/3</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className=''>
                  <h5 className='text-xs pt-2'>Rating</h5>
                  <div className="flex gap-1 items-center pt-1">
                    <div className=' flex'>
                      {/* star icon yellow filled */}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 3.293l2.146 4.292 4.804.698-3.478 3.388.82 4.77L10 14.77l-4.292 2.146.82-4.77-3.478-3.388 4.804-.698L10 3.293z" clipRule="evenodd" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 3.293l2.146 4.292 4.804.698-3.478 3.388.82 4.77L10 14.77l-4.292 2.146.82-4.77-3.478-3.388 4.804-.698L10 3.293z" clipRule="evenodd" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 3.293l2.146 4.292 4.804.698-3.478 3.388.82 4.77L10 14.77l-4.292 2.146.82-4.77-3.478-3.388 4.804-.698L10 3.293z" clipRule="evenodd" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 3.293l2.146 4.292 4.804.698-3.478 3.388.82 4.77L10 14.77l-4.292 2.146.82-4.77-3.478-3.388 4.804-.698L10 3.293z" clipRule="evenodd" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 3.293l2.146 4.292 4.804.698-3.478 3.388.82 4.77L10 14.77l-4.292 2.146.82-4.77-3.478-3.388 4.804-.698L10 3.293z" clipRule="evenodd" />
                      </svg>

                    </div>
                    <p className=' text-white text-sm font-semibold'>
                      84
                    </p>
                  </div>
                </div>
                <div className=''>
                  <h5 className='text-xs pt-2'>Total chemistry</h5>
                  <div className="pt-1">
                    <select name="" id="" className='bg-[#202325] text-white text-sm font-semibold'>
                      <option value="">0/33</option>
                    </select>
                  </div>
                </div>
              </div>
              {/* <div>
                <div className=''>
                  <h5 className='text-xs pt-2'>Total squad price</h5>
                  <div className="pt-1 flex items-center gap-2">
                    <p className='text-white text-sm font-semibold'>73,150</p>
                    <picture>
                      <img src="/ut.png" alt="" className='w-4' />
                    </picture>
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-1 mt-20 lg:mt-0 w-3/4 mx-auto">
            {/* ---------- Player 1 ----------- */}
            <div className='lg:absolute lg:top-[9rem]  lg:right-[20rem] scale-[.60] lg:scale-75'>
              <div className="bg-[url('https://cdn.futnext.com/rarity/e_1.png')] bg-cover w-28 h-36 shadow-2xl z-10">
                <div className='flex items-center justify-center gap-2 bg-zinc-800 border-sky-500 rounded-md border w-[75px] relative left-[17px]'>
                  <p className='text-white font-semibold'>
                    {players[0]?.price}
                  </p>
                  <picture>
                    <img src="/ut.png" alt="" className='w-4' />
                  </picture>
                </div>
                <div className='flex items-center justify-center gap-2 bg-zinc-800 border-sky-500 rounded-md border px-1 absolute top-9 left-[85px]'>
                  <p className='text-white font-semibold text-sm'>
                    {players[0]?.positions[0]?.name}
                  </p>

                </div>

                <div className='flex justify-center'>
                  <picture>
                    <img src={players[0]?.image} alt="" className='w-[72px]' />
                  </picture>
                </div>

                <div className="flex items-center justify-center pt-3 gap-2">
                  <picture>
                    <img src={players[0]?.nation?.image} alt="" className='w-5' />
                  </picture>
                  <picture>
                    <img src={players[0]?.league?.image} alt="" className='w-5' />
                  </picture>
                  <picture>
                    <img src={players[0]?.club?.image} alt="" className='w-5' />
                  </picture>
                </div>
              </div>
              <div className="bg-[url('/oval.png')] bg-contain bg-no-repeat w-12 h-7 relative left-7 flex items-center justify-center">
                <p className='text-yellow-300 text-center text-sm'>
                  {players[0]?.positions[0]?.name}
                </p>
              </div>
            </div>

            {/* ---------- Player 2 ----------- */}
            <div className='relative top-[-2rem] lg:absolute lg:top-[9rem] lg:left-[20rem] scale-[.60] lg:scale-75'>
              <div className="bg-[url('https://cdn.futnext.com/rarity/e_1.png')] bg-cover w-28 h-36 shadow-2xl z-10">
                <div className='flex items-center justify-center gap-2 bg-zinc-800 border-sky-500 rounded-md border w-[75px] relative left-[17px]'>
                  <p className='text-white font-semibold'>
                    {players[10]?.price}
                  </p>
                  <picture>
                    <img src="/ut.png" alt="" className='w-4' />
                  </picture>
                </div>
                <div className='flex items-center justify-center gap-2 bg-zinc-800 border-sky-500 rounded-md border px-1 absolute top-9 left-[85px]'>
                  <p className='text-white font-semibold text-sm'>
                    {players[10]?.positions[0]?.name}
                  </p>

                </div>

                <div className='flex justify-center'>
                  <picture>
                    <img src={players[10]?.image} alt="" className='w-[72px]' />
                  </picture>
                </div>

                <div className="flex items-center justify-center gap-2 relative bottom-4">
                  <picture>
                    <img src={players[10]?.nation?.image} alt="" className='w-5' />
                  </picture>
                  <picture>
                    <img src={players[10]?.league?.image} alt="" className='w-5' />
                  </picture>
                  <picture>
                    <img src={players[10]?.club?.image} alt="" className='w-5' />
                  </picture>
                </div>
              </div>
              <div className="bg-[url('/oval.png')] bg-contain bg-no-repeat w-12 h-7 relative left-7 flex items-center justify-center">
                <p className='text-yellow-300 text-center text-sm'>
                  {players[10]?.positions[0]?.name}
                </p>
              </div>
            </div>

            {/* ---------- Player 3 ----------- */}
            <div className='lg:absolute  lg:top-[6rem]  lg:left-[42rem] scale-[.60] lg:scale-75'>
              <div className="bg-[url('https://cdn.futnext.com/rarity/e_1.png')] bg-cover w-28 h-36 shadow-2xl z-10">
                <div className='flex items-center justify-center gap-2 bg-zinc-800 border-sky-500 rounded-md border w-[75px] relative left-[17px]'>
                  <p className='text-white font-semibold'>
                    {players[2]?.price}
                  </p>
                  <picture>
                    <img src="/ut.png" alt="" className='w-4' />
                  </picture>
                </div>
                <div className='flex items-center justify-center gap-2 bg-zinc-800 border-sky-500 rounded-md border px-1 absolute top-9 left-[85px]'>
                  <p className='text-white font-semibold text-sm'>
                    {players[2]?.positions[0]?.name}
                  </p>

                </div>

                <div className='flex justify-center'>
                  <picture>
                    <img src={players[2]?.image} alt="" className='w-[72px]' />
                  </picture>
                </div>

                <div className="flex items-center justify-center pt-3 gap-2">
                  <picture>
                    <img src={players[2]?.nation?.image} alt="" className='w-5' />
                  </picture>
                  <picture>
                    <img src={players[2]?.league?.image} alt="" className='w-5' />
                  </picture>
                  <picture>
                    <img src={players[2]?.club?.image} alt="" className='w-5' />
                  </picture>
                </div>
              </div>
              <div className="bg-[url('/oval.png')] bg-contain bg-no-repeat w-12 h-7 relative left-7 flex items-center justify-center">
                <p className='text-yellow-300 text-center text-sm'>
                  {players[2]?.positions[0]?.name}
                </p>
              </div>
            </div>
          </div>


          <div className="grid grid-cols-3 gap-5 w-5/6 mx-auto">
            {/* ---------- Player 4 ----------- */}
            <div className='lg:absolute lg:top-[19rem]  lg:right-[18rem] scale-[.60] lg:scale-75'>
              <div className="bg-[url('https://cdn.futnext.com/rarity/e_1.png')] bg-cover w-28 h-36 shadow-2xl z-10">
                <div className='flex items-center justify-center gap-2 bg-zinc-800 border-sky-500 rounded-md border w-[75px] relative left-[17px]'>
                  <p className='text-white font-semibold'>
                    {players[3]?.price}
                  </p>
                  <picture>
                    <img src="/ut.png" alt="" className='w-4' />
                  </picture>
                </div>
                <div className='flex items-center justify-center gap-2 bg-zinc-800 border-sky-500 rounded-md border px-1 absolute top-9 left-[85px]'>
                  <p className='text-white font-semibold text-sm'>
                    {players[3]?.positions[0]?.name}
                  </p>

                </div>

                <div className='flex justify-center'>
                  <picture>
                    <img src={players[3]?.image} alt="" className='w-[72px]' />
                  </picture>
                </div>

                <div className="flex items-center justify-center pt-3 gap-2">
                  <picture>
                    <img src={players[3]?.nation?.image} alt="" className='w-5' />
                  </picture>
                  <picture>
                    <img src={players[3]?.league?.image} alt="" className='w-5' />
                  </picture>
                  <picture>
                    <img src={players[3]?.club?.image} alt="" className='w-5' />
                  </picture>
                </div>
              </div>
              <div className="bg-[url('/oval.png')] bg-contain bg-no-repeat w-12 h-7 relative left-7 flex items-center justify-center">
                <p className='text-yellow-300 text-center text-sm'>
                  {players[3]?.positions[0]?.name}
                </p>
              </div>
            </div>


            {/* ---------- Player 5 ----------- */}
            <div className='relative top-[-1rem] lg:absolute  lg:top-[19rem]  lg:left-[42rem] scale-[.60] lg:scale-75'>
              <div className="bg-[url('https://cdn.futnext.com/rarity/e_1.png')] bg-cover w-28 h-36 shadow-2xl z-10">
                <div className='flex items-center justify-center gap-2 bg-zinc-800 border-sky-500 rounded-md border w-[75px] relative left-[17px]'>
                  <p className='text-white font-semibold'>
                    {players[4]?.price}
                  </p>
                  <picture>
                    <img src="/ut.png" alt="" className='w-4' />
                  </picture>
                </div>
                <div className='flex items-center justify-center gap-2 bg-zinc-800 border-sky-500 rounded-md border px-1 absolute top-9 left-[85px]'>
                  <p className='text-white font-semibold text-sm'>
                    {players[4]?.positions[0]?.name}
                  </p>

                </div>

                <div className='flex justify-center'>
                  <picture>
                    <img src={players[4]?.image} alt="" className='w-[72px]' />
                  </picture>
                </div>

                <div className="flex items-center justify-center pt-3 gap-2">
                  <picture>
                    <img src={players[4]?.nation?.image} alt="" className='w-5' />
                  </picture>
                  <picture>
                    <img src={players[4]?.league?.image} alt="" className='w-5' />
                  </picture>
                  <picture>
                    <img src={players[4]?.club?.image} alt="" className='w-5' />
                  </picture>
                </div>
              </div>
              <div className="bg-[url('/oval.png')] bg-contain bg-no-repeat w-12 h-7 relative left-7 flex items-center justify-center">
                <p className='text-yellow-300 text-center text-sm'>
                  {players[4]?.positions[0]?.name}
                </p>
              </div>
            </div>


            {/* ---------- Player 6 ----------- */}
            <div className='lg:absolute  lg:top-[19rem]  lg:left-[18rem] scale-[.60] lg:scale-75'>
              <div className="bg-[url('https://cdn.futnext.com/rarity/e_1.png')] bg-cover w-28 h-36 shadow-2xl z-10">
                <div className='flex items-center justify-center gap-2 bg-zinc-800 border-sky-500 rounded-md border w-[75px] relative left-[17px]'>
                  <p className='text-white font-semibold'>
                    {players[5]?.price}
                  </p>
                  <picture>
                    <img src="/ut.png" alt="" className='w-4' />
                  </picture>
                </div>
                <div className='flex items-center justify-center gap-2 bg-zinc-800 border-sky-500 rounded-md border px-1 absolute top-9 left-[85px]'>
                  <p className='text-white font-semibold text-sm'>
                    {players[5]?.positions[0]?.name}
                  </p>

                </div>

                <div className='flex justify-center'>
                  <picture>
                    <img src={players[5]?.image} alt="" className='w-[72px]' />
                  </picture>
                </div>

                <div className="flex items-center justify-center pt-3 gap-2">
                  <picture>
                    <img src={players[5]?.nation?.image} alt="" className='w-5' />
                  </picture>
                  <picture>
                    <img src={players[5]?.league?.image} alt="" className='w-5' />
                  </picture>
                  <picture>
                    <img src={players[5]?.club?.image} alt="" className='w-5' />
                  </picture>
                </div>
              </div>
              <div className="bg-[url('/oval.png')] bg-contain bg-no-repeat w-12 h-7 relative left-7 flex items-center justify-center">
                <p className='text-yellow-300 text-center text-sm'>
                  {players[5]?.positions[0]?.name}
                </p>
              </div>
            </div>
          </div>


          <div className="grid grid-cols-5">
            {/* ---------- Player 7 ----------- */}
            <div className='lg:absolute  lg:top-[27rem]  lg:right-[8rem] scale-[.60] lg:scale-75'>
              <div className="bg-[url('https://cdn.futnext.com/rarity/e_1.png')] bg-cover w-28 h-36 shadow-2xl z-10">
                <div className='flex items-center justify-center gap-2 bg-zinc-800 border-sky-500 rounded-md border w-[75px] relative left-[17px]'>
                  <p className='text-white font-semibold'>
                    {players[6]?.price}
                  </p>
                  <picture>
                    <img src="/ut.png" alt="" className='w-4' />
                  </picture>
                </div>
                <div className='flex items-center justify-center gap-2 bg-zinc-800 border-sky-500 rounded-md border px-1 absolute top-9 left-[85px]'>
                  <p className='text-white font-semibold text-sm'>
                    {players[6]?.positions[0]?.name}
                  </p>

                </div>

                <div className='flex justify-center'>
                  <picture>
                    <img src={players[6]?.image} alt="" className='w-[72px]' />
                  </picture>
                </div>

                <div className="flex items-center justify-center pt-3 gap-2">
                  <picture>
                    <img src={players[6]?.nation?.image} alt="" className='w-5' />
                  </picture>
                  <picture>
                    <img src={players[6]?.league?.image} alt="" className='w-5' />
                  </picture>
                  <picture>
                    <img src={players[6]?.club?.image} alt="" className='w-5' />
                  </picture>
                </div>
              </div>
              <div className="bg-[url('/oval.png')] bg-contain bg-no-repeat w-12 h-7 relative left-7 flex items-center justify-center">
                <p className='text-yellow-300 text-center text-sm'>
                  {players[6]?.positions[0]?.name}
                </p>
              </div>
            </div>


            {/* ---------- Player 8 ----------- */}
            <div className='relative top-[1rem] lg:absolute  lg:top-[27rem]  lg:right-[28rem] scale-[.60] lg:scale-75'>
              <div className="bg-[url('https://cdn.futnext.com/rarity/e_1.png')] bg-cover w-28 h-36 shadow-2xl z-10">
                <div className='flex items-center justify-center gap-2 bg-zinc-800 border-sky-500 rounded-md border w-[75px] relative left-[17px]'>
                  <p className='text-white font-semibold'>
                    {players[7]?.price}
                  </p>
                  <picture>
                    <img src="/ut.png" alt="" className='w-4' />
                  </picture>
                </div>
                <div className='flex items-center justify-center gap-2 bg-zinc-800 border-sky-500 rounded-md border px-1 absolute top-9 left-[85px]'>
                  <p className='text-white font-semibold text-sm'>
                    {players[7]?.positions[0]?.name}
                  </p>

                </div>

                <div className='flex justify-center'>
                  <picture>
                    <img src={players[7]?.image} alt="" className='w-[72px]' />
                  </picture>
                </div>

                <div className="flex items-center justify-center pt-3 gap-2">
                  <picture>
                    <img src={players[7]?.nation?.image} alt="" className='w-5' />
                  </picture>
                  <picture>
                    <img src={players[7]?.league?.image} alt="" className='w-5' />
                  </picture>
                  <picture>
                    <img src={players[7]?.club?.image} alt="" className='w-5' />
                  </picture>
                </div>
              </div>
              <div className="bg-[url('/oval.png')] bg-contain bg-no-repeat w-12 h-7 relative left-7 flex items-center justify-center">
                <p className='text-yellow-300 text-center text-sm'>
                  {players[7]?.positions[0]?.name}
                </p>
              </div>
            </div>


            {/* ---------- Player 9 ----------- */}
            <div className='relative top-[5rem] lg:absolute  lg:top-[38rem]  lg:left-[42rem] scale-[.60] lg:scale-75'>
              <div className="bg-[url('https://cdn.futnext.com/rarity/e_1.png')] bg-cover w-28 h-36 shadow-2xl z-10">
                <div className='flex items-center justify-center gap-2 bg-zinc-800 border-sky-500 rounded-md border w-[75px] relative left-[17px]'>
                  <p className='text-white font-semibold'>
                    {players[1]?.price}
                  </p>
                  <picture>
                    <img src="/ut.png" alt="" className='w-4' />
                  </picture>
                </div>
                <div className='flex items-center justify-center gap-2 bg-zinc-800 border-sky-500 rounded-md border px-1 absolute top-9 left-[85px]'>
                  <p className='text-white font-semibold text-sm'>
                    {players[1]?.positions[0]?.name}
                  </p>

                </div>

                <div className='flex justify-center'>
                  <picture>
                    <img src={players[1]?.image} alt="" className='w-[72px]' />
                  </picture>
                </div>

                <div className="flex items-center justify-center pt-3 gap-2">
                  <picture>
                    <img src={players[1]?.nation?.image} alt="" className='w-5' />
                  </picture>
                  <picture>
                    <img src={players[1]?.league?.image} alt="" className='w-5' />
                  </picture>
                  <picture>
                    <img src={players[1]?.club?.image} alt="" className='w-5' />
                  </picture>
                </div>
              </div>
              <div className="bg-[url('/oval.png')] bg-contain bg-no-repeat w-12 h-7 relative left-7 flex items-center justify-center">
                <p className='text-yellow-300 text-center text-sm'>
                  {players[1]?.positions[0]?.name}
                </p>
              </div>
            </div>



            {/* ---------- Player 10 ----------- */}
            <div className='relative top-[1rem] left-[-7px] lg:absolute  lg:top-[27rem]  lg:left-[8rem] scale-[.60] lg:scale-75'>
              <div className="bg-[url('https://cdn.futnext.com/rarity/e_1.png')] bg-cover w-28 h-36 shadow-2xl z-10">
                <div className='flex items-center justify-center gap-2 bg-zinc-800 border-sky-500 rounded-md border w-[75px] relative left-[17px]'>
                  <p className='text-white font-semibold'>
                    {players[9]?.price}
                  </p>
                  <picture>
                    <img src="/ut.png" alt="" className='w-4' />
                  </picture>
                </div>
                <div className='flex items-center justify-center gap-2 bg-zinc-800 border-sky-500 rounded-md border px-1 absolute top-9 left-[85px]'>
                  <p className='text-white font-semibold text-sm'>
                    {players[9]?.positions[0]?.name}
                  </p>

                </div>

                <div className='flex justify-center'>
                  <picture>
                    <img src={players[9]?.image} alt="" className='w-[72px]' />
                  </picture>
                </div>

                <div className="flex items-center justify-center pt-3 gap-2">
                  <picture>
                    <img src={players[9]?.nation?.image} alt="" className='w-5' />
                  </picture>
                  <picture>
                    <img src={players[9]?.league?.image} alt="" className='w-5' />
                  </picture>
                  <picture>
                    <img src={players[9]?.club?.image} alt="" className='w-5' />
                  </picture>
                </div>
              </div>
              <div className="bg-[url('/oval.png')] bg-contain bg-no-repeat w-12 h-7 relative left-7 flex items-center justify-center">
                <p className='text-yellow-300 text-center text-sm'>
                  {players[9]?.positions[0]?.name}
                </p>
              </div>
            </div>


            {/* ---------- Player 11 ----------- */}
            <div className='relative left-[-7px] lg:absolute  lg:top-[27rem]  lg:left-[28rem] scale-[.60] lg:scale-75'>
              <div className="bg-[url('https://cdn.futnext.com/rarity/e_1.png')] bg-cover w-28 h-36 shadow-2xl z-10">
                <div className='flex items-center justify-center gap-2 bg-zinc-800 border-sky-500 rounded-md border w-[75px] relative left-[17px]'>
                  <p className='text-white font-semibold'>
                    {players[8]?.price}
                  </p>
                  <picture>
                    <img src="/ut.png" alt="" className='w-4' />
                  </picture>
                </div>
                <div className='flex items-center justify-center gap-2 bg-zinc-800 border-sky-500 rounded-md border px-1 absolute top-9 left-[85px]'>
                  <p className='text-white font-semibold text-sm'>
                    {players[8]?.positions[0]?.name}
                  </p>

                </div>

                <div className='flex justify-center'>
                  <picture>
                    <img src={players[8]?.image} alt="" className='w-[72px]' />
                  </picture>
                </div>

                <div className="flex items-center justify-center pt-3 gap-2">
                  <picture>
                    <img src={players[8]?.nation?.image} alt="" className='w-5' />
                  </picture>
                  <picture>
                    <img src={players[8]?.league?.image} alt="" className='w-5' />
                  </picture>
                  <picture>
                    <img src={players[8]?.club?.image} alt="" className='w-5' />
                  </picture>
                </div>
              </div>
              <div className="bg-[url('/oval.png')] bg-contain bg-no-repeat w-12 h-7 relative left-7 flex items-center justify-center">
                <p className='text-yellow-300 text-center text-sm'>
                  {players[8]?.positions[0]?.name}
                </p>
              </div>
            </div>

          </div>




        </div>

        {/* ----------------- Right Side ----------------- */}
        <div className='w-full lg:w-[20%] bg-[#202325] border-l-[1px] border-zinc-500 lg:h-[86vh] my-5 text-white'>
          <div className='bg-[#16191A] w-full h-[85px]'>
            <p className='p-4'>
              Earn a pack containing a Road to thw Knockouts Player rated 84 OVR or higher.
            </p>
          </div>

          <div className='p-4'>
            <h2 className='text-lg font-semibold'>Challenge Requirements</h2>
            <div className='flex items-center justify-between gap-2 mt-2'>
              <div className='flex items-center gap-2'>
                <picture>
                  <img src="https://icones.pro/wp-content/uploads/2021/02/icone-de-tique-ronde-verte.png" alt="" className='w-6 brightness-150' />
                </picture>
                <p className='text-sm'>
                  Min. 1 players: Team of the week
                </p>
              </div>
            </div>
            <div className='flex items-center justify-between gap-2 mt-2'>
              <div className='flex items-center gap-2'>
                <picture>
                  <img src="https://icones.pro/wp-content/uploads/2021/02/icone-de-tique-ronde-verte.png" alt="" className='w-6 brightness-150' />
                </picture>
                <p className='text-sm'>
                  Min. Team Rating: 84
                </p>
              </div>
            </div>
            <div className='flex items-center justify-between gap-2 mt-2'>
              <div className='flex items-center gap-2'>
                <picture>
                  <img src="https://icones.pro/wp-content/uploads/2021/02/icone-de-tique-ronde-verte.png" alt="" className='w-6 brightness-150' />
                </picture>
                <p className='text-sm'>
                  Number of players in the squad: 11
                </p>
              </div>
            </div>

            <h2 className='text-lg font-semibold pt-10'>Group Rewards:</h2>
            <div className='flex justify-center items-center'>
              <picture>
                <img src="pack.png" alt="" className='w-36 pt-3' />
              </picture>
            </div>
            <p className='text-center pt-3'>
              x1 84+ Road to the Knockouts Player pack (Untradeable)
            </p>


            <div className='mt-5 flex flex-col gap-2'>
              <button className='bg-[#FDFBF7] text-[#202325] font-semibold w-full px-5 py-3 rounded-md'>
                Exchange Players
              </button>
              <button className='bg-[#777873] font-semibold w-full px-5 py-3 rounded-md'>
                Use Squad Builder
              </button>
              <button className='bg-[#777873] font-semibold w-full px-5 py-3 rounded-md'>
                Clear Squad
              </button>
            </div>
          </div>


          <div className='bg-[#313131] h-[50px] w-full border-t-[1px] border-[#5b5b5b] p-3'>
            <div className="flex items-centeer gap-5">
              <div className="flex items-center gap-2">
                <picture>
                  <img src="https://cdn-icons-png.flaticon.com/512/724/724863.png" alt="" className='w-5' />
                </picture>
                <p className='text-white font-semibold text-sm'>
                  Repeatable
                </p>
              </div>
              <div className="flex items-center gap-2">
                <picture>
                  <img src="https://png.pngtree.com/png-clipart/20230805/original/pngtree-clock-flat-yellow-color-icon-glyph-fast-minute-vector-picture-image_9756905.png" alt="" className='w-5' />
                </picture>
                <p className='text-white font-semibold text-sm'>
                  Expires in: 1 day
                </p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div >
  )
}



