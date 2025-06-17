import React, { useEffect, useRef, useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

export default function MySliderWithButtons() {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: { perView: 1 },
    mode: "free-snap",
  })

  const autoplayRef = useRef()

  // Autoplay با توقف در تعامل
  useEffect(() => {
    if (!slider) return
    let timeout

    const clear = () => clearTimeout(timeout)
    const autoplay = () => {
      clear()
      timeout = setTimeout(() => {
        slider.current?.next()
        autoplay()
      }, 3000)
    }

    autoplayRef.current = autoplay
    autoplay()

    return () => clear()
  }, [slider])

  const handleNext = () => {
    slider.current?.next()
    autoplayRef.current?.()
  }

  const handlePrev = () => {
    slider.current?.prev()
    autoplayRef.current?.()
  }

  return (
    <div className="relative">
      <div ref={sliderRef} className="keen-slider rounded-md overflow-hidden">
        <div className="keen-slider__slide number-slide1 bg-red-500 h-48 flex items-center justify-center text-white text-2xl font-bold">
          اسلاید ۱
        </div>
        <div className="keen-slider__slide number-slide2 bg-blue-500 h-48 flex items-center justify-center text-white text-2xl font-bold">
          اسلاید ۲
        </div>
        <div className="keen-slider__slide number-slide3 bg-green-500 h-48 flex items-center justify-center text-white text-2xl font-bold">
          اسلاید ۳
        </div>
      </div>

      {/* دکمه‌های کنترل */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 -translate-y-1/2 left-2 bg-black/50 text-white rounded-full p-2 hover:bg-black transition"
      >
        ◀
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 -translate-y-1/2 right-2 bg-black/50 text-white rounded-full p-2 hover:bg-black transition"
      >
        ▶
      </button>
    </div>
  )
}
