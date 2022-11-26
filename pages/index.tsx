import Image from 'next/image'
import { useState } from 'react'

import ReactCardFlip from 'react-card-flip'

const Home = () => {
  const [isFlipped, setIsFlipped] = useState(false)
  const control = 'flex h-screen items-center justify-center text-white snap-start'
  return (
    <section className={`${control} bg-slate-400`}>
      <div className="mx-0 my-auto content-center">
        <ReactCardFlip
          isFlipped={isFlipped}
          flipDirection="horizontal"
          flipSpeedFrontToBack={1}
          flipSpeedBackToFront={1}
        >
          <Image
            className=" h-full w-full rounded-xl object-cover"
            src="/card_font.jpg"
            alt="Picture of the author"
            width={500}
            height={700}
            onClick={() => setIsFlipped(true)}
          ></Image>
          <Image
            className="h-full w-full rounded-xl object-cover"
            src="/card_back.jpg"
            alt="Picture of the author"
            width={500}
            height={700}
            onClick={() => setIsFlipped(false)}
          ></Image>
        </ReactCardFlip>
      </div>
    </section>
  )
}

export default Home
