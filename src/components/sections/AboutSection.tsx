import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, Box, Torus } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { cn } from "@/lib/utils";

// Animated 3D Scene Component
const AnimatedScene = () => {
  const sphereRef = useRef<THREE.Mesh>(null);
  const boxRef = useRef<THREE.Mesh>(null);
  const torusRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (sphereRef.current) {
      sphereRef.current.rotation.x = time * 0.5;
      sphereRef.current.rotation.y = time * 0.3;
      sphereRef.current.position.y = Math.sin(time) * 0.5;
    }
    
    if (boxRef.current) {
      boxRef.current.rotation.x = time * 0.7;
      boxRef.current.rotation.z = time * 0.4;
    }
    
    if (torusRef.current) {
      torusRef.current.rotation.x = time * 0.3;
      torusRef.current.rotation.y = time * 0.6;
    }
  });

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#64748b" />
      
      <Sphere ref={sphereRef} position={[-2, 0, 0]} args={[0.8, 32, 32]}>
        <meshStandardMaterial color="#3b82f6" transparent opacity={0.8} />
      </Sphere>
      
      <Box ref={boxRef} position={[2, 0, 0]} args={[1, 1, 1]}>
        <meshStandardMaterial color="#10b981" wireframe />
      </Box>
      
      <Torus ref={torusRef} position={[0, 2, 0]} args={[1, 0.3, 16, 100]}>
        <meshStandardMaterial color="#f59e0b" transparent opacity={0.7} />
      </Torus>
      
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
    </>
  );
};

const AboutSection = () => {
  return (
    <section className="py-24 px-8 bg-muted/50 backdrop-blur-sm">{/* Lighter muted background */}
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-foreground">
              Efficiency Without Extra Hands
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From repetitive admin tasks to complex decision-making support, our AI workflows and agents adapt to your business and scale with your needs. Faster operations, lower costs, and smarter outcomes—without adding headcount.
            </p>
          </motion.div>

          {/* Animated Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 2, 0]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              <Canvas className="w-full h-96 rounded-2xl">
                <AnimatedScene />
              </Canvas>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;