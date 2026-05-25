import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../../../public/assets/logo.png'

const Logo = () => {
  return (
    <Link className="flex items-center gap-1" href={"/"}>
      <Image alt="hero-kidz-logo" src={logo} width={50} height={40} />
      <h2 className="text-xl font-bold">
        Hero-<span className='text-primary'>kidz</span>
      </h2>
    </Link>
  );
}

export default Logo