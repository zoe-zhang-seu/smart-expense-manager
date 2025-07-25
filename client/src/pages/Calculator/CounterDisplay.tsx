import { useContext, useMemo } from "react";
import { CounterContext } from "./CounterContext";
import Paragraph from "antd/es/typography/Paragraph";

export function CounterDisplay() {
    const { count } = useContext(CounterContext);
  
    const squaredCount = useMemo(() => {
        return count * count;
    }, [count]);
    return (
        <Paragraph>
            Current Count: {count}
            <br />
            Squared Count: {squaredCount}
        </Paragraph>
    );
}