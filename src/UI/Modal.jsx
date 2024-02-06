import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

function Modal({ children, open, onCloce, className = "" }) {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      modal.showModal();
    }
    return () => modal.close();
  }, [open]);

  return createPortal(
    <dialog ref={dialog} className={`modal ${className}`} onClose={onCloce}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
