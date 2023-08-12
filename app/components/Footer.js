import Link from 'next/link'
import React from 'react'
import { AiFillYoutube } from 'react-icons/ai'
import { BiLogoFacebook, BiLogoTwitter } from 'react-icons/bi'

const Footer = () => {
  return (
    <>
      <div className="min-h-[10rem] bg-[#192a51]">
        <div className="pt-5">
          <div className="flex justify-evenly">
            <Link href="/">
              <AiFillYoutube size={30} color="white" />
            </Link>

            <Link href="/">
              <BiLogoFacebook size={30} color="white" />
            </Link>

            <Link href="/">
              <BiLogoTwitter size={30} color="white" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 pt-10 text-center space-y-5 capitalize text-white">
          <div className="text-sm md:text-xl">
            <Link href="/disclaimer">disclaimer</Link>
          </div>

          <div className="text-sm md:text-xl">
            <Link href="/conditions">conditions of access</Link>
          </div>

          <div className="text-sm md:text-xl">
            <Link href="/privacy">privacy statement</Link>
          </div>

          <div className="text-sm md:text-xl">
            <Link href="/cookies">manage cookies</Link>
          </div>

          <div className="pb-5 uppercase text-sm md:text-xl">
            <Link href="/fatca">fatca</Link>
          </div>
        </div>
            <div className="h-[0.1rem] bg-white/25" />
        <div className="text-white/30 text-center capitalize pb-5 ">
          developed by cre8tive inc
        </div>
      </div>
    </>
  )
}

export default Footer
