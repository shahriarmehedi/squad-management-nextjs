import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-[url('https://i.ibb.co/mXkzmxC/field.jpg')] bg-cover min-h-screen">
      <div className="flex p-10">
        <div className='w-[80%] bg-white bg-opacity-20 rounded-md h-[90vh] m-5 p-10'></div>
        <div className='w-[20%] bg-white bg-opacity-20 rounded-md h-[90vh] m-5 p-10'></div>
      </div>
    </div>
  )
}
