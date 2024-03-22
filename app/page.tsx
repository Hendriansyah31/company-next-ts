import Link from "next/link";
import Image from "next/image";


export default function Home() {
  return (
    
    <section className="bg-[url('/sw.jpg')] bg-cover bg-center h-screen w-screen">
      
      <h3 className="pt-30 pr-9 pl-9 text-3xl font-semibold text-blue-500 italic hover:not-italic">
        KARYA JAYA
      </h3>
      <p className="pr-10 pl-10 text-shadow text-wrap">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam,
        provident impedit deleniti deserunt, hic accusantium, nemo maxime
        eveniet maiores eaque possimus? Adipisci nobis numquam saepe accusamus?
        Quasi quaerat esse nemo.
      </p>
      
        <div className="text-center py-10">
          <h5 className="text-heading_color font-bold text-2xl">Testimonials</h5>
          <div className="flex max-w-5xl mx-auto gap-8 group">
            <div className="bg-white/10 duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] cursor-pointer p-8 rounded-xl mix-blend-luminosity">
            <Image
            className="h-20 mx-auto"
            src="/putri.jpg"
            width={150}
            height={150}
            alt="Sunset in the mountains"/>
          <h4 className="uppercase text-xl font-bold">Putri</h4>
          <p className="text-black leading-7 my-3 font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quasi, velit officiis 
          a doloremque iusto, quibusdam perferendis magni quod nam cum laboriosam? Soluta 
          quaerat corrupti sunt ea. Dolorum, eveniet amet?</p>
    
            </div>
            <div className="bg-white/10 duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer p-8 rounded-xl mix-blend-luminosity">
            <Image
            className="h-20 mx-auto"
            src="/satu.jpg"
            width={150}
            height={150}
            alt="Sunset in the mountains"/>
          <h4 className="uppercase text-xl font-bold">Annisa</h4>
          <p className="text-black leading-7 my-3 font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quasi, velit officiis 
          a doloremque iusto, quibusdam perferendis magni quod nam cum laboriosam? Soluta 
          quaerat corrupti sunt ea. Dolorum, eveniet amet?</p>
            </div>
            <div className="bg-white/10 duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer p-8 rounded-xl mix-blend-luminosity">
            <Image
            className="h-20 mx-auto"
            src="/salma.jpg"
            width={150}
            height={150}
            alt="Sunset in the mountains"/>
          <h4 className="uppercase text-xl font-bold">Salma</h4>
          <p className="text-black leading-7 my-3 font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quasi, velit officiis 
          a doloremque iusto, quibusdam perferendis magni quod nam cum laboriosam? Soluta 
          quaerat corrupti sunt ea. Dolorum, eveniet amet?</p>
   
            </div>
          </div>
        </div>
    </section>
  );
}
