const Backdrop = (props) => {
    const {cancle} = props;
  return <div className="backdrop" onClick={cancle} />;
};
export default Backdrop;
