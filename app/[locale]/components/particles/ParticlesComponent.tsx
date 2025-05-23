
"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesComponent() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); 
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: {
        enable: true,
        zIndex: -1, 
      },
      background: {
        color: {
          value: "transparent",
         
        },
        opacity: 1,
      },
      fpsLimit: 120,
      interactivity: {
        detectsOn: "window",
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: ["bubble","repulse"],
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
        
          repulse: {
            distance: 120,
            duration: 0.8,
            factor: 100,
          },
          bubble: {
            distance: 120,
            size: 1, 
            duration: 0.3,
            opacity: 0,
            color: {
              value: "#9333ea",
            },
          },
        },
      },

      particles: {
        color: {
          value: ["#ffffff"], 
        },
        links: {

          color: "#64748b",

          distance: 150,
          enable: true,
          opacity: 0.27,
          width: 0.8,
          
         
          
        },
        move: {
          direction: MoveDirection.none,
       
          enable: true,
          outModes: {
           
            default: OutMode.bounce,
          },
          speed: 1.5,
          random: true,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 120,
        },
        opacity: {
          value: { min: 0.1, max: 1},
           animation: {
    enable: true,
    speed: 1,
    minimumValue: 0.1,
    sync: false,
  },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
           animation: {
          enable: true,
          speed: 2,
          minimumValue: 1,
          sync: false,
  },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return init ? (
 
<Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} />
  ) : null;
}
