import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import data from '../data.json'

const App = () => {
  const comp = useRef(null);
  const spans = ['#copy1', '#copy2', '#copy3', '#copy4'];
  const intro = '#introSection';
  const next = '#nextSection';

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const timeline = gsap.timeline();

      timeline.from(intro, {
        xPercent: '-100',
        duration: 1.3,
        delay: 0.3
      })
      .from(spans, {
        opacity: 0,
        y: '+=30',
        stagger: 0.5
      })
      .to(spans, {
        opacity: 0,
        y: '-=30',
        delay: 0.3,
        stagger: 0.5
      })
      .to(intro, {
        yPercent: -100,
        duration: 1.3
      })
      .from(next, {
        opacity: 0,
        duration: 0.5
      })
    }, comp);

    return () => ctx.revert();
  }, []);


  return (
    <div className="relative" ref={comp}>
      <div 
        id="introSection"
        className="h-screen flex flex-col justify-center place-items-center p-10 bg-red-700 absolute top-0 left-0 z-10 w-full gap-10 tracking-tight">
          <h1 className="text-6xl font-semibold text-white">
            {data.h1.map((span, i) => (
              <span key={i} id={`copy${i + 1}`} className="block">
                {span.copy}
              </span>
            ))}
          </h1>
      </div>

      <div 
        id="nextSection"
        className="h-screen flex bg-green-600 relative justify-center place-items-center">
        <h2 className='text-9xl font-bold text-white'>2024</h2>
      </div>
    </div>
    
  )
}




export default App