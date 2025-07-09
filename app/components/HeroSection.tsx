import Link from 'next/link'
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { Button } from './ui/moving-border'

const HeroSection = () => {
    return (
        <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
            <Spotlight
                className='-top-4 left-0 md:left-60 md:-top-20 animate-spotlight'
                fill='white'
            />
            <div className='p-4 relative z-10 w-full text-center'>
                <h1 className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>Master the art of Zauq-E-Sama</h1>
                <p className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'>Dive into comprehesive Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos libero iure illo ea fugiat non consectetur ipsum voluptatibus eveniet molestias. Exercitationem magni autem necessitatibus distinctio neque quis, iure sunt placeat.</p>
                <div className='mt-4'>
                    <Link href="/courses">
                        <Button
                            borderRadius="1.75rem"
                            className="bg-white text-black hover:bg-neutral-100 
             dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800 
             border border-neutral-200 dark:border-slate-800 
             hover:cursor-pointer transition-colors duration-200"
                        >
                            Explore Courses
                        </Button>

                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
// import Link from 'next/link'
// import React from 'react'
// import { Spotlight } from './ui/Spotlight'

// const HeroSection = () => {
//     return (
//         <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
//             <Spotlight className='-top-4 left-0 md:left-60 md:-top-20' fill='white' />
//             <div className='p-4 relative z-10 w-full text-center'>
//                 <h1 className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>Master the art of Zauq-E-Sama</h1>
//                 <p className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'>Dive into comprehesive Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos libero iure illo ea fugiat non consectetur ipsum voluptatibus eveniet molestias. Exercitationem magni autem necessitatibus distinctio neque quis, iure sunt placeat.</p>
//                 <div className='mt-4'>
//                     <Link href="/courses">Explore Course</Link>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default HeroSection