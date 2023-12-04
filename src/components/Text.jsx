import { useRef } from 'react'
import {
  Text3D,
  Center,
  useMatcapTexture
} from '@react-three/drei'
import { useThree } from "@react-three/fiber";


const Text = () => {
  const [matcapTexture] = useMatcapTexture("CB4E88_F99AD6_F384C3_ED75B9");
  const ref = useRef();
  const { width: w, height: h } = useThree((state) => state.viewport);

  return (
    <>
      <Center scale={[1, 1, 1]}>
        <Text3D
          position={[0, 0, -10]}
          scale={[1, 1, 1]}
          ref={ref}
          size={w / 9}
          maxWidth={[-w / 5, -h * 2, 3]}
          font={'../Inter_Medium_Regular.json'}
          curveSegments={24}
          brevelSegments={1}
          bevelEnabled
          bevelSize={0.08}
          bevelThickness={0.03}
          height={1}
          lineHeight={0.9}
        >
          {`2024`}
          <meshMatcapMaterial color="white" matcap={matcapTexture} />
        </Text3D>
      </Center>
    </>
  )
}

export default Text;