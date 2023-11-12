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
    <div
      className="bg-[url('https://i.ibb.co/mXkzmxC/field.jpg')] bg-cover min-h-screen">
      <div className="flex py-14 px-16">
        <div className="relative w-[80%] bg-white bg-opacity-20 rounded-md h-[86vh] my-5 p-10 bg-[url('https://i.ibb.co/PTdw6sB/pitch.jpg')] bg-cover">


          {/* ---------- Player 1 ----------- */}
          <div className='absolute top-[9rem] right-[20rem] scale-75'>
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
          <div className='absolute top-[9rem] left-[20rem] scale-75'>
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
          <div className='absolute top-[8rem] left-[42rem] scale-75'>
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


          {/* ---------- Player 4 ----------- */}
          <div className='absolute top-[19rem] right-[18rem] scale-75'>
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
          <div className='absolute top-[19rem] left-[42rem] scale-75'>
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
          <div className='absolute top-[19rem] left-[18rem] scale-75'>
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


          {/* ---------- Player 7 ----------- */}
          <div className='absolute top-[27rem] right-[8rem] scale-75'>
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
          <div className='absolute top-[27rem] right-[28rem] scale-75'>
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
          <div className='absolute top-[27rem] left-[28rem] scale-75'>
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


          {/* ---------- Player 10 ----------- */}
          <div className='absolute top-[27rem] left-[8rem] scale-75'>
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
          <div className='absolute top-[38rem] left-[42rem] scale-75'>
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






        </div>
        <div className='w-[20%] bg-yellow-500 bg-opacity-20 rounded-md h-[86vh] my-5 p-10'>

        </div>
      </div>
    </div>
  )
}



