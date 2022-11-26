import Image from 'next/image'

const Home = () => {
  const control = 'flex h-screen items-center justify-center text-white snap-start'
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll">
      <section className={`${control} bg-slate-400`}>
        <div className="flex min-h-full flex-col justify-center">
          <div className="group h-128 w-96 [perspective:1000px]">
            <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0">
                <Image
                  className=" h-full w-full rounded-xl object-cover"
                  src="/card_font.jpg"
                  alt="Picture of the author"
                  width={500}
                  height={700}
                ></Image>
              </div>
              <div className="absolute inset-0 h-full w-full rounded-xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <Image
                  className="h-full w-full rounded-xl object-cover"
                  src="/card_back.jpg"
                  alt="Picture of the author"
                  width={500}
                  height={700}
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className={`${control} bg-yellow-200`}>2222222222</section> */}
    </div>
  )
}

export default Home
