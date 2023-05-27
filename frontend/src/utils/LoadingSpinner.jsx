import CircularProgress from "@mui/material/CircularProgress";

const LoadingSpinner = () => {
  return (
    <div className="grid h-96 place-items-center">
      <div>
        <CircularProgress />
      </div>
    </div>
  );
};

export default LoadingSpinner;
