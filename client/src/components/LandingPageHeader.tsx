import scrubDoctor from '../assets/profession.png'

const LandingPageHeader = () => {
  return (
    <div className="relative w-full h-fit mt-16 flex justify-around bg-trendygreen">
        <div className='grid place-content-center'>
            <h1 className='w-fit h-fit text-white font-bold text-4xl'>DRESS DIFFERENT, LOOK CONFIDENT</h1>
            <h2 className='w-full h-fit text-teal-100 font-bold text-xl text-center'>BEST QUALITY, STYLE AND SERVICE AT THE LOWEST PRICE</h2>
        </div>
        {/* <div className="w-1/4 h-fit bg-darkertrendygreen mt-4 px-10 pt-2 relative rounded-bl-xl rounded-tr-xl shadow-2xl skew-x-3"> */}
        <div className='w-[43%] drop-shadow-2xl'>
            <img src={scrubDoctor} alt="doctor" className='w-full h-auto' />
        </div>
        <div className='w-1/4 h-fit px-10 py-2 flex flex-nowrap justify-end items-center absolute bottom-3 left-0 bg-darkertrendygreen rounded-r-full shadow-form gap-5'>
          <button className='w-fit h-fit px-3 py-1 text-darkertrendygreen font-medium border-2 border-white bg-white rounded'>visit something</button>
          <button className='w-fit h-fit px-3 py-1 text-white font-medium border-2 border-white rounded'>visit something</button>
        </div>
    </div>
  )
}

export default LandingPageHeader