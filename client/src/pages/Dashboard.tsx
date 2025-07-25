import Title from "antd/es/typography/Title";
import { Counter } from "./Calculator/Counter";
import { Row } from "antd";

export default function Dashboard() {
  return (
    <>
      <div >
        <Title>Dashboard</Title>
        <Row >
          <Counter />
        </Row>
        
      </div>
    </>
  );
}