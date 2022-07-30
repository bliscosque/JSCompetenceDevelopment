import React from 'react';
import { Routes } from 'react-router-dom';

import MyRoute from './MyRoute';
import Login from '../pages/Login';
import Page404 from '../pages/Page404';

export default function RouterComp() {
  return (
    <Routes>
      <MyRoute path="/" element={<Login />} />
      <MyRoute path="*" element={<Page404 />} />
    </Routes>
  );
}
