import React from 'react'

const Hero = ({
    title = 'Werkprofi',
    subtitle ='It takes a village to raise a child',
}) => {
  return (
        
        <section className="bg-gradient-to-r from-yellow-400 via-red-500 to-green-600 py-20 mb-4"> 
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
        >
          <div className="text-center">
            <h1
              className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl"
            >
             {title}
            </h1>
            <p className="my-4 text-xl text-white">
           {subtitle}
            </p>
          </div>
        </div>
      </section>
  )
}

export default Hero