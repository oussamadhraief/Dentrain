import maleUser from '../assets/User-male.png'
import femaleUser from '../assets/User-female.png'

const ProductReviewsSection = () => {
  return (
    <section className="w-full h-fit my-32">
        <h1 className="w-fit h-fit poppinsFont mx-auto text-xl font-bold">Reviews</h1>
        <h2 className="w-fit h-fit poppinsFont mx-auto font-medium">What people who bought it think</h2>
        <div className="mt-5 w-1/2 mx-auto grid">
            <div className='w-fit h-fit flex flex-nowrap gap-2 mt-7'>
                <img src={femaleUser} alt="" className='w-10 h-11' />
                <div className='w-full h-fit bg-zinc-100 px-3 py-2 relative before:absolute before:top-3 before:-left-1 before:w-3 before:h-3 before:bg-zinc-100 before:rotate-45'>
                    *****
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum eius libero culpa ut consectetur sed, quas eos facilis at dolorum rerum ex reprehenderit, nulla nesciunt, dignissimos dolor itaque quos? Doloremque.</p>
                    
                </div>
            </div>
            <div className='w-fit h-fit flex flex-nowrap gap-2 mt-7'>
                <img src={maleUser} alt="" className='w-10 h-11' />
                <div className='w-full h-fit bg-zinc-100 px-3 py-2 relative before:absolute before:top-3 before:-left-1 before:w-3 before:h-3 before:bg-zinc-100 before:rotate-45'>
                    *****
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum eius libero culpa ut consectetur sed, quas eos facilis at dolorum rerum ex reprehenderit, nulla nesciunt, dignissimos dolor itaque quos? Doloremque.</p>
                    
                </div>
            </div>
            <div className='w-fit h-fit flex flex-nowrap gap-2 mt-7'>
                <img src={femaleUser} alt="" className='w-10 h-11' />
                <div className='w-full h-fit bg-zinc-100 px-3 py-2 relative before:absolute before:top-3 before:-left-1 before:w-3 before:h-3 before:bg-zinc-100 before:rotate-45'>
                    *****
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum eius libero culpa ut consectetur sed, quas eos facilis at dolorum rerum ex reprehenderit, nulla nesciunt, dignissimos dolor itaque quos? Doloremque.</p>
                    
                </div>
            </div>
            <div className='w-fit h-fit flex flex-nowrap gap-2 mt-7'>
                <img src={maleUser} alt="" className='w-10 h-11' />
                <div className='w-full h-fit bg-zinc-100 px-3 py-2 relative before:absolute before:top-3 before:-left-1 before:w-3 before:h-3 before:bg-zinc-100 before:rotate-45'>
                    *****
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum eius libero culpa ut consectetur sed, quas eos facilis at dolorum rerum ex reprehenderit, nulla nesciunt, dignissimos dolor itaque quos? Doloremque.</p>
                    
                </div>
            </div>
            <button className='text-darkgray poppinsFont font-bold text-sm w-fit h-fit mx-auto mt-3'>View more</button>
        </div>
    </section>
  )
}

export default ProductReviewsSection