import React, { Suspense } from 'react'
import * as THREE from "three"
import { Canvas } from '@react-three/fiber';

function Main() {
    return (
        <Suspense fallback={null}>

        <Canvas>
            <mesh>
                <boxGeometry args={[2, 2, 2]} />
                <meshNormalMaterial />
            </mesh>
            <hemisphereLight />
        </Canvas>
    </Suspense>
    )
}

export default Main