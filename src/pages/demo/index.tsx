/*
 * @Author: cirs
 * @Date: 2024-09-10 21:14:52
 * @LastEditors: cirs
 * @LastEditTime: 2024-09-10 21:30:55
 * @FilePath: /react-eslint/src/pages/demo/index.tsx
 * @Description:
 *
 */
import { render } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
const nav = () => {
  const [a, setA] = useState(1);
  const [b, setB] = useState(2);
  const goodlll = 123;
  let c = 0;
  useEffect(() => {
    c = a + b + goodlll;
  }, [a]);

  render(<div style={{ width: '100px' }}>123</div>);
};
