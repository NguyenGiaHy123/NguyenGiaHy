import React, { useState, useEffect } from "react";
import { Form, InputNumber, Select, Button, Typography, Spin } from "antd";
import axios from "axios";

const { Title } = Typography;
const { Option } = Select;

const API_URL = "https://interview.switcheo.com/prices.json";

const CurrencySwapForm: React.FC = () => {
  const [form] = Form.useForm();
  const [tokens, setTokens] = useState<Record<string, number>>({});
  const [fromCurrency, setFromCurrency] = useState<string | null>(null);
  const [toCurrency, setToCurrency] = useState<string | null>(null);
  const [amount, setAmount] = useState<number>(0);
  const [result, setResult] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        const tokenData = response.data.reduce((acc: Record<string, number>, token: { currency: string, price: number }) => {
          acc[token.currency] = token.price;
          return acc;
        }, {});
        setTokens(tokenData);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching token data:", error));
  }, []);

  const handleSwap = () => {
    if (fromCurrency && toCurrency && amount > 0) {
      const fromRate = tokens[fromCurrency];
      const toRate = tokens[toCurrency];

      if (fromRate && toRate) {
        const convertedAmount = (amount * fromRate) / toRate;
        setResult(convertedAmount);
      }
    }
  };

  if (loading) return <Spin size="large" />;

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: 20, textAlign: "center" }}>
      <Title level={3}>Currency Swap</Title>
      <Form form={form} layout="vertical">
        <p className="text-xl text-gray-400">Performed by Nguyen Gia Hy, born in 2002</p>
        <Form.Item label="From Currency">
          <Select showSearch placeholder="Select a token" onChange={setFromCurrency}>
            {Object.keys(tokens).map((token) => (
              <Option key={token} value={token}>
                {token}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label="To Currency">
          <Select showSearch placeholder="Select a token" onChange={setToCurrency}>
            {Object.keys(tokens).map((token) => (
              <Option key={token} value={token}>
                {token}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item label="Amount">
          <InputNumber min={0} style={{ width: "100%" }} onChange={setAmount} />
        </Form.Item>

        <Button type="primary" onClick={handleSwap}>
          Convert
        </Button>
      </Form>

      {result !== null && (
        <div style={{ marginTop: 20 }}>
          <Title level={4}>Converted Amount: {result.toFixed(6)}</Title>
        </div>
      )}
    </div>
  );
};

export default CurrencySwapForm;
