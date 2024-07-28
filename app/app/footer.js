import Link from 'next/link';
import Image from 'next/image';

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Footer(){
  return(
    <div className='footer-container'>
      <Link href="#"><FontAwesomeIcon icon={faEnvelope} className="footer-icons"/></Link>
      <Link href="https://www.instagram.com/mp.envirothon/"><FontAwesomeIcon icon={faInstagram} className="footer-icons"/></Link>
      <Link href="https://www.github.com/NebulousCalm/mp-envirothon"><FontAwesomeIcon icon={faGithub} className="footer-icons"/></Link>
      <Link href="https://www.remind.com/join/@mpenvithon"><Image src="/remind-logo.png" width={30} height={30} /></Link>
    </div>
  )
}