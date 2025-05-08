"use client";

import { useState } from "react";
import { Form, InputNumber, Button, Typography } from "antd";

const { Title } = Typography;

const ZXCalculator = () => {
  const [n11, setN11] = useState<number | null>(null);

  const calculateN11 = (values: { zx: number }) => {
    const { zx } = values;
  
    const numerator = 150 * 175 * zx * 36 * 21;
    const denominator = 250 * 260 * 36 * 41 * 125;
  
    const baseResult = 684 * (numerator / denominator) * 0.99 * 0.99;
    const finalResult = baseResult * zx;
  
    setN11(Number(finalResult.toFixed(2)));
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow space-y-6">
      <Title level={4}>ZX утгаар n11 тооцоолох</Title>

      <Form layout="vertical" onFinish={calculateN11}>
        <Form.Item
          label="ZX (Хэрэглэгчийн оруулах утга)"
          name="zx"
          rules={[{ required: true, message: "ZX утгаа оруулна уу" }]}
        >
          <InputNumber className="w-full" placeholder="ZX утга" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Тооцоолох
          </Button>
        </Form.Item>
      </Form>

      {n11 !== null && (
        <div className="text-lg font-semibold text-green-700">
          Тооцооны үр дүн (n₁₁): {n11}
        </div>
      )}
    </div>
  );
};

export default ZXCalculator;
