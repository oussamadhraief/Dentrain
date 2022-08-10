import { useState, useRef, useEffect } from 'react'
import {IoIosArrowDown} from 'react-icons/io'
import { IconContext } from 'react-icons'
import { useParams } from 'react-router-dom'
import confident from '../assets/product.webp'
import medicalScrub from '../assets/product2.webp'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import sizeChart from '../assets/sizeChart.webp'
import { BsSuitHeart } from 'react-icons/bs'
import { BsFillSuitHeartFill } from 'react-icons/bs'
import { MdOutlineDone } from 'react-icons/md'


const ProductDetails = () => {

    const { productId } = useParams()

    const ImageScrollerRef = useRef<HTMLDivElement>(null)
    const MainImageRef  = useRef<HTMLDivElement>(null)

    const [ProductInfo, setProductInfo] = useState({name: '',ProductImages: [medicalScrub,confident,medicalScrub,confident,medicalScrub,confident,medicalScrub,confident,medicalScrub,confident,medicalScrub,confident],PantsType: ["JOGGER","JOGGER"],ProductSizes: ['XS','S','M','L','XL','XLL'],PantsLength: ['PETIT','LARGE'], Description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi exercitationem ratione a architecto iure, quibusdam laboriosam sed voluptatem, iusto id obcaecati provident, est adipisci. Ipsa ea non dicta neque voluptatibus.'})
    const [MainImage, setMainImage] = useState(0)
    const [SelectedPantsType, setSelectedPantsType] = useState(0)
    const [SelectedProductSize, setSelectedProductSize] = useState(0)
    const [SelectedPantsLength, setSelectedPantsLength] = useState(0)
    const [ExpandedSizeChart, setExpandedSizeChart] = useState(false)
    const [ExpandedDescription, setExpandedDescription] = useState(false)
    
    useEffect(() => {
        if(ImageScrollerRef.current && MainImageRef.current )
        if(MainImageRef.current?.clientHeight >100)
            ImageScrollerRef.current.style.height = MainImageRef.current?.clientHeight + 'px'

    }, [])
    

    const handleChangeMainImage = (index: number) => {
        setMainImage(index)
        ImageScrollerRef.current?.scroll(0,(index -1)  * 188 + 40)
        if(MainImageRef.current)
            MainImageRef.current.style.transform = `translateX(-${index}00%)`

    }

  return (
    <div className='h-fit w-full py-20 flex flex-nowrap justify-center gap-10 items-start'>
        <section className='w-1/3 h-fit flex flex-nowrap justify-end items-start gap-5 relative overflow-hidden'>

                <div ref={ImageScrollerRef} className='productSideImageContainer grid place-content-start gap-5 removeScrollbar scroll-smooth'>
                        {ProductInfo.ProductImages.map((element,index) => <button className={index === MainImage ? "relative before:content-[''] before:inset-0 before:border-2 before:border-black before:absolute" : ""} onClick={() => handleChangeMainImage(index)}><img src={element} alt="product" className='w-full h-auto' /></button>)}
                </div>
                <div  className='productMainImageContainer removeScrollbar overflow-hidden'>
                    <div ref={MainImageRef} className='h-full w-full flex flex-nowrap transition-all duration-700'>

                        {ProductInfo.ProductImages.map((element) => 
                        <div className='w-full h-auto min-w-full'>
                            <Zoom>
                                <img src={element} alt="product" className='w-full h-auto' />
                            </Zoom>
                        </div>
                        )}
                    </div>
                

                </div>
        </section>
        <div className='w-4/12 h-fit grid place-items-start'>

            <h1 className='text-3xl font-semibold mb-5 text-darkertrendygreen'>{productId}</h1>

            <h2 className='mb-5 poppinsFont font-bold text-lg'>  $88.00</h2>
            <div className='flex flex-nowrap items-center gap-2 font-medium mb-5'>
                {true ? 
                <>
                <IconContext.Provider value={{ className: 'text-darkertrendygreen text-xl' }}>
                    <BsSuitHeart />
                </IconContext.Provider>
                Add to wishlist
                </>
                : 
                <>
                <IconContext.Provider value={{ className: 'text-red-500 text-xl' }}>
                    <BsFillSuitHeartFill />
                </IconContext.Provider>
                <span className='flex items-center gap-1'>
                    Added to wishlist
                    <MdOutlineDone />
                </span>
                </>
                }
            </div>
            <section className='w-full mb-7'>
                <button onClick={() => setExpandedSizeChart(prev => !prev)} className="w-full h-fit flex flex-nowrap justify-between items-center py-2">
                    <span className='font-medium font-mono text-darkertrendygreen text-xl'>SIZE CHART</span>
                    <IconContext.Provider value={{className: 'w-4 h-4 text-darkertrendygreen'}}>
                        <IoIosArrowDown />
                    </IconContext.Provider>
                </button>
                <div className={ExpandedSizeChart ? "w-full max-h-[1000px] min-w-full transition-all border-b border-zinc-200 pb-5 fadeInAnimation" : "w-full min-w-full max-h-0 transition-all overflow-hidden border-b border-zinc-200"}>
                    <p className='font-medium my-3'>Always the perfect fit... we recommend you to choose your size as usual</p>
                    <img src={sizeChart} alt=""  />
                </div>
            </section>

            <p className='poppinsFont font-bold mb-1 text-darkertrendygreen'>PANTS</p>
            <div className='w-fit h-fit flex flex-nowrap justify-start items-center gap-2'>
                {ProductInfo.PantsType.map((item,index) => <button onClick={() => setSelectedPantsType(index)} className={SelectedPantsType === index ? 'w-24 h-10 border-2 border-trendygreen text-darkertrendygreen font-medium' : 'w-24 h-10 border border-zinc-300' }>{item}</button>)}
            </div>

            <p className='poppinsFont font-bold mb-1 mt-7 text-darkertrendygreen'>SIZE</p>
            <div className='w-fit h-fit flex flex-nowrap justify-start items-center gap-2'>
                {ProductInfo.ProductSizes.map((item,index) => <button onClick={() => setSelectedProductSize(index)} className={SelectedProductSize === index ? 'w-14 h-10 border-2 border-trendygreen text-darkertrendygreen font-medium' : 'w-14 h-10 border border-zinc-300' }>{item}</button>)}
            </div>
            <p className='poppinsFont font-bold mb-1 mt-7 text-darkertrendygreen'>LENGTH</p>
            <div className='w-fit h-fit flex flex-nowrap justify-start items-center gap-2'>
                {ProductInfo.PantsLength.map((item,index) => <button onClick={() => setSelectedPantsLength(index)} className={SelectedPantsLength === index ? 'w-24 h-10 border-2 border-trendygreen text-darkertrendygreen font-medium' : 'w-24 h-10 border border-zinc-300' }>{item}</button>)}
            </div>

            <button className='w-full text-center h-12 border border-trendygreen text-trendygreen font-medium mt-10'>Add to cart</button>
            <button className='w-full text-center h-12 bg-trendygreen text-white font-medium mt-1'>Buy it now</button>

            <section className='w-full my-7'>
                <button onClick={() => setExpandedDescription(prev => !prev)} className="w-full h-fit flex flex-nowrap justify-between items-center py-2">
                    <span className='font-medium font-mono text-darkertrendygreen text-xl'>DESCRIPTION</span>
                    <IconContext.Provider value={{className: 'w-4 h-4 text-darkertrendygreen'}}>
                        <IoIosArrowDown />
                    </IconContext.Provider>
                </button>
                <div className={ExpandedDescription ? "w-full max-h-[1000px] min-w-full transition-all border-b border-zinc-200 pb-5 fadeInAnimation" : "w-full min-w-full max-h-0 transition-all overflow-hidden border-b border-zinc-200"}>
                    <p className='my-3 fadeInAnimation descriptionFont font-medium'>Always the perfect fit... we recommend you to choose your size as usual Always the perfect fit... we recommend you to choose your size as usual Always the perfect fit... we recommend you to choose your size as usual</p>
                </div>
            </section>

        </div>
        
    </div>
  )
}

export default ProductDetails