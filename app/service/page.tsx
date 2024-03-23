import Link from "next/link"
import Image from "next/image"
const Service = () => {
    return (
      
      <section className="bg-[url('/')] h-screen w-screen ">
        
        <h5 className="font-bold text-center">Our Services</h5>
        <div className="flex justify-center">
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
        <div className="text-center py-10">
          <h5 className="font-bold">Testimonials</h5>
          <div className="flex max-w-5xl mx-auto gap-8 group pt-3 ">
            <div className="bg-blue-500 duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] cursor-pointer p-8 rounded-xl mix-blend-luminosity">
            <Image
            className="h-20 mx-auto"
            src="/putri.jpg"
            width={150}
            height={150}
            alt="Sunset in the mountains"/>
          <h4 className="uppercase text-xl font-bold">Putri</h4>
          <p className="text-black leading-7 my-3 font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quasi, velit officiis 
          a doloremque iusto, quibusdam perferendis magni quod nam cum laboriosam?</p>
    
            </div>
            <div className="bg-blue-500 duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer p-8 rounded-xl mix-blend-luminosity">
            <Image
            className="h-20 mx-auto"
            src="/satu.jpg"
            width={150}
            height={150}
            alt="Sunset in the mountains"/>
          <h4 className="uppercase text-xl font-bold">Annisa</h4>
          <p className="text-black leading-7 my-3 font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quasi, velit officiis 
          a doloremque iusto, quibusdam perferendis magni quod nam cum laboriosam? </p>
            </div>
            <div className="bg-blue-500 duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer p-8 rounded-xl mix-blend-luminosity">
            <Image
            className="h-20 mx-auto"
            src="/salma.jpg"
            width={150}
            height={150}
            alt="Sunset in the mountains"/>
          <h4 className="uppercase text-xl font-bold">Salma</h4>
          <p className="text-black leading-7 my-3 font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quasi, velit officiis 
          a doloremque iusto, quibusdam perferendis magni quod nam cum laboriosam?</p>
   
            </div>
          </div>
        </div>
       </section>
    )
}
export default Service
