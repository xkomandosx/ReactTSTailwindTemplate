import { DependencyList, EffectCallback, useEffect } from "react";

import useIsFirstRender from "./useIsFirstRender";

function useUpdateEffect(effect: EffectCallback, deps?: DependencyList) {
  const isFirst = useIsFirstRender();

  useEffect(() => {
    if (!isFirst) {
      return effect();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

export default useUpdateEffect;

//USAGE
// import { useEffect, useState } from 'react'

// import { useUpdateEffect } from '..'

// export default function Component() {
//   const [data, setData] = useState<number>(0)
//   useEffect(() => {
//     console.log('Normal useEffect', { data })
//   }, [data])

//   useUpdateEffect(() => {
//     console.log('Update useEffect only', { data })
//   }, [data])

//   return (
//     <div>
//       <p>Open your console</p>
//       <button onClick={() => setData(Date.now())}>Update data</button>
//     </div>
//   )
// }
