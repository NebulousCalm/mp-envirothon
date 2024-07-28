import Image from 'next/image';
import Link from 'next/link';

export default function TopNav(){
  return(
    <div className="topnav-container">
      <div className="img-topnav-container">
          <Link href="/">
              <Image src="/env-logo.png" width={100} height={100} />
          </Link>
      </div>
      <div className="topnav-links-container">
        <Link href="/membership">MEMBERSHIP</Link>
        <Link href="/leadership">CONTACT</Link>
        <Link href="/meetings">MEETINGS</Link>
        <Link href="/leadership">LEADERSHIP</Link>
      </div>
    </div>
  );
}