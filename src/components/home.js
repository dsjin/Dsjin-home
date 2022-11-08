import Typed from 'react-typed'
import { SocialIcon } from 'react-social-icons'

export default function Home() {
  return (
    <div>
      <div
        class="absolute right-4 top-4"
        style="z-index:2"
      >
        <a
          href="https://blog.dsjin.co"
        >
          Blog
        </a>
      </div>
      {/* <lottie-player src="https://assets1.lottiefiles.com/private_files/lf30_ijlzmjq6.json"  background="transparent"  speed="1"  style="width: 100%; height: 100%;position: absolute"  loop autoplay /> */}
      <div
        class="flex items-center justify-center w-full h-screen"
      >
        <div
          class="relative text-center px-4"
        >
          <Typed
            className="text-white md:text-7xl text-4xl"
            strings={['DSJIN', 'Web full-stack developer', 'Dispatch IT engineer @ Human Resocia']}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </div>
      </div>
      <div
        class="flex flex-col justify-around items-center w-full h-screen py-0 md:py-40 px-4"
      >
        <h1
          class="md:text-6xl text-4xl"
        >
          About me
        </h1>
        <div
          class="flex flex-col md:flex-row items-center justify-center"
        >
          <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_o1JRaPxx1E.json"  background="transparent"  speed="1"  class="md:w-1/5 w-4/5 md:mr-10" loop autoplay />
          <p
            class="md:leading-relaxed md:text-4xl text-2xl indent-12 md:indent-20 md:w-2/5"
          >
            An ordinary web full-stack developer who currently lives in Japan (and a DOG person 🐕). I primarily focus on frontend developing but I am also learning about backend and CI/CD stuff.
            I'm a little bit shy but feel free to contact me via these services below.
          </p>
        </div>
        <div
          class="flex justify-around w-full md:w-2/5"
        >
          <SocialIcon url="https://twitter.com/dsjinj" />
          <SocialIcon url="https://github.com/dsjin" bgColor="white" />
          <SocialIcon url="https://www.linkedin.com/in/thatchakonj/" />
        </div>
      </div>
    </div>
  )
}
