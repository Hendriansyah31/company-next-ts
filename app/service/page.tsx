import Link from "next/link"
import Image from "next/image"
const Service = () => {
    return (
      
      <section className="bg-[url('/service.jpg')] h-52 w-screen ">
        
        <div className="flex justify-center pt-48">
        <div className="max-w-sm rounded-2xl overflow-hidden shadow-2xl mr-3 mt-12 bg-blue-500">
          <Image
            src="/full.png"
            width={50}
            height={50}
            alt="Sunset in the mountains"
          />
          <div className="px-2 py-2 ">
            <div className="font-bold text-xl mb-2 text-black">Full Service</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>
        <div className="max-w-sm rounded-2xl overflow-hidden shadow-2xl mr-3 mt-12 bg-blue-500">
          <Image
            src="/partial.png"
            width={50}
            height={50}
            alt="Sunset in the mountains"
          />
          <div className="px-2 py-2">
            <div className="font-bold text-xl mb-2 text-black">Partial Service</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>
        <div className="max-w-sm rounded-2xl overflow-hidden shadow-2xl mr-3 mt-12 bg-blue-500">
          <Image
            src="/lite.png"
            width={50}
            height={50}
            alt="Sunset in the mountains"
          />
          <div className="px-2 py-2">
            <div className="font-bold text-xl mb-2 text-black">Lite Service</div>
            <p className="text-gray-700 text-wrap">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>
        </div>
       </section>
    )
}
export default Service
