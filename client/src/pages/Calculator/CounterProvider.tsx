import { useCallback, useEffect, useState } from "react";
import { CounterContext } from "./CounterContext";
interface IProps{
  children: React.ReactNode;
}
export function  CounterProvider({children}: IProps) {
    const [result, setResult] = useState(0);
    // useCallback is used to memoize the increment function
    // always use this function so no need to recreate
    const increment = useCallback(() => {
        setResult((prev) => prev + 1);
    }, []);

    //when result change, console log invoke
    useEffect(()=>{
        console.log("Result updated:", result);
    },[result]);

return (
    <CounterContext.Provider value={{ count:result, increment }}>
      {children}
    </CounterContext.Provider>
  );
}