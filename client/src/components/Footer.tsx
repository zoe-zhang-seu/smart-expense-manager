import { Layout, Typography } from "antd";


export function Footer() {
  const { Footer: AntFooter } = Layout;
  const { Text } = Typography;
  return (
    <AntFooter style={{ textAlign: "center", backgroundColor: "#f5f5f5", padding: "16px" }}>
      <Text type="secondary" style={{ fontSize: "14px" }}>
        © {new Date().getFullYear()} toy project — v1.0.0
      </Text>
    </AntFooter>
  );
}