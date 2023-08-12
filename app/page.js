import Image from 'next/image'
import React from 'react'
import Carousel from './components/Carousel'
import { FiFileText } from 'react-icons/fi'
import { SlScreenDesktop, SlSettings } from 'react-icons/sl'
import Link from 'next/link'

const slides = ['/imgs/agency.jpg', '/imgs/ebanking.jpg', '/imgs/pic6.jpg']
const Root = () => {
  return (
    <>
      <div className="mt-[9rem] min-h-screen bg-gray-200">
        {/* landing page */}
        <div className="min-h-[40rem] bg-gray-200 max-h-lg shadow-lg ">
          <Carousel autoSlide={true} autoSlideInterval={1000}>
            {slides.map((s) => (
              <Image
                src={s}
                alt="background"
                height="1000"
                width="1000"
                className="w-full h-[30rem]"
                key={s}
              />
            ))}
          </Carousel>

          <div className="grid grid-cols-1 gap-3 capitalize px-5 text-sm md:grid-cols-4 md:bg-white">
            <div className="bg-white px-2 py-2 flex items-center md:hover:text-white md:hover:bg-orange-400 duration-700 md:h-[10rem]">
              <Link href="/" className="flex justify-center gap-5">
                <FiFileText size={30} className="" />
                <h3 className="hover:text-blue-500 md:hover:text-white md:text-xl">
                  open an account
                </h3>
              </Link>
            </div>

            <div className="bg-white px-2 py-2 flex items-center md:hover:text-white md:hover:bg-orange-400 duration-700 md:h-[10rem]">
              <Link href="/" className="flex justify-center gap-5">
                <SlScreenDesktop size={30} className="" />
                <h3 className="hover:text-blue-500 md:hover:text-white md:text-xl">
                  online banking | login
                </h3>
              </Link>
            </div>

            <div className="bg-white px-2 py-2 flex items-center md:hover:text-white md:hover:bg-orange-400 duration-700 md:h-[10rem]">
              <Link href="/" className="flex justify-center gap-5">
                <FiFileText size={30} className="" />
                <h3 className="hover:text-blue-500 md:hover:text-white md:text-xl">
                  sign an indemnity form
                </h3>
              </Link>
            </div>

            <div className="bg-white px-2 py-2 flex items-center md:hover:text-white md:hover:bg-orange-400 duration-700 md:h-[10rem]">
              <Link href="/" className="flex justify-center gap-5">
                <SlSettings size={30} className="" />
                <h3 className="hover:text-blue-500 pt-1 md:hover:text-white md:text-xl">
                  self service
                </h3>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-10">
          <h2 className="">
            Choose what`s right for
            <p className="flex justify-center">you</p>
          </h2>
        </div>
        <p className="flex justify-center pt-5">
          banking tailored to your needs
          {/* HiChartBar */}
        </p>
      </div>
    </>
  )
}

export default Root
