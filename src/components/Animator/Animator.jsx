import "./Animator.css";

function Animator() {
  return (
    <>
      <div className="data-frame"></div>
      <div className="timeline">
        <div className="seekbar"></div>
        <div className="rewindbutton"></div>
        <div className="playbutton"></div>
        <div className="forwardbutton"></div>
      </div>
    </>
  );
}

export default Animator;
