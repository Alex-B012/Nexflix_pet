import { useEffect } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

const Modal = ({ children, onClose }: ModalProps) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return createPortal(
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center">
      <div className="relative w-full max-w-xl h-fit flex flex-col justify-center bg-neutral-900 text-white p-1 rounded-2xl shadow-lg animate-fadeIn sm:p-3">
        <div
          onClick={(e: React.MouseEvent<HTMLDivElement>) => {
            e.stopPropagation();
            onClose();
          }}
          className="absolute top-3 right-3 flex text-white text-xl cursor-pointer hover:text-red-600 transition"
        >
          ✕
        </div>
        <div className="flex justify-center items-center mt-12">
          {" "}
          {children}
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
