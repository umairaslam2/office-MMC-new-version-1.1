
const ImageLoader = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center animate-pulse h-full">
            <div className="w-24 [@media(min-width:2200px)]:w-32 [@media(min-width:3200px)]:w-40  [@media(min-width:4200px)]:w-48   h-24 [@media(min-width:2200px)]:h-32 [@media(min-width:3200px)]:h-40  [@media(min-width:4200px)]:h-48  border-4 border-t-[#00b0ff] border-b-[#90e0ef] rounded-full mb-4 animate-spin"></div>
            <p className="text-xl text-[#00b0ff] font-bold [@media(min-width:2200px)]:text-2xl [@media(min-width:3200px)]:text-4xl [@media(min-width:4400px)]:text-6xl">
                Loading...
            </p>
        </div>
    )
}

export default ImageLoader

// [@media(min-width:4200px)]:right-10 [@media(min-width:1520px)]:text-xl [@media(min-width:2200px)]:text-3xl [@media(min-width:3200px)]:text-4xl  [@media(min-width:4200px)]