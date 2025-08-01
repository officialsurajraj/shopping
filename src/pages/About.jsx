import React from 'react'
import Title from './../components/Title';
import { assets } from './../assets/frontend_assets/assets';
import NewsLatterBox from './../components/NewsLatterBox';

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[510px]' src={assets.another_home} />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>At MEMORABLE, we believe shopping should be more than just a transaction — it should be an experience you remember. Our brand was born from a passion for quality, creativity, and customer-first thinking. Whether you're here for style, simplicity, or statement pieces, we’re here to help you discover products that feel as good as they look.
          We handpick every item with one goal in mind: to leave a lasting impression. From timeless classics to bold new trends, MEMORABLE is your space to explore what defines you — without compromise. Our collections are crafted to reflect individuality, while keeping comfort, affordability, and aesthetics at the heart of everything we do.

          </p>
          <p>We don’t just sell products; we curate pieces that resonate. Every collection, every design, and every detail is chosen to help you express your unique story. Whether you’re refreshing your wardrobe, upgrading your lifestyle, or gifting someone special, we’ve got you covered.

          But it doesn’t end there. What makes MEMORABLE truly different is our commitment to people. We believe great brands are built on trust, transparency, and a genuine connection with our community. From fast support to smooth deliveries, your experience matters just as much as the product in your hands.

          So go ahead — explore, enjoy, and express yourself. Make every moment MEMORABLE. </p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission at memorable is a empower customers with choice</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance : </b>
          <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, aliquam nemo eum nobis alias architecto repellat odit nam veritatis.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience : </b>
          <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, aliquam nemo eum nobis alias architecto repellat odit nam veritatis.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service : </b>
          <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste, aliquam nemo eum nobis alias architecto repellat odit nam veritatis.</p>
        </div>
      </div>
      <NewsLatterBox />
    </div>
  )
}

export default About