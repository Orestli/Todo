import React from 'react';
import s from './Paragraph.module.scss';

interface IndexProps {
  text: string;
}

const P: React.FC<IndexProps> = ({ text }) => {
  return <p className={s.paragraph}>{text}</p>;
};

export default P;
