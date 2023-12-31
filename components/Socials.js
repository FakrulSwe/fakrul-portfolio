//link 
import Link from "next/link";

//icons
import { 
  RiYoutubeLine, 
  RiInstagramLine, 
  RiFacebookLine, 
  RiGithubLine, 
  RiDribbbleLine, 
  RiBehanceLine, 
  RiPinterestLine,
  RiLinkedinLine,
 } from 'react-icons/ri';

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={'https://github.com/FakrulSwe'} className="hover:text-accent transition-all duration-300">
        <RiGithubLine />
      </Link>
      <Link href={'https://www.linkedin.com/in/fakrulswe/'} className="hover:text-accent transition-all duration-300">
        <RiLinkedinLine />
      </Link>
      <Link href={'https://www.facebook.com/FakrulSwe/'} className="hover:text-accent transition-all duration-300">
        <RiFacebookLine />
      </Link>
      <Link href={'https://www.instagram.com/rupok_blueboy/'} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
      <Link href={'https://www.youtube.com/@rupokbinamin1673'} className="hover:text-accent transition-all duration-300">
        <RiYoutubeLine />
      </Link>
    </div>
  );
};

export default Socials;
