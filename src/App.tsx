import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PhotosPage from "./components/Photos";
import TodosPage from "./components/Todos";
import TodoPage from "./components/Todo";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="todos" element={<TodosPage />} />
        <Route path="todos/:id" element={<TodoPage />} />
        <Route path="photos" element={<PhotosPage />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
