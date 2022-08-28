import React, { useState, useRef } from "react"
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import preview from '../../../assets/preview.jpg'
import confident from '../../../assets/confident.jpg'
import medicalScrub from '../../../assets/medicalScrub.jpg'
import {IoIosArrowDown} from 'react-icons/io'
import sizeChart from '../../../assets/sizeChart.webp'
import { IconContext } from 'react-icons'
import axios from "axios"
import {AdvancedImage, placeholder} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import {thumbnail} from "@cloudinary/url-gen/actions/resize";
import {byRadius} from "@cloudinary/url-gen/actions/roundCorners";


interface product {
    name: string;
    ProductImages: string[];
    PantsType: string[];
    ProductSizes: string[];
    PantsLength: string[];
    description: string;
    price: string;
    salePrice: string;
    onSale: boolean;
}

interface ProductImages {
    publicId: string;
    Base64EncodedImage: string;
}

const AddProduct = () => {

    const cld = new Cloudinary({
        cloud: {
          cloudName: process.env.REACT_APP_CLOUD_NAME
        }
      })
      

    const ImageScrollerRef = useRef<HTMLDivElement>(null)
    const imageUploadInputRef = useRef<HTMLInputElement>(null)
    const progressBarRef = useRef<HTMLProgressElement>(null)

    const [ProductImages, setProductImages] = useState<ProductImages[]>([])
    const [MainImage, setMainImage] = useState<number>(0)
    const [PreviewMainImage, setPreviewMainImage] = useState<number>(0)
    const [SelectedPantsType, setSelectedPantsType] = useState<number>(0)
    const [SelectedProductSize, setSelectedProductSize] = useState<number>(0)
    const [SelectedPantsLength, setSelectedPantsLength] = useState<number>(0)
    const [ExpandedSizeChart, setExpandedSizeChart] = useState<boolean>(false)
    const [ExpandedDescription, setExpandedDescription] = useState<boolean>(false)
    const [ProductForm, setProductForm] = useState<product>({ name: '', price: '', onSale: false, salePrice: '', ProductImages: [], PantsType: [], ProductSizes: [], PantsLength: [], description: '' })
    const [PreviewProduct, setPreviewProduct] = useState<product>({ name: 'Product Name', price: '88.00', onSale: false, salePrice: '', ProductImages: [medicalScrub,confident,medicalScrub,confident,medicalScrub,confident,medicalScrub,confident,medicalScrub,confident,medicalScrub,confident], PantsType: ["JOGGER","JOGGER"], ProductSizes: ['XS','S','M','L','XL','XLL'], PantsLength: ['PETIT','LARGE'], description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi exercitationem ratione a architecto iure, quibusdam laboriosam sed voluptatem, iusto id obcaecati provident, est adipisci. Ipsa ea non dicta neque voluptatibus.' })

    const handleChange = (event: React.FormEvent) => {
        const target = event.target as HTMLInputElement
        setProductForm({
            ...ProductForm,
            [target.name]: target.value
        })
    }

   async  function handleImageInput(e: React.FormEvent){
        if(imageUploadInputRef.current)
            imageUploadInputRef.current.disabled = true
        const target = e.target as HTMLInputElement
        const files: FileList | null = target?.files
        const reader = new FileReader();
        reader.onload = async function () {
            const pictureAlreadyAdded = ProductImages.some(item => item.Base64EncodedImage == reader.result)
            if(reader.result && !pictureAlreadyAdded)
                setProductImages([
                    ...ProductImages,
                    {
                        publicId: '',
                        Base64EncodedImage: reader.result as string
                    }
                ])
                handleImageUpload(reader.result as string, target)
        }
        if(files)
            reader.readAsDataURL(files[0])
    }

    const handleRemoveProductImage = (e: React.MouseEvent,index: number): void => {
        e.stopPropagation()
        setMainImage(0)
        const temp = ProductImages.filter((item,ind) => {
            return ind != index
        })
        setProductImages(temp)
    }

    const handleSetMainImage = (index: number): void => {
        setMainImage(index)
    }

    const handleChangeMainImage = (index: number) => {
        setMainImage(index)

        ImageScrollerRef.current?.scroll(0,(index -1)  * 188 + 40)

    }

    const handlePreviewProduct = () => {
        
        const temp = {
            name: ProductForm.name != '' ? ProductForm.name : PreviewProduct.name,
            price: ProductForm.price != '' ? ProductForm.price : PreviewProduct.price,
            salePrice: ProductForm.salePrice != '' ? ProductForm.salePrice : PreviewProduct.salePrice,
            onSale: ProductForm.onSale,
            description: ProductForm.description != '' ? ProductForm.description : PreviewProduct.description,
            ProductImages: ProductForm.ProductImages.length ? ProductForm.ProductImages : PreviewProduct.ProductImages,
            ProductSizes: ProductForm.ProductSizes.length ? ProductForm.ProductSizes : PreviewProduct.ProductSizes,
            PantsType: ProductForm.PantsType.length ? ProductForm.PantsType : PreviewProduct.PantsType,
            PantsLength: ProductForm.PantsLength.length ? ProductForm.PantsLength : PreviewProduct.PantsLength
        }
        setPreviewProduct(temp)
    }

    const handleImageUpload = (Base64EncodedImage: string, target: HTMLInputElement) => {
        axios.post('/api/upload',JSON.stringify({
            data: Base64EncodedImage
        }),{
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true,
            onUploadProgress: (progressEvent) => {
                const percentCompleted = (progressEvent.loaded / progressEvent.total) * 100
                progressBarRef.current?.setAttribute('value',`${percentCompleted}`)
                if(percentCompleted == 100) {
                    // add completed
                }
            }
        }).then(res => {
            setProductImages(prev => prev.map(item => item.Base64EncodedImage == Base64EncodedImage ? {
                ...item,
                publicId: res?.data?.imagePublicId.public_id
            } : item))
            target.value = ''
            if(imageUploadInputRef.current)
                imageUploadInputRef.current.disabled = false
        })
            
    }


    return (
        <main className="flex-1 h-full overflow-auto">
            <form className="w-full h-fit overflow-auto py-6 px-3 flex flex-nowrap justify-center items-start gap-8 mb-20">
                <div className="w-1/3 h-fit flex flex-nowrap justify-end items-start gap-5 relative overflow-hidden">
                        <div className="productSideImageContainer removeScrollbar">

                            {ProductImages.map((item,index) => 
                            {if(item.publicId) return (
                            <div key={`pic${index}`} onClick={() => handleSetMainImage(index)} className={index == MainImage ? "relative w-fit h-fit group before:content-[''] before:inset-0 before:border-[3px] before:border-trendygreen before:absolute  mb-5" : "relative w-fit h-fit group rounded  mb-5"}>
                                
                                <img src={item.Base64EncodedImage} className="w-28 h-auto rounded" />
                                <button type="button" onClick={e => handleRemoveProductImage(e,index)} className="w-4 h-4 absolute top-0 right-0 bg-red-500 rounded-full items-center pb-0.5 justify-center font-medium text-xs font-mono text-white hidden group-hover:flex">
                                    x
                                </button>

                            </div>)
                            return (
                                <div className="relative w-fit h-fit group rounded  mb-5">
                                    <img key={`uploadpic${index}`} src={item.Base64EncodedImage} className="w-full" />
                                    <div className="absolute inset-0 bg-white/60 flex items-end pb-5 justify-center flex-nowrap">
                                        <progress ref={progressBarRef} value={0} max={100} className='uploadToCloudinaryProgressBar' ></progress>
                                    </div>
                                </div> 
                            )
                            })}
                            <input ref={imageUploadInputRef} type="file" name="image" className="relative flex py-5 overflow-hidden w-28 h-[165px] before:content-['+'] before:absolute before:inset-0 before:z-10 before:bg-verylighttrendygreen before:border-[1px] before:border-[#5abdbf] before:rounded before:flex before:items-center before:justify-center before:text-[#5abdbf] before:text-2xl before:hover:cursor-pointer" onChange={handleImageInput} />
                        </div>
                    <div className="productMainImageContainer">
                    {ProductImages.length > 0 ? 
                    <Zoom>
                        
                        <img src={ProductImages[MainImage].Base64EncodedImage} className='w-full h-auto' />
                    </Zoom> :
                    <img src={preview} alt="product" className='w-full h-auto' />
                        }
                    </div>
                </div>
                
                <div className="w-1/3 h-fit grid place-items-start">
                    <div className="w-full h-fit flex flex-nowrap justify-between items-center">
                        <h1 className="text-2xl font-medium text-darkertrendygreen">Product's informations</h1>
                        <button onClick={handlePreviewProduct} type="button" className="w-fit h-fit px-2 py-0.5 border border-trendygreen text-sm font-medium text-trendygreen rounded-xl hover:text-white hover:bg-trendygreen">Preview</button>
                    </div>
                    <label className="w-full h-fit font-medium text-black grid mt-5">
                        Name
                        <input type="text" name="name" value={ProductForm.name} onChange={handleChange} className="w-full border h-9 outline-none" />
                    </label>

                    <label className="w-full h-fit font-medium text-black grid mt-5">
                        <p className="flex gap-1 items-center">Price <span className="text-xs text-darkgray">in USD</span>  </p> 
                        <input type="number" name="price" value={ProductForm.price} onChange={handleChange} className="w-full border h-9 outline-none removeArrowButtons" />
                    </label>

                    {ProductForm.onSale && <label className="w-full h-fit font-medium text-black grid mt-5">
                        Price after sale &#40;$&#41;
                        <input type="number" name="salePrice" value={ProductForm.salePrice} onChange={handleChange} className="w-full border h-9 outline-none removeArrowButtons" />
                    </label>}

                    <label className="font-medium flex items-center gap-1 text-sm">
                        <input type="checkbox" name="onSale" checked={ProductForm.onSale} onChange={e => setProductForm(prev => {
                            return {
                            ...prev,
                            onSale: !prev.onSale
                        }})}/>
                        Item on sale
                    </label>

                    <label className="w-full h-fit font-medium text-black grid mt-5">
                        Description
                        <textarea name="description" value={ProductForm.description} onChange={handleChange} cols={50} rows={4} className="w-full border h-32 outline-none"></textarea>
                    </label>

                    <fieldset name="category" className="border border-trendygreen w-full px-2 py-3 mt-5">

                        <legend className="font-medium px-1">Category</legend>


                        <label className="w-fit h-fit flex flex-nowrap items-center justify-start gap-2 font-mono">
                            <input type="radio" name="category" value='Men' onChange={handleChange} className="w-fit h-fit" />
                            Men
                        </label>

                        <label className="w-fit h-fit flex flex-nowrap items-center justify-start gap-2 font-mono">
                            <input type="radio" name="category" value='Women' onChange={handleChange} className="w-fit h-fit" />
                            Women
                        </label>

                        <label className="w-fit h-fit flex flex-nowrap items-center justify-start gap-2 font-mono">
                            <input type="radio" name="category" value='Accessories' onChange={handleChange} className="w-fit h-fit" />
                            Accessories
                        </label>

                    </fieldset>
                    
                    
                    <fieldset name="subcategory" className="border border-trendygreen w-full px-2 py-3 mt-5">

                        <legend className=" font-medium px-1">Sub-category</legend>


                        <label className="w-fit h-fit flex flex-nowrap items-center justify-start gap-2 font-mono">
                            <input type="radio" name="subcategory" value='Classic' onChange={handleChange} className="w-fit h-fit" />
                            Classic
                        </label>

                        <label className="w-fit h-fit flex flex-nowrap items-center justify-start gap-2 font-mono">
                            <input type="radio" name="subcategory" value='Fresh' onChange={handleChange} className="w-fit h-fit" />
                            Fresh
                        </label>

                        <label className="w-fit h-fit flex flex-nowrap items-center justify-start gap-2 font-mono">
                            <input type="radio" name="subcategory" value='Fall' onChange={handleChange} className="w-fit h-fit" />
                            Fall
                        </label>

                        <label className="w-fit h-fit flex flex-nowrap items-center justify-start gap-2 font-mono">
                            <input type="radio" name="subcategory" value='Summer' onChange={handleChange} className="w-fit h-fit" />
                            Summer
                        </label>

                        <label className="w-fit h-fit flex flex-nowrap items-center justify-start gap-2 font-mono">
                            <input type="radio" name="subcategory" value='White Coat' onChange={handleChange} className="w-fit h-fit" />
                            White Coat
                        </label>

                    </fieldset>
                    
                    <button type="submit" className="w-fit h-fit mt-8 bg-darkertrendygreen px-4 py-2.5 text-white font-medium rounded mx-auto">Create product</button>

                </div>
                
            </form>

            <div className="h-fit w-full py-20 flex flex-nowrap justify-center gap-10 items-start">
                <div className='w-4/12 h-fit flex flex-nowrap justify-end items-start gap-5 overflow-hidden relative'>

                    <div ref={ImageScrollerRef} className='productSideImageContainer grid place-content-start gap-5 removeScrollbar scroll-smooth'>
                            {PreviewProduct.ProductImages.map((element,index) => <button className={index === MainImage ? "relative before:content-[''] before:inset-0 before:border-2 before:border-black before:absolute" : ""} onClick={() => handleChangeMainImage(index)}><img src={element} alt="product" className='w-full h-auto' /></button>)}
                    </div>
                    <div className='productMainImageContainer'>

                        <Zoom>
                            <img src={PreviewProduct.ProductImages[MainImage]} alt="product" className='w-full h-auto' />
                        </Zoom>

                    </div>
                </div>

                <div className='w-4/12 h-fit grid place-items-start'>

                    <h1 className='text-3xl font-semibold mb-5 text-darkertrendygreen'>{PreviewProduct.name}</h1>

                    <h2 className='text-xl mb-7 font-mono font-bold'>  ${PreviewProduct.price}</h2>

                    <section className='w-full mb-7'>
                        <button onClick={() => setExpandedSizeChart(prev => !prev)} className="w-full h-fit flex flex-nowrap justify-between items-center py-2">
                            <span className='font-mono text-darkertrendygreen text-xl'>SIZE CHART</span>
                            <IconContext.Provider value={{className: 'w-4 h-4 text-darkertrendygreen'}}>
                                <IoIosArrowDown />
                            </IconContext.Provider>
                        </button>
                        <div className={ExpandedSizeChart ? "w-full max-h-[1000px] min-w-full transition-all border-b border-zinc-200 pb-5 fadeInAnimation" : "w-full min-w-full max-h-0 transition-all overflow-hidden border-b border-zinc-200"}>
                            <p className='font-medium my-3'>Always the perfect fit... we recommend you to choose your size as usual</p>
                            <img src={sizeChart} alt=""  />
                        </div>
                    </section>

                    <p className='font-mono text-xl mb-1 text-darkertrendygreen'>PANTS</p>
                    <div className='w-fit h-fit flex flex-nowrap justify-start items-center gap-2'>
                        {PreviewProduct.PantsType.map((item,index) => <button onClick={() => setSelectedPantsType(index)} className={SelectedPantsType === index ? 'w-24 h-10 border-2 border-trendygreen text-darkertrendygreen font-medium' : 'w-24 h-10 border border-zinc-300' }>{item}</button>)}
                    </div>

                    <p className='font-mono text-xl mb-1 mt-7 text-darkertrendygreen'>SIZE</p>
                    <div className='w-fit h-fit flex flex-nowrap justify-start items-center gap-2'>
                        {PreviewProduct.ProductSizes.map((item,index) => <button onClick={() => setSelectedProductSize(index)} className={SelectedProductSize === index ? 'w-14 h-10 border-2 border-trendygreen text-darkertrendygreen font-medium' : 'w-14 h-10 border border-zinc-300' }>{item}</button>)}
                    </div>
                    <p className='font-mono text-xl mb-1 mt-7 text-darkertrendygreen'>LENGTH</p>
                    <div className='w-fit h-fit flex flex-nowrap justify-start items-center gap-2'>
                        {PreviewProduct.PantsLength.map((item,index) => <button onClick={() => setSelectedPantsLength(index)} className={SelectedPantsLength === index ? 'w-24 h-10 border-2 border-trendygreen text-darkertrendygreen font-medium' : 'w-24 h-10 border border-zinc-300' }>{item}</button>)}
                    </div>

                    <button className='w-full text-center h-12 border border-darkertrendygreen text-darkertrendygreen font-medium mt-10'>Add to cart</button>
                    <button className='w-full text-center h-12 bg-darkertrendygreen text-white font-medium mt-1'>Buy it now</button>

                    <section className='w-full my-7'>
                        <button onClick={() => setExpandedDescription(prev => !prev)} className="w-full h-fit flex flex-nowrap justify-between items-center py-2">
                            <span className='font-mono text-darkertrendygreen text-xl'>DESCRIPTION</span>
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

        </main>
        
    )
}

export default AddProduct
