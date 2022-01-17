
const Modal = ({ itemModal }) => {
  console.log(itemModal);
  return (
        <div className="fixed">
            <img style={{ width: "200px" }} src={`./images/${itemModal}.jpg`} alt="" />
        </div>
  );
};

export default Modal;
