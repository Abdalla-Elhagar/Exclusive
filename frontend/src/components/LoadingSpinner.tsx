import HashLoader from "react-spinners/esm/HashLoader";

export default function LoadingSpinner({ className }: { className?: string }) {
  return (
    <div
      className={
        "fixed w-full h-full inset-0 flex items-center justify-center bg-white/30 backdrop-blur-sm z-50" +
        className
      }
    >
      <HashLoader color="#DB4444" size={50} speedMultiplier={1.5} />
    </div>
  );
}
