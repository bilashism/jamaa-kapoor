import React from 'react';

const Modal = ({ children, showModal, setShowModal }) => (
  <div className="">
    <div className="">
      <div
        className={`${
          showModal ? 'flex' : 'hidden'
        } fixed left-0 top-0 isolate z-20 h-full min-h-screen w-full items-center justify-center px-4 py-9 md:px-28 md:py-10 lg:mx-auto`}
      >
        <button
          className="absolute h-full w-full cursor-pointer bg-black bg-opacity-70"
          onClick={() => setShowModal(false)}
          type="button"
        />
        {children}
      </div>
    </div>
  </div>
);

export default Modal;
