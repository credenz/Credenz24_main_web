// import { Html, useProgress } from '@react-three/drei'
// import React, { useEffect, useState } from 'react'
// import './LoadPage.css'
// export default function LoadPage() {
//   const {progress}=useProgress()
//   const [percent,setPercent]=useState(0)
//   useEffect(()=>{
//     setPercent(progress < 99999 ? Math.max(percent,Math.round(progress)): 99999);
//   },[percent,progress])
//   return (

//     <Html >
//       <body className='w-[50%] h-[50%] '>
        
//       <div class="sea">
//     <div class="circle-wrapper">
//         <div class="bubble"></div>
//         <div class="submarine-wrapper">
//             <div class="submarine-body">
//                 <div class="window"></div>
//                 <div class="engine"></div>
//                 <div class="light"></div>
//             </div>
//             <div class="helix"></div>
//             <div class="hat">
//               <div class="leds-wrapper">
//                   <div class="periscope"></div>
//                   <div class="leds"></div>
//               </div>
//             </div>
//         </div>
//     </div>
// </div>
// <div className='text-slate-800 text-4xl'>Hello Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas facilis, necessitatibus, adipisci saepe delectus explicabo veniam quod laboriosam quis accusantium sequi ad eius deleniti consequatur laudantium, eveniet architecto dolorem praesentium!</div>


//       </body>
//    </Html> 
//   )
// }
import { Html, useProgress } from '@react-three/drei'
import React, { useEffect, useState } from 'react'
import './LoadPage.css'

export default function LoadPage() {
  const { progress } = useProgress()
  const [percent, setPercent] = useState(0)

  useEffect(() => {
    setPercent(progress < 99999 ? Math.max(percent, Math.round(progress)) : 99999)
  }, [percent, progress])

  return (
    <Html>
      <div className='load-page-container'>
        <div className='text-container'>
          <p className='loading-text'>Loading...</p>
          <p className='progress-text'>{percent}%</p>
        </div>
      </div>
    </Html>
  )
}
