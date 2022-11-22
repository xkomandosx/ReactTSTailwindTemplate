import { Dispatch, SetStateAction, useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";
import useMediaQuery from "./useMediaQuery";
import useUpdateEffect from "./useUpdateEffect";

const COLOR_SCHEME_QUERY = "(prefers-color-scheme: dark)";

type TernaryDarkMode = "system" | "dark" | "light";
interface UseTernaryDarkModeOutput {
  isDarkMode: boolean;
  ternaryDarkMode: TernaryDarkMode;
  setTernaryDarkMode: Dispatch<SetStateAction<TernaryDarkMode>>;
  toggleTernaryDarkMode: () => void;
}

function useTernaryDarkMode(): UseTernaryDarkModeOutput {
  const isDarkOS = useMediaQuery(COLOR_SCHEME_QUERY);
  const [ternaryDarkMode, setTernaryDarkMode] =
    useLocalStorage<TernaryDarkMode>("usehooks-ts-ternary-dark-mode", "system");
  const [isDarkMode, setDarkMode] = useState<boolean>(isDarkOS);

  // Update darkMode if os prefers changes
  useUpdateEffect(() => {
    if (ternaryDarkMode === "system") {
      setDarkMode(isDarkOS);
    }
  }, [isDarkOS]);

  useEffect(() => {
    switch (ternaryDarkMode) {
      case "light":
        setDarkMode(false);
        break;
      case "system":
        setDarkMode(isDarkOS);
        break;
      case "dark":
        setDarkMode(true);
        break;
    }
  }, [ternaryDarkMode, isDarkOS]);

  function toggleTernaryDarkMode() {
    const toggleDict: Record<TernaryDarkMode, TernaryDarkMode> = {
      light: "system",
      system: "dark",
      dark: "light",
    };
    setTernaryDarkMode((prevMode) => toggleDict[prevMode]);
  }

  return {
    isDarkMode,
    ternaryDarkMode,
    setTernaryDarkMode,
    toggleTernaryDarkMode,
  };
}

export default useTernaryDarkMode;

//USAGE
// import { useTernaryDarkMode } from '..'

// export default function Component() {
//   const {
//     isDarkMode,
//     ternaryDarkMode,
//     setTernaryDarkMode,
//     toggleTernaryDarkMode,
//   } = useTernaryDarkMode()
//   type TernaryDarkMode = typeof ternaryDarkMode

//   return (
//     <div>
//       <p>Current theme: {isDarkMode ? 'dark' : 'light'}</p>
//       <p>ternaryMode: {ternaryDarkMode}</p>
//       <p>
//         Toggle between three modes
//         <button onClick={toggleTernaryDarkMode}>
//           Toggle from {ternaryDarkMode}
//         </button>
//       </p>
//       <p>
//         Select a mode
//         <br />
//         <select
//           name="select-ternaryDarkMode"
//           onChange={ev =>
//             setTernaryDarkMode(ev.target.value as TernaryDarkMode)
//           }
//           value={ternaryDarkMode}
//         >
//           <option value="light">light</option>
//           <option value="system">system</option>
//           <option value="dark">dark</option>
//         </select>
//       </p>
//     </div>
//   )
// }
