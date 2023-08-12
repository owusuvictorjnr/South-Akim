'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0">
        {/* Nav bar 1 */}
        <div className="h-[2rem] bg-white">
          <div className="flex justify-between text-sm mx-auto px-[5rem] pt-4 lg:flex lg:justify-evenly">
            <div className="px-5 capitalize md:px-0">
              <ul className="flex gap-2 lg:gap-10">
                <Link
                  href="/personal"
                  className="bg-blue-900 px-5 py-2 text-white mb-8 hover:underline"
                >
                  <li>personal</li>
                </Link>

                <Link href="/business" className="pt-2 hover:underline">
                  <li>business</li>
                </Link>

                <Link href="/corporate" className="pt-2 hover:underline">
                  <li>corporate an institution</li>
                </Link>

                <Link href="/wealth" className="pt-2 hover:underline">
                  <li>wealth</li>
                </Link>

                <Link href="/sims" className="pt-2 uppercase hover:underline">
                  <li>sims</li>
                </Link>
              </ul>
            </div>

            <div className="capitalize">
              <ul className="flex gap-2 lg:gap-10">
                <Link href="/about" className="pt-2 hover:underline">
                  <li>about us</li>
                </Link>

                <Link href="/contact" className="pt-2 hover:underline">
                  <li>contact us</li>
                </Link>

                <div className="">
                  <Link
                    href="/ghana"
                    className="pt-2 flex gap-1 hover:underline"
                  >
                    <Image
                      src="/logo/ghana.png"
                      alt=""
                      height="1000"
                      width="1000"
                      className="h-[1.5rem] md:w-[1.5rem] rounded-full"
                    />
                    <li>ghana</li>
                  </Link>
                </div>
              </ul>
            </div>
          </div>
        </div>

        {/* Navbar 2 */}
        <div className="h-[5rem] bg-blue-800 mt-8">
          <div className="pt-6 flex justify-evenly">
            <Link href="/" className="">
              <h1 className="text-white text-sm capitalize font-bold md:text-xl">
                south akim rural bank
              </h1>
            </Link>
            <div className="capitalize text-sm md:text-xl">
              <ul className="flex gap-5 text-white items-center">
                <li className="flex">products and services</li>
                <li className="">ways to bank</li>
                <li className="">security and safety</li>
              </ul>
            </div>
            <div className="flex gap-10">
              {/* TODO: search icon */} search
              {/* <div className="flex w-[15rem] h-[5rem] bg-blue-300"></div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar
