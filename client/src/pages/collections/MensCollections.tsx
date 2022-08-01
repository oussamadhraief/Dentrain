import { useState } from 'react'
import confident from '../../assets/confident.jpg'
import medicalScrub from '../../assets/medicalScrub.jpg'
import MultiRangeSlider from '../../components/MultiRangeSilder'
import { BsFilterLeft } from 'react-icons/bs'
import { IconContext } from 'react-icons'
import Select from 'react-select'



const MensCollections = () => {

    const [ShowFilters, setShowFilters] = useState<boolean>(false)
    const [SortFilter,setSortFilter] = useState<string>('')
    
  return (
    <main className='w-full h-fit py-20 grid'>
        <div className='flex flex-nowrap w-9/12 h-fit mx-auto justify-between pt-6 pb-5 '>
            <button onClick={() => setShowFilters(prev => !prev)} className="flex gap-2 items-center w-fit h-fit border px-3 py-1 border-zinc-400 rounded font-extrabold poppinsFont">
                <IconContext.Provider value={{ className: ' w-6 h-5'}}>
                    <BsFilterLeft />
                </IconContext.Provider>
                Filters
            </button>
            <div>
                pages
            </div>
        </div>

        <form className={ShowFilters ? 'relative w-9/12 h-fit max-h-[1000px] transition-all mx-auto py-5 grid  mb-5 border-b border-trendygreen/50 font-bold poppinsFont' : "w-9/12 h-0 mx-auto max-h-0 overflow-hidden transition-all border-b border-zinc-400 font-bold poppinsFont"}>
            {false && <div className='absolute inset-0 bg-white/60 z-10 flex items-center justify-center'>
                <div className="snippet" data-title=".dot-falling">
                    <div className="stage">
                        <div className="dot-falling"></div>
                    </div>
            </div>
            </div>}
            <div className={ShowFilters ? 'w-full mb-8' : "w-full h-0 max-h-0 overflow-hidden transition-all"}>
                <h3>Applied filters</h3>
                <div className='w-full flex  justify-start flex-nowrap gap-14 mt-3'>
                    <section>
                    <p>Price:</p>
                    <p>between min and max</p>
                        
                    </section>
                    <section>

                    <p>Availability: </p>
                    <p> in stock</p>
                    </section>
                    <section>

                    <p>Sort by:</p>
                    <p>ascend</p>
                    </section>
                </div>
            </div>
            <div className={ShowFilters ? 'w-full h-fit flex justify-around flex-nowrap items-start' : "w-9/12 h-0 max-h-0 overflow-hidden transition-all"}>
                    <Select options={[
                        {value: 'newest',label: 'From newest to oldest'},
                        {value: 'oldest',label: 'From oldest to newest'},
                        {value: 'ascend',label: 'From lowest price to highest'},
                        {value: 'descend',label: 'From highest price to lowest'}
                    ]} className='w-52 h-10 outline-none placeholder:text-zinc-300' onChange={selectedValue => {if(selectedValue) setSortFilter(selectedValue.value)}} placeholder="Sort by" isClearable={true} menuShouldScrollIntoView={true} name="sort" styles={{
                        option: (provided:any, state:any) => ({
                          ...provided,
                          outline: 'none',
                          color: state.isSelected ? 'white' : 'black',
                          background: state.isSelected ? '#14B1C0' : "#fff"
                        })}} />
                <section className='w-fit h-fit'>
                    <h1 className='w-full text-center'>Price range</h1>
                    {ShowFilters && <MultiRangeSlider
                        min={0}
                        max={230}
                        onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
                    />}
                </section>
                <section>

                    <h1>Availability</h1>

                    <label>
                        <input type="checkbox" name=""  /> In stock
                    </label>

                </section>

            </div>
            <button type='submit' className='w-fit h-fit px-3 py-1.5 bg-darkertrendygreen rounded mt-3 text-white font-medium place-self-end'>Apply filters</button>
        </form>
        <section className='w-9/12 h-fit mx-auto flex flex-wrap justify-start mt-5'>
                <div className='h-fit grid place-content-start place-items-start gap-1 productsDisplayedInFlex mx-6 mt-6'>
                    <img src={confident} alt="product" className='w-full h-auto' />
                    <h1 className='font-medium hover:underline'>Product name</h1>
                    <h2>80$</h2>
                </div>
                <div className='h-fit grid place-content-start place-items-start gap-1 productsDisplayedInFlex mx-6 mt-6'>
                    <img src={medicalScrub} alt="product" className='w-full h-auto' />
                    <h1 className='font-medium hover:underline'>Product name</h1>
                    <h2>80$</h2>
                </div>
                <div className='h-fit grid place-content-start place-items-start gap-1 productsDisplayedInFlex mx-6 mt-6'>
                    <img src={confident} alt="product" className='w-full h-auto' />
                    <h1 className='font-medium hover:underline'>Product name</h1>
                    <h2>80$</h2>
                </div>
                <div className='h-fit grid place-content-start place-items-start gap-1 productsDisplayedInFlex mx-6 mt-6'>
                    <img src={medicalScrub} alt="product" className='w-full h-auto' />
                    <h1 className='font-medium hover:underline'>Product name</h1>
                    <h2>80$</h2>
                </div>
                <div className='h-fit grid place-content-start place-items-start gap-1 productsDisplayedInFlex mx-6 mt-6'>
                    <img src={confident} alt="product" className='w-full h-auto' />
                    <h1 className='font-medium hover:underline'>Product name</h1>
                    <h2>80$</h2>
                </div>
                <div className='h-fit grid place-content-start place-items-start gap-1 productsDisplayedInFlex mx-6 mt-6'>
                    <img src={medicalScrub} alt="product" className='w-full h-auto' />
                    <h1 className='font-medium hover:underline'>Product name</h1>
                    <h2>80$</h2>
                </div>
                <div className='h-fit grid place-content-start place-items-start gap-1 productsDisplayedInFlex mx-6 mt-6'>
                    <img src={confident} alt="product" className='w-full h-auto' />
                    <h1 className='font-medium hover:underline'>Product name</h1>
                    <h2>80$</h2>
                </div>
                <div className='h-fit grid place-content-start place-items-start gap-1 productsDisplayedInFlex mx-6 mt-6'>
                    <img src={medicalScrub} alt="product" className='w-full h-auto' />
                    <h1 className='font-medium hover:underline'>Product name</h1>
                    <h2>80$</h2>
                </div>
                <div className='h-fit grid place-content-start place-items-start gap-1 productsDisplayedInFlex mx-6 mt-6'>
                    <img src={confident} alt="product" className='w-full h-auto' />
                    <h1 className='font-medium hover:underline'>Product name</h1>
                    <h2>80$</h2>
                </div>
                <div className='h-fit grid place-content-start place-items-start gap-1 productsDisplayedInFlex mx-6 mt-6'>
                    <img src={medicalScrub} alt="product" className='w-full h-auto' />
                    <h1 className='font-medium hover:underline'>Product name</h1>
                    <h2>80$</h2>
                </div>
        </section>
    </main>
  )
}

export default MensCollections