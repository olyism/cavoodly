import Image from 'next/image';

const TheHeader = () => (
  <header className="flex items-center justify-center h-screen sm:max-h-[400px] p-10 relative bg-slate-900">
    <h1 className="font-bold relative text-5xl text-center text-white z-10">Cavoodly</h1>
    <Image 
      alt="Mango the Cavoodle looking out from behind a triangular white shelf" 
      className="object-cover opacity-50"
      fill
      src="/images/IMG20230103192427.jpg"
    />
  </header>
);

export default TheHeader;
