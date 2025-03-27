import * as React from 'react';
import { radio } from './radio.css';

export function Radio(attributes: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...attributes} type="radio" className={radio} />;
}
