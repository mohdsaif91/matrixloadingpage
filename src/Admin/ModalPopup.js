import React, { useEffect, useState } from "react";

const initialModal = {
  show: false,
  data: { customerData: [], customerName: "" },
};

function ModalPopup(props) {
  const [show, setShow] = useState({ ...initialModal });

  useEffect(() => {
    setShow({ ...show, data: props.data });
  }, [props]);

  return (
    <div>
      <div className="modal-popup">
        <div className="modal-header">
          <div className="modal-heading">Medicen List</div>
          <div className="x-close" onClick={() => props.closeModal()}>
            X
          </div>
        </div>
        <div className="modal-body">
          <div>Customer name- {show.data?.customerName}</div>
          <div className="list-medicen">
            {show.data?.customerOrder?.map((m, i) => (
              <div className="item" key={i}>
                <div>{i + 1}</div>
                <div>{m.name}</div>
                <div>{m.quantity}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="modal-footer">
          <button className="ok-btn link" onClick={() => props.closeModal()}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalPopup;
