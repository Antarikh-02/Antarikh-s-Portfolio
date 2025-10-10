// src/components/GetStarted.jsx
import React, { useState, useEffect } from 'react'
import { ChevronRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import AntarikhImg from '/images/Antarikh.png' // <-- exact path & case

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

  useEffect(() => { if (started) navigate('/home') }, [started, navigate])

  return (
    <div className="h-screen w-full bg-black overflow-x-hidden relative flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-black to-gray-900/30"></div>

      <div className="relative w-full h-full flex items-center">
        {/* LEFT - TEXT */}
        <div className="w-full lg:w-1/2 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 z-10">
          <div className={`transition-all duration-1000 ${showTitle ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <h1 className="font-black text-[#F2F2F2] leading-none mb-6 whitespace-nowrap"
                style={{ fontFamily: "'Black Ops One', system-ui, -apple-system, sans-serif", letterSpacing: '-0.02em', fontSize: 'clamp(2.5rem, 6vw, 70px)' }}>
              ANTARIKH BANERJEE
            </h1>
          </div>

          <div className={`transition-all duration-1000 delay-200 ${showSubtitle ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <h2 className="text-3xl md:text-5xl lg:text-5xl font-bold text-gray-300 mb-8"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif', letterSpacing: '-0.01em' }}>
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
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              <span className="relative z-10 flex items-center space-x-3">
                <span>GET STARTED</span>
                <ChevronRight className="w-7 h-7 transition-transform group-hover:translate-x-2" strokeWidth={3} />
              </span>
            </button>
          </div>
        </div>

        {/* RIGHT - IMAGE: CENTERED vertically so top of head isn't clipped */}
        <div className="hidden lg:flex w-1/2 h-full items-center justify-center pr-6">
          <div className={`transition-all duration-1200 ${showImage ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-90 translate-x-20'}`}>
            <div className="relative w-full max-w-[640px] mr-12 flex items-center justify-center">
              <img
                src={AntarikhImg}
                alt="Antarikh Banerjee"
                draggable={false}
                className="w-full h-auto max-h-[78vh] object-contain object-top"
                // optional srcSet for high dpi devices:
                // srcSet={`${AntarikhImg} 1x, ${AntarikhImg} 2x`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* mobile fallback */}
      <div className="lg:hidden absolute bottom-0 right-0 w-full h-1/3 opacity-30">
        <div className={`transition-all duration-1200 ${showImage ? 'opacity-30 scale-100' : 'opacity-0 scale-90'}`}>
          <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
            <svg className="w-32 h-32 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GetStarted
