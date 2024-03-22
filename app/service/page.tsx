import Link from "next/link"
import Image from "next/image"
const Service = () => {
    return (
      
      <section className="bg-[url('/service.jpg')] bg-cover h-screen w-screen ">
        
        <div className="flex justify-center">
        <div className="max-w-sm rounded-2xl overflow-hidden shadow-2xl mr-3 mt-12">
          <Image
            src="/full.png"
            width={50}
            height={50}
            alt="Sunset in the mountains"
          />
          <div className="px-2 py-2">
            <div className="font-bold text-xl mb-2 text-green-700">Full Servie</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>
        <div className="max-w-sm rounded-2xl overflow-hidden shadow-2xl mr-3 mt-12">
          <Image
            src="/partial.png"
            width={50}
            height={50}
            alt="Sunset in the mountains"
          />
          <div className="px-2 py-2">
            <div className="font-bold text-xl mb-2 text-green-700">Partial Service</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>
        <div className="max-w-sm rounded-2xl overflow-hidden shadow-2xl mr-3 mt-12">
          <Image
            src="/lite.png"
            width={50}
            height={50}
            alt="Sunset in the mountains"
          />
          <div className="px-2 py-2">
            <div className="font-bold text-xl mb-2 text-green-700">Lite Service</div>
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
