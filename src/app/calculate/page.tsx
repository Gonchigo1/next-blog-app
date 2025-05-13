"use client";

import { useState } from "react";
import { Button, InputNumber, Typography, Form, message } from "antd";
import Image from 'next/image';
const { Title } = Typography;

const CalculateForm = () => {
  const [n10, setN10] = useState<number | null>(null);
  const [v10, setV10] = useState<number | null>(null);
  const [n8, setN8] = useState<number | null>(null);
  const [v8, setv8] = useState<number | null>(null);
  const [n7, setN7] = useState<number | null>(null);
  const [v7, setv7] = useState<number | null>(null);
  const [n6, setN6] = useState<number | null>(null);
  const [v6, setv6] = useState<number | null>(null);
  const [n12, setN12] = useState<number | null>(null);
  const [n11, setN11] = useState<number | null>(null);
  const [n11_v6, setn11_v6] = useState<number | null>(null);

  const calculateN10 = (values: { n10: number }) => {
  const { n10 } = values;
  const p = 3.14;
  const numerator = 125 * 260;
  const denominator = 225 * 300;
  const result = (numerator / denominator) * n10 * 0.99 * 0.99;

  const resultAsInt = Math.floor(result); 
  const calculatedV10 = p * result * 0.672;
  const resultFirst3Digits = Number(resultAsInt.toString().slice(0, 3));
  setV10(calculatedV10);

  setN10(resultFirst3Digits);
  message.success("n₁₀ амжилттай тооцоологдлоо");

  return calculatedV10;
};

 const calculateN8 = (values: { n8: number }) => {
  const { n8 } = values;
  const p = 3.14;
  const numerator = 125;
  const denominator = 225;
  const result = (numerator / denominator) * n8 * 0.98;

  const resultAsInt = Math.floor(result); 
  const calculatedV8 = p * result * 0.06;
  console.log("V8: ", result);
  const resultFirst3Digits = Number(resultAsInt.toString().slice(0, 3));
  setv8(calculatedV8);

  setN8(resultFirst3Digits);
  message.success("n8 амжилттай тооцоологдлоо");

  return calculatedV8;
};

 const calculateN7 = () => {
  if (n8 === null) {
    message.error("n8-ийн утга эхлээд тооцоологдсон байх ёстой.");
    return;
  }
  const p = 3.14;
  const numerator = 49;
  const denominator = 30;
  const result = (numerator / denominator) * n8; 

  const resultAsInt = Math.floor(result);
  const calculatedV7 = p * result * 0.234;

  const resultFirst3Digits = Number(resultAsInt.toString().slice(0, 4));
  setv7(calculatedV7);
  setN7(resultFirst3Digits);

  message.success("n7 амжилттай тооцоологдлоо");
};

const calculateN6 = () => {
  if (n7 === null) {
    message.error("n7-ийн утга эхлээд тооцоологдсон байх ёстой.");
    return;
  }
  const p = 3.14;
  const numerator = 132;
  const denominator = 104;
  const result = (numerator / denominator) * n7 * 0.99; 

  const resultAsInt = Math.floor(result);
  const calculatedV6 = p * result * 0.234;

  const resultFirst3Digits = Number(resultAsInt.toString().slice(0, 4));
  setv6(calculatedV6);
  setN6(resultFirst3Digits);

  message.success("n7 амжилттай тооцоологдлоо");
};

const calculateN12 = () => {
  if (n7 === null) {
    message.error("n7-ийн утга эхлээд тооцоологдсон байх ёстой.");
    return;
  }
  const numerator = 132 * 152;
  const denominator = 132 * 120;
  const result = (numerator / denominator) * n7 * 0.99 * 0.99; 

  const resultAsInt = Math.floor(result);

  const resultFirst3Digits = Number(resultAsInt.toString().slice(0, 4));
  setN12(resultFirst3Digits);

  message.success("n7 амжилттай тооцоологдлоо");
};

const calculateN11 = (values : { zx: number }) => {
  if (n10 === null) {
    message.error("n10-ийн утга эхлээд тооцоологдсон байх ёстой.");
    return;
  }

  const { zx } = values;

  const numerator = 150 * 175 * zx * 36 * 21;
  const denominator = 250 * 260 * 36 * 41 * 125;

  const base = (numerator / denominator) * n10 * 0.99 * 0.99;
  console.log(base)
  const n11Calculated = base * zx;

  const calculatedV6 = 3.14 * n11Calculated * 0.672;

  const resultFirstDigits = Number(Math.floor(n11Calculated).toString().slice(0, 4));

  setN11(resultFirstDigits);
  setn11_v6(calculatedV6);

  message.success("n₁₁ амжилттай тооцоологдлоо");
};


  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-semibold text-foreground">
        Ноос самнах машины суналтын тооцоо
      </h2>

     <div>
  <h3>Зураг</h3>
  <Image
    src="/images/my-image.jpg"
    alt="Тооцооны зураг"
    width={500}
    height={300}
  />
</div>



      <Title level={4}> n₁₀ тооцоолох</Title>

      <Form layout="vertical" onFinish={calculateN10}>
        <Form.Item
          label="n10 (Хэрэглэгчийн оруулах утга)"
          name="n10"
          rules={[{ required: true, message: "n10 утгаа оруулна уу" }]}
        >
          <InputNumber className="w-full" placeholder="n10 утга" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Тооцоолох
          </Button>
        </Form.Item>
      </Form>

      {n10 !== null && (
        <div className="text-lg font-semibold text-green-700">
          Тооцооны үр дүн (n₁₀): {n10}
      {v10 !== null && (
        <div className="text-lg font-semibold text-green-700">
          Тооцооны үр дүн (v₁₀): {v10.toFixed(2) } м/мин
        </div>
      )}
        </div>
      )}

      <Title level={4}> n8 тооцоолох</Title>

      <Form layout="vertical" onFinish={calculateN8}>
        <Form.Item
          label="n8 (Хэрэглэгчийн оруулах утга)"
          name="n8"
          rules={[{ required: true, message: "n8 утгаа оруулна уу" }]}
        >
          <InputNumber className="w-full" placeholder="n8 утга" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Тооцоолох
          </Button>
        </Form.Item>
      </Form>

      {n8 !== null && (
        <div className="text-lg font-semibold text-green-700">
          Тооцооны үр дүн (n8): {n8}
      {v8 !== null && (
        <div className="text-lg font-semibold text-green-700">
          Тооцооны үр дүн (V8): {v8.toFixed(2) } м/мин
        </div>
      )}
        </div>
      )}

      <Title level={4}> n7 тооцоолох</Title>

      <Form layout="vertical" onFinish={calculateN7}>
        <Form.Item>
          <Button
  type="primary"
  onClick={calculateN7}
  disabled={n8 === null}
>
  n₇ тооцоолох
</Button>
        </Form.Item>
      </Form>

      {n7 !== null && (
  <div className="text-lg font-semibold text-green-700">
    Тооцооны үр дүн (n₇): {n7}
    <br />
    Тооцооны үр дүн (v₇): {v7?.toFixed(2)} м/мин
  </div>
)}

<Title level={4}> n6 тооцоолох</Title>

      <Form layout="vertical" onFinish={calculateN6}>
        <Form.Item>
          <Button
  type="primary"
  onClick={calculateN6}
  disabled={n7 === null}
>
  n6 тооцоолох
</Button>
        </Form.Item>
      </Form>

      {n6 !== null && (
  <div className="text-lg font-semibold text-green-700">
    Тооцооны үр дүн (n6): {n6}
    <br />
    Тооцооны үр дүн (v6): {v6?.toFixed(2)} м/мин
  </div>
)}

<Title level={4}> n12 тооцоолох</Title>

      <Form layout="vertical" onFinish={calculateN12}>
        <Form.Item>
          <Button
  type="primary"
  onClick={calculateN12}
  disabled={n7 === null}
>
  n12 тооцоолох
</Button>
        </Form.Item>
      </Form>

      {n12 !== null && (
  <div className="text-lg font-semibold text-green-700">
    Тооцооны үр дүн (n12): {n12} эрг/мин
  </div>
)}

<Title level={4}> n11 тооцоолох</Title>

      <Form layout="vertical" onFinish={calculateN11}>
  <Form.Item
    label="ZX утга"
    name="zx"
    rules={[{ required: true, message: "ZX утгаа оруулна уу" }]}
  >
    <InputNumber className="w-full" placeholder="ZX утга" />
  </Form.Item>

  <Form.Item>
    <Button
      type="primary"
      htmlType="submit"
      disabled={n10 === null}
    >
      n₁₁ тооцоолох
    </Button>
  </Form.Item>
</Form>

      {n11 !== null && (
  <div className="text-lg font-semibold text-green-700">
    Тооцооны үр дүн (n₁₁): {n11} эрг/мин
    <br />
    Тооцооны үр дүн (v₆): {n11_v6?.toFixed(2)} м/мин
  </div>
)}
    </div>
)}

export default CalculateForm;