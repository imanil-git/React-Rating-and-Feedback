import { useState } from "react";
import Modal from "../components/Modal";


const Home = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <div className="d-flex flex-column align-items-center vh-100 bg-dark text-white">
      <h1 className="display-3 fw-bold mt-4">Popup Modal</h1>
      <button onClick={()=> setShowModal(true)} className="btn btn-primary px-4 py-2 fs-5">Get the eBook</button>
      {showModal && <Modal onClose={()=> setShowModal(false)} />}
    </div>
  );
};

export default Home;
