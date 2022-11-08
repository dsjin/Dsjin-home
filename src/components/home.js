import Typed from 'react-typed';

export default function Home() {
  return (
    <div>
      <div
        style="position:absolute;right:20px;top:20px;z-index:2"
      >
        <a
          href="https://blog.dsjin.co"
        >
          Blog
        </a>
      </div>
      {/* <lottie-player src="https://assets1.lottiefiles.com/private_files/lf30_ijlzmjq6.json"  background="transparent"  speed="1"  style="width: 100%; height: 100%;position: absolute"  loop autoplay /> */}
      <div
        class="flex items-center justify-center w-screen h-screen"
      >
        <div
          class="relative text-center px-4"
        >
          <Typed
            className="text-white md:text-7xl text-4xl"
            strings={['DSJIN', 'Web full stack developer', 'Dispatch engineer @ Human Resocia']}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </div>
      </div>
    </div>
  )
}