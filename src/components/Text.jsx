import {
  Text3D,
  Center,
  MeshTransmissionMaterial
} from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { RGBELoader } from 'three-stdlib'

const Text = () => {
  const texture = useLoader(RGBELoader, 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr');


  return (
    <>
      <Center scale={[2, 2, 2]} front top>
        <Text3D
          castShadow
          bevelEnabled
          font={'../Inter_Medium_Regular.json'}
          scale={5}
          letterSpacing={-0.03}
          height={0.25}
          bevelSize={0.01}
          bevelSegments={10}
          curveSegments={128}
          bevelThickness={0.01}
        >
          {`2024`}

          <MeshTransmissionMaterial 
            backside={true}
            backsideThickness={0.3}
            samples={16}
            resolution={1024}
            transmission={1}
            clearcoat={0}
            clearcoatRoughness={0.0}
            thickness={0.3}
            chromaticAberration={5}
            anisotropy={0.3}
            roughness={0}
            distortion={0.5}
            distortionScale={0.1}
            temporalDistortion={0}
            ior={1.5}
            color={"#ff9cf5"}
            gColor={"#ff7eb3"}
            shadow={"#750d57"}
            autoRotate={false} 
            background={texture} />
        </Text3D>
      </Center>
    </>
  )
}

export default Text;