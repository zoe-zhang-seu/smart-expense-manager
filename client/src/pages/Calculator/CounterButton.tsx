import { useContext } from "react";
import { CounterContext } from "./CounterContext";
import { Button } from "../../components/Button";

export function CounterButton() {
    const { increment } = useContext(CounterContext);
    return (
        <Button onClick={increment}>
            Count +1
        </Button>
    );
}
