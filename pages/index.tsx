import type { NextPage } from 'next'


const Home: NextPage = () => {
  const control = 'flex h-screen items-center justify-center text-white snap-start'
  return (
    <div className='snap-mandatory snap-y h-screen overflow-y-scroll'>
      <section className={`${control} bg-yellow-200`} >
        1
      </section>
      <section className={`${control} bg-slate-400`}>
        2
      </section>
    </div>
  )
}

export default Home
