import Link from "next/link";
import Image from "next/image";


export default function Home() {
  return (
    
    <section className="bg-[url('/wq.png')] w-screen h-52 ">
      
      <h3 className="pt-30 pr-9 pl-9 text-3xl font-semibold text-blue-500 italic hover:not-italic">
        KARYA JAYA
      </h3>
      <p className="pr-10 pl-10 text-black font-bold">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam,
        provident impedit deleniti deserunt, hic accusantium, nemo maxime
        eveniet maiores eaque possimus? Adipisci nobis numquam saepe accusamus?
        Quasi quaerat esse nemo.
      </p>
      <h3 className="pt-30 pr-9 pl-9 pt-32 text-3xl font-semibold text-blue-500 italic hover:not-italic">
        Company History
      </h3>
      <p className="pr-10 pl-10 text-black font-bold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea mollitia id minus, in unde expedita natus officiis consectetur quaerat totam impedit perspiciatis quo praesentium commodi aliquid suscipit repellendus eligendi iste.</p>
    
    </section>
  );
}
