import { container, loader } from './loadingSpinner.css';

export default function LoadingSpinner() {
  return (
    <div className={container}>
      <div className={loader}></div>
    </div>
  );
}
