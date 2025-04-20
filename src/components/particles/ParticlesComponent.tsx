"use client";



// import { useEffect, useMemo, useState } from "react";

// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { type Container, type ISourceOptions, MoveDirection, OutMode,} from "@tsparticles/engine";
// import { loadSlim } from "@tsparticles/slim"; 

// const ParticlesComponent = () => {
//   const [init, setInit] = useState(false);

//   useEffect(() => {
//     initParticlesEngine(async (engine) => {
    
//       await loadSlim(engine);
//     }).then(() => {
//       setInit(true);
//     });
//   }, []);

//   const particlesLoaded = async (container?: Container): Promise<void> => {
//     console.log(container);
//   };

//   const options: ISourceOptions = useMemo(
//     () => ({
//       fullScreen: {
//         enable: true,
//         zIndex: -1, 
//       },
      
//       background: {
//         color: {
//           value:" #0d47a1",
//         },
//       },
//       fpsLimit: 120,
//       interactivity: {
//         events: {
//           onClick: {
//             enable: true,
//             mode:" push",
//           },
//           onHover: {
//             enable: true,
//             mode: "mode",
//           },
//         },
//         modes: {
//           push: {
//             quantity: 4,
//           },
//           repulse: {
//             distance: 200,
//             duration: 0.4,
//           },
//           parallax: {
//             enable: true,       
//             force: 60,          
//             smooth: 10, 
//           },
//         },
//       },
//       particles: {
//         color: {
//           value: "#ffffff",
//         },
//         links: {
//           color: "#ffffff",
//           distance: 150,
//           enable: true,
//           opacity: 0.5,
//           width: 1,
//         },
//         move: {
//           direction: MoveDirection.none,
//           enable: true,
//           outModes: {
//             default: OutMode.out,
//           },
//           random: false,
//           speed: 6,
//           straight: false,
//         },
//         number: {
//           density: {
//             enable: true,
//           },
//           value: 80,
//         },
//         opacity: {
//           value: 0.5,
//         },
//         shape: {
//           type: "circle",
//         },
//         size: {
//           value: { min: 1, max: 5 },
//         },
//       },
//       detectRetina: true,

      
//     }),
//     [],
//   );

//   if (init) {
//     return (
//       <Particles
//         id="tsparticles"
//         particlesLoaded={particlesLoaded}
//         options={options}
//       />
//     );
//   }

//   return <></>;
// };

// export default ParticlesComponent;


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
      await loadSlim(engine); // بارگزاری نسخه slim
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: {
        enable: true,
        zIndex: -1, // پشت همه محتوا
      },
      background: {
        color: {
          value: "transparent", // رنگ پس‌زمینه (tailwind slate-900)
          // value: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
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
            // parallax: {
            //   enable: true,
            //   force: 100,  // شدت حرکت ذرات نسبت به موس
            //   smooth: 20   // نرمی حرکت، عدد بیشتر = حرکت نرم‌تر
            // }
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
          // attract: {
          //   distance: 200,
          //   duration: 0.4,
          //   factor: 2, // شدت جذب، می‌تونی کم و زیادش کنی
          // },
          
          // parallax: {
          //   enable: true,
          //   force: 100,
          //   smooth: 20,
          // },

          bubble: {
            distance: 120,
            size: 1, // کوچیک می‌شن
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
          // color: "#94a3b8", // slate-400
          color: "#64748b", // خاکستری مات

          distance: 150,
          enable: true,
          opacity: 0.27,
          width: 0.8,
          
          //   triangles: {
          //     enable: true,
          //     opacity: 0.1,
        
          // },
          
        },
        move: {
          direction: MoveDirection.none,
          // direction:"none",
          enable: true,
          outModes: {
            // default: "bounce",
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
