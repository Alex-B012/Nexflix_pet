import { useNavigate } from "react-router-dom";

const GoBackButton = ({ label = "← Back" }) => {
  const navigate = useNavigate();

  return (
    <div className="go-back-btn w-full h-15 md:px-5 2xl:px-10 flex items-center">
      <button
        onClick={() => navigate(-1)}
        className="px-3 pb-0.5 rounded-md bg-black/30 text-white hover:bg-black/50 transition"
      >
        {label}
      </button>
    </div>
  );
};

export default GoBackButton;
