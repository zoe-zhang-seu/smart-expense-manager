import { Counter } from "./Calculator/Counter";

export default function Dashboard() {
  return (
    <>
      <div className="p-8">
        <h1 className="text-3xl font-bold text-blue-600">Dashboard</h1>
        <p className="mt-4 text-gray-600">Welcome to your dashboard!</p>
        <Counter />
      </div>
    </>
  );
}