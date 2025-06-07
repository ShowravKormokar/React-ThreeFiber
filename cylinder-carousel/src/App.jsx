import { Canvas } from '@react-three/fiber'
import "./../src/style.css";
import { OrbitControls } from '@react-three/drei';
import Cylinder from "./Cylinder";
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing'


const App = () => {
  return (
    <>
      <div className='w-full h-auto relative text-blue-400 z-50'>
        <div className='px-20 py-6 w-full absolute flex justify-between items-center'>
          <h1>©ShowravK.®</h1>
          <a className='px-[10px] py-[2px] border-1 rounded-4xl flex items-center justify-between gap-2 cursor-pointer' href="https://github.com/ShowravKormokar"><span className='text-2xl font-extrabold  rotate-[-45deg]'>→</span><span className='font-bold'>Github</span></a>
        </div>
      </div>
      <Canvas flat camera={{ fov: 40 }}>
        <OrbitControls />
        <ambientLight />
        <Cylinder />
        <EffectComposer>
          <Bloom
            mipmapBlur
            intensity={4.0} // The bloom intensity.
            luminanceThreshold={0.7} // luminance threshold. Raise this value to mask out darker elements in the scene.
            luminanceSmoothing={1} // smoothness of the luminance threshold. Range is [0, 1]

          />
          {/* <ToneMapping adaptive /> */}
        </EffectComposer>
      </Canvas>
    </>
  )
}

export default App  