'use client'

import React, { useEffect, useState } from 'react'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'

const Carousol = ({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) => {
  const [cur, setCur] = useState(0)

  const prev = () => setCur((cur) => (cur === 0 ? slides.length - 1 : cur - 1))

  const next = () => setCur((cur) => (cur === slides.length - 1 ? 0 : cur + 1))

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(() => (next, autoSlideInterval))
    return () => clearInterval(slideInterval)
  }, [])
  return (
    <div className="overflow-hidden relative">
      <div
        style={{ transform: `transformX(-${cur * 100}%)` }}
        className="flex transition-transform ease-out duration-500"
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <BiChevronLeft size={40} />
        </button>

        <button
          onClick={next}
          className="rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <BiChevronRight size={40} />
        </button>
      </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              className={`transition-all w-3 h-3 bg-white rounded-full ${
                cur === i ? 'p-2' : 'bg-opacity-30'
              }`}
              key={_}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carousol
