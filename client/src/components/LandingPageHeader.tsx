import scrubDoctor from '../assets/profession.png'

const LandingPageHeader = () => {
  return (
    <div className="relative w-full h-fit mt-16 flex justify-around bg-trendygreen">
        <div>

        </div>
        {/* <div className="w-1/4 h-fit bg-darkertrendygreen mt-4 px-10 pt-2 relative rounded-bl-xl rounded-tr-xl shadow-2xl skew-x-3"> */}
        <div className='w-[43%] drop-shadow-2xl'>
            <img src={scrubDoctor} alt="doctor" className='w-full h-auto' />
        </div>
    </div>
  )
}

export default LandingPageHeader