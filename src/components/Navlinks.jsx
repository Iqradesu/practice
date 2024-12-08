import Link from 'next/link';

const Navlinks = ({ title, href }) => {
  return (
    <Link 
      href={href} 
      className="text-sm text-white py-1 px-5 rounded-2xl transition transform duration-300 hover:scale-110 uppercase block hover:bg-black md:mx-5 mb-1 "
    >
      {title}
    </Link>
  );
};

export default Navlinks;
