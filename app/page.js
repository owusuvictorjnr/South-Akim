'use client'

import Image from 'next/image'
import React from 'react'
import Carousel from './components/Carousel'
import { FiFileText } from 'react-icons/fi'
import { SlScreenDesktop, SlSettings } from 'react-icons/sl'
import { AiOutlineCar } from 'react-icons/ai'
import { LiaHomeSolid } from 'react-icons/lia'
import { BiCreditCard } from 'react-icons/bi'
import { HiChartBar } from 'react-icons/hi'
import { BsShieldCheck } from 'react-icons/bs'
import { RxTriangleUp } from 'react-icons/rx'
import { HiOutlineArrowUpRight } from 'react-icons/hi2'
import Link from 'next/link'

const slides = ['/imgs/agency.jpg', '/imgs/ebanking.jpg', '/imgs/pic6.jpg']
const Root = () => {
  return (
    <>
      <div className="mt-[9rem] min-h-screen bg-gray-200 pb-[10rem]">
        {/* landing page */}
        <div className="min-h-[40rem] z-50 bg-gray-200 max-h-lg shadow-lg ">
          <Carousel autoSlide={true} autoSlideInterval={1000}>
            {slides.map((s) => (
              <Image
                src={s}
                alt="background"
                height="1000"
                width="1000"
                className="w-full h-[30rem] "
                key={s}
              />
            ))}
          </Carousel>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 capitalize px-5 pt-8 text-sm md:pt-0 lg:grid-cols-4 md:bg-white">
            <div className="bg-white px-2 py-2 flex items-center md:hover:text-white md:hover:bg-orange-400 duration-700 md:h-[10rem]">
              <Link href="/" className="flex justify-center gap-5">
                <FiFileText size={30} className="" />
                <h3 className="hover:text-blue-500 pt-1 md:pt-0 md:hover:text-white md:text-xl">
                  open an account
                </h3>
              </Link>
            </div>

            <div className="bg-white px-2 py-2 flex items-center md:hover:text-white md:hover:bg-orange-400 duration-700 md:h-[10rem]">
              <Link href="/" className="flex justify-center gap-5">
                <SlScreenDesktop size={30} className="" />
                <h3 className="hover:text-blue-500 pt-1 md:pt-0 md:hover:text-white md:text-xl">
                  online banking | login
                </h3>
              </Link>
            </div>

            <div className="bg-white px-2 py-2 flex items-center md:hover:text-white md:hover:bg-orange-400 duration-700 md:h-[10rem]">
              <Link href="/" className="flex justify-center gap-5">
                <FiFileText size={30} className="" />
                <h3 className="hover:text-blue-500 pt-1 md:pt-0 md:hover:text-white md:text-xl">
                  sign an indemnity form
                </h3>
              </Link>
            </div>

            <div className="bg-white px-2 py-2 flex items-center md:hover:text-white md:hover:bg-orange-400 duration-700 md:h-[10rem]">
              <Link href="/" className="flex justify-center gap-5">
                <SlSettings size={30} className="" />
                <h3 className="hover:text-blue-500 pt-1 md:pt-0 md:hover:text-white md:text-xl">
                  self service
                </h3>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-10 text-sm text-black/50 tracking-wider md:text-xl lg:text-3xl">
          <p className="">
            Choose what`s right for
            <p className="flex justify-center">you</p>
          </p>
        </div>

        <div className="">
          <p className="flex justify-center pt-5 text-sm text-black/60 tracking-wide md:text-xl lg:text-3xl">
            Banking tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 pt-8 px-5 gap-5 md:grid-cols-3 lg:grid-cols-6 lg:flex lg:justify-center ">
          <div className="bg-white capitalize gap-2 px-5 py-3 flex items-center md:h-[10rem] lg:w-[15rem] lg:h-[15rem] lg:hoease-out  ">
            <div className="">
              <Link href="bank-account" className="flex gap-3">
                <FiFileText size={30} color="orange" className="" />
                <h1 className="text-sm md:text-xl pt-2 md:pt-0">
                  bank accounts
                </h1>
              </Link>
            </div>
          </div>

          <div className="bg-white capitalize gap-2 px-5 py-3 flex items-center md:h-[10rem] lg:w-[15rem] lg:h-[15rem] ">
            <div className="">
              <Link href="bank-account" className="flex gap-3">
                <AiOutlineCar size={30} color="orange" className="" />
                <h1 className="text-sm md:text-xl pt-2 md:pt-0">
                  vehicle and personal loans
                </h1>
              </Link>
            </div>
          </div>

          <div className="bg-white capitalize gap-2 px-5 py-3 flex items-center md:h-[10rem] lg:w-[15rem] lg:h-[15rem] ">
            <div className="">
              <Link href="bank-account" className="flex gap-3">
                <LiaHomeSolid size={30} color="orange" className="" />
                <h1 className="text-sm md:text-xl pt-2 md:pt-0">home loans</h1>
              </Link>
            </div>
          </div>

          <div className="bg-white capitalize gap-2 px-5 py-3 flex items-center md:h-[10rem] lg:w-[15rem] lg:h-[15rem] ">
            <div className="">
              <Link href="bank-account" className="flex gap-3">
                <BiCreditCard size={30} color="orange" className="" />
                <h1 className="text-sm md:text-xl pt-2 md:pt-0">
                  credit cards
                </h1>
              </Link>
            </div>
          </div>

          <div className="bg-white capitalize gap-1 px-5 py-3 flex items-center md:h-[10rem] lg:w-[15rem] lg:h-[15rem] ">
            <div className="">
              <Link href="bank-account" className="flex gap-3">
                <HiChartBar size={30} color="orange" className="" />
                <h1 className="text-sm md:text-lg pt-2 md:pt-0">
                  savings and investments
                </h1>
              </Link>
            </div>
          </div>

          <div className="bg-white capitalize gap-2 px-5 py-3 flex items-center md:h-[10rem] lg:w-[15rem] lg:h-[15rem] ">
            <div className="">
              <Link href="bank-account" className="flex gap-3">
                <BsShieldCheck size={30} color="orange" className="" />
                <h1 className="text-sm md:text-xl pt-2 md:pt-0">insurance</h1>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 px-5 mt-5 bg-blue-800">
          <div className="flex justify-center container mx-auto px-5">
            <Image
              src="/imgs/ebanking.jpg"
              alt="ebanking"
              height="1000"
              width="1000"
              className="h-[20rem] md:h-[26rem]"
            />
          </div>

          <div className="px-5 bg-blue-800 mx-5 text-white pt-10 pb-10">
            <h1 className="uppercase">do it yourself</h1>

            <ul className="pt-5">
              <div className="flex gap-2">
                <RxTriangleUp
                  size={30}
                  // color="orange"
                  className="text-orange-500"
                />
                <li className="text-sm capitalize md:text-xl ">
                  register for online and mobile banking
                </li>
              </div>

              <div className="flex gap-2">
                <RxTriangleUp
                  size={30}
                  // color="orange"
                  className="text-orange-500"
                />
                <li className="text-sm capitalize md:text-xl ">
                  register for online and mobile banking
                </li>
              </div>

              <div className="flex gap-2">
                <RxTriangleUp
                  size={30}
                  // color="orange"
                  className="text-orange-500"
                />
                <li className="text-sm capitalize md:text-xl ">
                  register for online and mobile banking
                </li>
              </div>

              <div className="flex gap-2">
                <RxTriangleUp
                  size={30}
                  // color="orange"
                  className="text-orange-500"
                />
                <li className="text-sm capitalize md:text-xl ">
                  register for online and mobile banking
                </li>
              </div>

              <div className="flex gap-2">
                <RxTriangleUp
                  size={30}
                  // color="orange"
                  className="text-orange-500"
                />
                <li className="text-sm capitalize md:text-xl ">
                  register for online and mobile banking
                </li>
              </div>

              <div className="flex gap-2">
                <RxTriangleUp
                  size={30}
                  // color="orange"
                  className="text-orange-500"
                />
                <li className="text-sm capitalize md:text-xl ">
                  register for online and mobile banking
                </li>
              </div>
            </ul>
          </div>
        </div>

        {/* Quick links */}
        <section className="uppercase font-bold mt-10 px-10 container md:pl-[8rem] lg:pl-[35rem]">
          quick links
        </section>
        <div className="grid md:grid-cols-3 mt-[2rem] container mx-auto gap-10 px-10 lg:flex lg:justify-center ">
          <div className="px-5 py-2 capitalize bg-white pb-10 md:h-[10rem] md:w-[15rem]">
            <section className="flex gap-5">
              <BiCreditCard size={30} color="orange" className="" />
              <h2 className="text-blue-900/60 tracking-widest md:px-0 md:text-xl">
                moneyWallet
              </h2>
            </section>
            <p className="pl-12 px">
              login to manage your Stanbic MoneyWallet multi-currency card
            </p>
          </div>

          <div className="px-5 py-2 capitalize bg-white md:h-[10rem] md:w-[15rem]">
            <section className="flex gap-5">
              <BiCreditCard size={30} color="orange" className="" />
              <h2 className="text-blue-900/60 tracking-widest md:px-0 md:text-xl">
                corporate card
              </h2>
            </section>
            <p className="pl-10 px">
              login to manage your Stanbic corporate prepaid card
            </p>
          </div>

          <div className="px-5 py-2 capitalize bg-white md:h-[10rem] md:w-[15rem]">
            <section className="flex gap-5">
              <HiOutlineArrowUpRight size={30} color="orange" className="" />
              <h2 className="text-blue-900/60 tracking-widest md:px-0 md:text-xl">
                e-levy
              </h2>
            </section>
            <p className="pl-12 px">
              login to manage your Stanbic corporate prepaid card
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Root
