"use client";

import { useState } from "react";
import { Button, InputNumber, Typography, Form, message } from "antd";
const {Text } = Typography;

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
  const [w, setW] = useState<number | null>(null);
    const [f, setF] = useState<number | null>(null);

    
  const [w8, setW8] = useState<number | null>(null);
    const [f8, setF8] = useState<number | null>(null);
  const [p, setP] = useState<number | null>(null);
  const [Ff, setFf] = useState<number | null>(null);
  const [pf, setFfp] = useState<number | null>(null);
  const [FP, setPF] = useState<number | null>(null);

  const calculateN10 = (values: { n10: number }) => {
  const { n10 } = values;
  const pi = 3.14;
  const numerator = 125 * 260;
  const denominator = 225 * 300;
  const result = (numerator / denominator) * n10 * 0.99 * 0.99;

  const resultAsInt = Math.floor(result); 
  const calculatedV10 = pi * result * 0.672;
  const resultFirst3Digits = Number(resultAsInt.toString().slice(0, 3));
  setV10(calculatedV10);

  setN10(resultFirst3Digits);
  message.success("n₁₀ амжилттай тооцоологдлоо");

  return calculatedV10;
};

 const calculateN8 = (values: { n8: number }) => {
  const { n8 } = values;
  const pi = 3.14;
  const numerator = 125;
  const denominator = 225;
  const result = (numerator / denominator) * n8 * 0.98;

  const resultAsInt = Math.floor(result); 
  const calculatedV8 = pi * result * 0.06;
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
  const pi = 3.14;
  const numerator = 49;
  const denominator = 30;
  const result = (numerator / denominator) * n8; 

  const resultAsInt = Math.floor(result);
  const calculatedV7 = pi * result * 0.234;

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
  const pi = 3.14;
  const numerator = 132;
  const denominator = 104;
  const result = (numerator / denominator) * n7 * 0.99; 

  const resultAsInt = Math.floor(result);
  const calculatedV6 = pi * result * 0.234;

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

const calculateW = () => {
  if (n10 === null) {
    message.error("n10-ийн утга эхлээд тооцоологдсон байх ёстой.");
    return;
  }
  const pi = 3.14
  const numerator = 2 * pi * n10;
  const denominator = 60;

  const base = numerator / denominator;
  console.log(w)
  const w3 = Number(Math.floor(base).toString().slice(0, 4));

  const f = base * 40 * 0.336
    const f3 = Number(Math.floor(f).toString().slice(0, 4));

  setW(w3);
  setF(f3)

  message.success("w амжилттай тооцоологдлоо");
};


const calculate8w = () => {
  if (n8 === null) {
    message.error("n8-ийн утга эхлээд тооцоологдсон байх ёстой.");
    return;
  }
  const pi= 3.14
  const numerator = 2 * pi * n8;
  const denominator = 60;

  const base = numerator / denominator;
  const w3 = Number(Math.floor(base).toString().slice(0, 4));

  const f = base * 20 * 0.06
    const f3 = Number(Math.floor(f).toString().slice(0, 4));

  setW8(w3);
  setF8(f3)

  message.success("w амжилттай тооцоологдлоо");
};


const calculateP = () => {
  if (f === null) {
    message.error("f-ийн утга эхлээд тооцоологдсон байх ёстой.");
    return;
  }
    const angleDegrees = 80;
    const angleRadians = angleDegrees * (Math.PI / 180); 
    const cosValue = Math.cos(angleRadians);

    const result = f / cosValue;

    const resultFP = f / 0.23;
    setP(parseFloat(result.toFixed(2)));
    setFf(parseFloat(resultFP.toFixed(2)));
  };

const calculate8P = () => {
  if (f8 === null) {
    message.error("f-ийн утга эхлээд тооцоологдсон байх ёстой.");
    return;
  }
  
  const angleDegrees = 65;
const angleRadians = angleDegrees * (Math.PI / 180); 
const cosValue = Math.cos(angleRadians);
const resultFP = f8 / cosValue;
const resultFfp = resultFP / 0.23;
  setPF(parseFloat(resultFP.toFixed(2)));
  setFfp(parseFloat(resultFfp.toFixed(2)));
};

type ImageErrorKey = 'my-image' | '1' | '2';

const [imageErrors, setImageErrors] = useState<Record<ImageErrorKey, boolean>>({
    'my-image': false,
    '1': false,
    '2': false
  });

  const handleImageError = (imageName: ImageErrorKey) => {
    setImageErrors(prev => ({
      ...prev,
      [imageName]: true
    }));
  };

  const ImageWithFallback = ({ src, alt, imageName }: { src: string; alt: string; imageName: ImageErrorKey }) => {
    if (imageErrors[imageName]) {
      return (
        <div className="w-full h-64 flex items-center justify-center border border-dashed border-gray-400 bg-gray-50 rounded-lg">
          <div className="text-center p-4">
            <Text type="secondary">Зураг олдсонгүй: {alt}</Text>
            <div className="mt-2">
              <Text type="secondary" className="text-xs">
                Файл байршил: {src}
              </Text>
            </div>
          </div>
        </div>
      );
    }
    
    return (
      <div className="relative w-full h-64">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain rounded-lg shadow-md"
          unoptimized
          onError={() => handleImageError(imageName)}
        />
      </div>
    );
  };

 return (
  <div className="max-w-7xl mx-auto p-6 space-y-6">
      <Title level={2}>Голуудын эргэлтийн хурд, Тойрог хурд</Title>

     <div className="bg-blue-50 p-6 rounded-lg mb-6">
        <Title level={3}>Зураг</Title>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <ImageWithFallback
              src="images/my-image.jpg"
              alt="Тооцооны зураг"
              imageName="my-image"
            />
            <Text type="secondary" className="text-xs mt-1">
              Зургийн байршил: /images/my-image.jpg
            </Text>
          </div>
          <div className="mb-4">
            <ImageWithFallback
              src="/images/1.jpg"
              alt="Тооцооны зураг 1"
              imageName="1"
            />
            <Text type="secondary" className="text-xs mt-1">
              Зургийн байршил: /images/1.jpg
            </Text>
          </div>
          <div className="mb-4">
            <ImageWithFallback
              src="/images/2.jpg"
              alt="Тооцооны зураг 2"
              imageName="2"
            />
            <Text type="secondary" className="text-xs mt-1">
              Зургийн байршил: /images/2.jpg
            </Text>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
          <Title level={5}>Зураг харуулах зөвлөмж</Title>
          <ul className="list-disc pl-5 space-y-1">
            <li>Зураг нь app/public/images хавтаст хадгалагдсан байх ёстой</li>
            <li>Файлын нэр зөв бичигдсэн эсэхийг шалгана уу (1.jpg, 2.jpg, my-image.jpg)</li>
            <li>Next.js public хавтсын агуулгыг үндсэн URL-ээс үйлчилдэг</li>
          </ul>
        </div>
      </div>

    <div className="flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-1/2 space-y-6">

       <Title level={4}>n₁₀ тооцоолох</Title>
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
              <div>Тооцооны үр дүн (v₁₀): {v10.toFixed(2)} м/мин</div>
            )}
          </div>
        )}

        <Title level={4}>10 барабана тооцоолох</Title>
        <Form layout="vertical" onFinish={calculateW}>
          <Form.Item>
            <Button type="primary" htmlType="submit" disabled={n10 === null}>
              F тооцоолох
            </Button>
          </Form.Item>
        </Form>

        {w !== null && (
          <div className="text-lg font-semibold text-green-700 bg-yellow-100 p-4 rounded-xl">
            <div>Тооцооны үр дүн (W): {w} рад</div>
            <div>Тооцооны үр дүн (F): {f} H</div>
          </div>
        )}

        <Title level={4}>тооцоолох</Title>
        <Button type="primary" onClick={calculateP}>
          тооцоолох
        </Button>
        {p !== null && Ff !== null && (
          <p>
            Үр дүн: <strong>P ≈ {p}</strong>
            <div>Үр дүн: <strong>N ≈ {Ff}</strong></div>
          </p>
        )}

       

        <Title level={4}>n₇ тооцоолох</Title>
        <Button
          type="primary"
          onClick={calculateN7}
          disabled={n8 === null}
        >
          n₇ тооцоолох
        </Button>
        {n7 !== null && (
          <div className="text-lg font-semibold text-green-700">
            Тооцооны үр дүн (n₇): {n7}
            <br />
            Тооцооны үр дүн (v₇): {v7?.toFixed(2)} м/мин
          </div>
        )}

        <Title level={4}>n₆ тооцоолох</Title>
        <Button
          type="primary"
          onClick={calculateN6}
          disabled={n7 === null}
        >
          n6 тооцоолох
        </Button>
        {n6 !== null && (
          <div className="text-lg font-semibold text-green-700">
            Тооцооны үр дүн (n6): {n6}
            <br />
            Тооцооны үр дүн (v6): {v6?.toFixed(2)} м/мин
          </div>
        )}
      </div>

      <div className="w-full md:w-1/2 space-y-6">

       <Title level={4}>n₈ тооцоолох</Title>
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
            Тооцооны үр дүн (n₈): {n8}
            {v8 !== null && (
              <div>Тооцооны үр дүн (v₈): {v8.toFixed(2)} м/мин</div>
            )}
          </div>
        )}

        <Title level={4}>8 барабана тооцоолох</Title>
        <Form layout="vertical" onFinish={calculate8w}>
          <Form.Item>
            <Button type="primary" htmlType="submit" disabled={n8 === null}>
              F тооцоолох
            </Button>
          </Form.Item>
        </Form>

        {w8 !== null && (
          <div className="text-lg font-semibold text-green-700 bg-yellow-100 p-4 rounded-xl">
            <div>Тооцооны үр дүн (W): {w8} рад</div>
            <div>Тооцооны үр дүн (F): {f8} H</div>
          </div>
        )}

        <Title level={4}>тооцоолох</Title>
        <Button type="primary" onClick={calculate8P}>
          тооцоолох
        </Button>
        {pf !== null && FP !== null && (
          <p>
            Үр дүн: <strong>N ≈ {pf}</strong>
            <div>Үр дүн: <strong>P ≈ {FP}</strong></div>
          </p>
        )}

      
        <Title level={4}>n₁₂ тооцоолох</Title>
        <Button
          type="primary"
          onClick={calculateN12}
          disabled={n7 === null}
        >
          n₁₂ тооцоолох
        </Button>
        {n12 !== null && (
          <div className="text-lg font-semibold text-green-700">
            Тооцооны үр дүн (n₁₂): {n12} эрг/мин
          </div>
        )}

        <Title level={4}>n₁₁ тооцоолох</Title>
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
    </div>
  </div>
)
}

export default CalculateForm;