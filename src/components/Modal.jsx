import { Download, X } from "lucide-react";
import { useRef } from "react";
import PropTypes from "prop-types";

const Modal = ({ onClose }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) onClose();
  };
  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="position-fixed top-0 start-0 w-100 h-100 bg-black bg-opacity-50 d-flex justify-content-center align-items-center"
    >
      <div className="mt-5 d-flex flex-column gap-3 text-white">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="align-self-end btn btn-outline-light border-0"
        >
          <X size={30} />
        </button>

        {/* Modal Content */}
        <div className="bg-primary text-white rounded-3 px-5 py-4 d-flex flex-column gap-3 align-items-center mx-3">
          <h1 className="fs-3 fw-bold text-center">DOWNLOAD FREE EBOOK</h1>
          <p className="fs-4 fw-semibold text-center">
            Want to Learn How to Crack Web Development Interviews Like a Pro!
          </p>

          {/* Form */}
          <form className="w-100">
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="form-control p-3"
            />
            <button className="mt-3 w-100 d-flex align-items-center justify-content-center gap-2 px-4 py-3 fw-medium rounded bg-dark text-white border-0">
              <Download /> Download eBook
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// ✅ Define prop types
Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Modal;
