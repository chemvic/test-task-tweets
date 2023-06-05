import { Routes, Route } from "react-router-dom";
import {lazy} from 'react';
import SharedLayout from './SharedLayout';

import css from './App.module.css';
const Home =lazy(()=>import("../pages/Home"));
const Tweets =lazy(()=>import("../pages/Tweets/Tweets"));
const NotFound =lazy(()=>import("../pages/NotFound"));

const App =()=> { 
  return (
    <div className={css.container}>
 <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/tweets" element={<Tweets />}/>        
        <Route path="*" element={<NotFound/>} />        
      </Route>
    </Routes>
    </div>
  );
}

export default App;
