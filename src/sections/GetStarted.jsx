// src/components/GetStarted.jsx
import React, { useState, useEffect } from 'react'
import { ChevronRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import AntarikhImg from '/images/Antarikh.png'

const GetStarted = () => {
  const [started, setStarted] = useState(false)
  const [showTitle, setShowTitle] = useState(false)
  const [showSubtitle, setShowSubtitle] = useState(false)
  const [showDescription, setShowDescription] = useState(false)
  const [showImage, setShowImage] = useState(false)
  const [showButton, setShowButton] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const t1 = setTimeout(() => setShowTitle(true), 400)
    const t2 = setTimeout(() => setShowSubtitle(true), 900)
    const t3 = setTimeout(() => setShowDescription(true), 1400)
    const t4 = setTimeout(() => setShowImage(true), 1900)
    const t5 = setTimeout(() => setShowButton(true), 2400)
    return () => [t1, t2, t3, t4, t5].forEach(clearTimeout)
  }, [])

  useEffect(() => {
    if (started) navigate('/home')
  }, [started, navigate])

  return (
    <div className="h-screen w-full bg-black overflow-x-hidden relative flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-black to-gray-900/30"></div>

      {/* DESKTOP LAYOUT */}
      <div className="hidden lg:flex relative w-full h-full items-center">
        {/* LEFT - TEXT */}
        <div className="w-full lg:w-1/2 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 z-10">
          <div className={`transition-all duration-1000 ${showTitle ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <h1
              className="font-black text-[#F2F2F2] leading-none mb-6 whitespace-nowrap"
              style={{
                fontFamily: "'Black Ops One', system-ui, -apple-system, sans-serif",
                letterSpacing: '-0.02em',
                fontSize: 'clamp(2.5rem, 6vw, 70px)',
              }}
            >
              ANTARIKH BANERJEE
            </h1>
          </div>

          <div className={`transition-all duration-1000 delay-200 ${showSubtitle ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <h2
              className="text-3xl md:text-5xl lg:text-5xl font-bold text-gray-300 mb-8"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '-0.01em' }}
            >
              WEB DEVELOPER
            </h2>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${showDescription ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-xl font-light leading-relaxed">
              Transforming ideas into engaging, modern, and scalable web solutions.
            </p>
          </div>

          <div className={`transition-all duration-1000 delay-500 ${showButton ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <button
              onClick={() => setStarted(true)}
              className="group relative px-12 py-5 bg-white text-black text-xl md:text-2xl font-bold rounded-none overflow-hidden transition-all duration-500 hover:bg-gray-200 hover:scale-105 hover:shadow-2xl"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              <span className="relative z-10 flex items-center space-x-3">
                <span>GET STARTED</span>
                <ChevronRight className="w-7 h-7 transition-transform group-hover:translate-x-2" strokeWidth={3} />
              </span>
            </button>
          </div>
        </div>

        {/* RIGHT - IMAGE */}
        <div className="w-1/2 h-full flex items-center justify-center pr-6">
          <div className={`transition-all duration-1200 ${showImage ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-90 translate-x-20'}`}>
            <div className="relative w-full max-w-[640px] mr-8 flex items-center justify-center">
              <img
                src={AntarikhImg}
                alt="Antarikh Banerjee"
                draggable={false}
                className="w-full h-auto max-h-[100vh] object-contain object-top"
              />
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE LAYOUT - STACKED AND OVERLAPPING */}
      <div className="lg:hidden relative w-full h-full flex items-center justify-start px-6">
        {/* Image as background */}
        <div className={`absolute inset-0 transition-all duration-1000 ${showImage ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          <img
            src={AntarikhImg}
            alt="Antarikh Banerjee"
            draggable={false}
            className="w-full h-full object-cover object-top opacity-20"
          />
        </div>

        {/* Content centered over image */}
        <div className="relative z-10 flex flex-col items-start text-start max-w-xs">
          <div className={`transition-all duration-1000 ${showTitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h1
              className="text-white font-black mb-3 text-2xl"
              style={{
                fontFamily: "'Black Ops One', system-ui, -apple-system, sans-serif",
                letterSpacing: '-0.02em',
              }}
            >
              ANTARIKH BANERJEE
            </h1>
          </div>

          <div className={`transition-all duration-1000 delay-200 ${showSubtitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <h2 className="text-white font-semibold text-lg mb-4">WEB DEVELOPER</h2>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${showDescription ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <p className="text-gray-300 text-sm mb-6">
              Transforming ideas into engaging, modern, and scalable web solutions.
            </p>
          </div>

          <div className={`transition-all duration-1000 delay-500 ${showButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <button
              onClick={() => setStarted(true)}
              className="group relative px-6 py-3 bg-white text-black text-sm font-bold rounded transition-all duration-300 hover:bg-gray-200 hover:scale-105"
            >
              <span className="flex items-center gap-2">
                <span>GET STARTED</span>
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" strokeWidth={3} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetStarted
