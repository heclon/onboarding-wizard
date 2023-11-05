import { Button } from "primereact/button";

export const PrimeButton = ({ className, onClick, type, label, severity }) => {
  return (
    <Button
      type={type}
      label={label}
      severity={severity}
      size="small"
      className={`p-button ${className} font-semibold`}
      onClick={() => {
        onClick();
      }}
    />
  );
};
