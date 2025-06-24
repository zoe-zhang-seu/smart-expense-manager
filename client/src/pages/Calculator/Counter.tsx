import { Card } from "../../components/Card";
import { CounterButton } from "./CounterButton";
import { CounterDisplay } from "./CounterDisplay";
import { CounterProvider } from "./CounterProvider";

export function Counter(){
    return (
        <Card>
            <CounterProvider>
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Counter </h1>
                <CounterDisplay />
                <CounterButton />
            </CounterProvider>
        </Card>
    );
}