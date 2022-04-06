import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';

const TodoPage: React.FC = () => {
  const { id } = useParams();

  useEffect(() => {
    console.log('Получаю информацию с', id);
  }, [id])

  return (
    <div>
      To: {id}
    </div>
  );
};

export default TodoPage;
