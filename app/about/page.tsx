import Image from "next/image";
import Link from "next/link";
const About = () => {
  return (
    <>
      <section className="bg-[url('/wq.png')] h-52 w-screen">
        <h3 className="font-bold pt-14 text-2xl pr-5 pl-14 underline underline-offset-8 text-blue-500 ">ABOUT US</h3>
        <p className="pt-3 pl-14">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus mollitia, perferendis error quod sapiente eos porro debitis aliquid velit magnam, quam officia aperiam laborum natus minus placeat deserunt? Corrupti, repellat!</p>
        
        <h1 className="font-bold pt-14 text-2xl pr-5 pl-14 underline underline-offset-8 text-blue-500 ">VISI & MISI</h1>
        <h2 className="text-start pr-5 pl-14 font-bold text-2xl  underline underline-offset-4 pb-3 text-blue-500"> VISI </h2>
        <div className="flex justify-start max-w-5xl gap-8 group text-start pr-5 pl-14">
        <div className="bg-blue-500 cursor-pointer p-5 rounded-xl mix-blend-luminosity">
        <p className="flex justify-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut eos accusantium ipsam, repellat dignissimos rem officia, vel ab atque iusto soluta nobis aliquam doloribus voluptatum ipsum unde aspernatur provident fugit!</p>
        </div>
        </div>
        <h2 className="text-start pr-5 pl-14 font-bold text-2xl  underline underline-offset-4 pb-3 text-blue-500"> MISI</h2>
        <div className="flex justify-start max-w-5xl gap-8 group text-start pr-5 pl-14">
        <div className="bg-blue-500 cursor-pointer p-5 rounded-xl mix-blend-luminosity">
        <p className="flex justify-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut eos accusantium ipsam, repellat dignissimos rem officia, vel ab atque iusto soluta nobis aliquam doloribus voluptatum ipsum unde aspernatur provident fugit!</p>
        </div>
        </div>
        
        
      </section>
    </>
  );
};
export default About;
