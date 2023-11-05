import { BeatLoader } from "react-spinners";

const LoadingSpinner = () => {
  // console.log('Printing BeatLoader spinner')
  return (
    <div className="card">
      <div className="flex h-screen">
        <div className="m-auto">
          <BeatLoader
            color="#d1d5db"
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
