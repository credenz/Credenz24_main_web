import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

// Function to generate random numbers within a range
function getRandomInRange(min, max) {
    return Math.random() * (max - min) + min;
}

function UnderwaterBubbles({ count }) {
    const bubbles = useRef([]);

    // Function to animate bubbles
    useFrame(() => {
        bubbles.current.forEach((bubble) => {
            // Move the bubble upwards
            bubble.position.y += 0.05;
            // Reset position if the bubble goes above the water surface
            if (bubble.position.y > 0.3) {
                bubble.position.set(
                    getRandomInRange(-100,100),
                    getRandomInRange(-200,0),
                    getRandomInRange(-100,100)
                );
            }
        });
    });

    return (
        <>
            {/* Create multiple bubbles */}
            {Array.from({ length: count }).map((_, index) => (
                <Sphere
                    key={index}
                    ref={(ref) => (bubbles.current[index] = ref)}
                    args={[0.4, 16, 16]}
                    position={[
                        getRandomInRange(-50, 50),
                        getRandomInRange(-200, 0),
                        getRandomInRange(-50, 50)
                    ]}
                >
                    <meshPhongMaterial color="white" transparent opacity={0.2} />
                </Sphere>
            ))}
        </>
    );
}

export default UnderwaterBubbles