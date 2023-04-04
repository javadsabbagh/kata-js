import React from "react";
import { createRoot } from "react-dom/client";
import { Button, DatePicker, Space, version } from "antd";
import 'antd/dist/reset.css';
import "../css/sample.css";


export default function Sample() {
return (
    <div className="Sample">
      <h1>antd version: {version}</h1>
      <Space>
        <DatePicker />
        <Button type="primary">Primary Button</Button>
      </Space>
    </div>
)
}
