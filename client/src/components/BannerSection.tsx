import banner from "../assets/banner.jpg"

const BannerSection = () => {
  return (
    <div className="mt-16 relative h-fit group hover:cursor-pointer">
        <button className="font-medium text-2xl w-9 h-9 absolute top-1/2 -translate-y-1/2 left-2 text-white bg-darkgray rounded-full hidden group-hover:block">&#x276E;</button>
        <img src={banner} alt="" />
        <button className="font-medium text-2xl w-9 h-9 absolute top-1/2 -translate-y-1/2 right-2 text-white bg-darkgray rounded-full hidden group-hover:block">&#x276F;</button>

    </div>
  )
}

export default BannerSection