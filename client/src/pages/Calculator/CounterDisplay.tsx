import { useContext, useMemo } from "react";
import { CounterContext } from "./CounterContext";

export function CounterDisplay() {
    const { count } = useContext(CounterContext);
  
    //why not use useCallback here?
    //useCallback is used to memoize functions, while useMemo is used to memoize
    //values or computations. In this case, we are memoizing a computed value (squared count),
    //so useMemo is appropriate. If we were memoizing a function, we would use useCallback.
    const squaredCount = useMemo(() => {
        return count * count;
    }, [count]);
    return (
        <div className="text-x font-bold text-gray-800">
            Current Count: {count}
            <br />
            Squared Count: {squaredCount}
        </div>
    );
}