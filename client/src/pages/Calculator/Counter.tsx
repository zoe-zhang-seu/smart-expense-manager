import Title from "antd/es/typography/Title";
import { CustomCard } from "../../components/Card";
import { CounterButton } from "./CounterButton";
import { CounterProvider } from "./CounterProvider";
import { CounterDisplay } from "./CounterDisplay";

export function Counter(){
    return (
        <CustomCard>
            <CounterProvider>
                <Title>Counter </Title>
                <CounterDisplay/>
                <CounterButton />
            </CounterProvider>
        </CustomCard>
    );
}