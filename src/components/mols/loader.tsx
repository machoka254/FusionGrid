import "./loaderStyles.css";
import { useRef } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export default function LoaderBoxes({
  isLoading,
  onExited,
}: {
  isLoading: boolean;
  onExited?: any;
}) {
  const nodeRef = useRef(null);
  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={isLoading}
      timeout={1000}
      classNames="fade"
      appear={true}
      unmountOnExit
      onExited={onExited}
    >
      <div ref={nodeRef}>
        <svg className="container">
          <rect className="boxes"></rect>
        </svg>
      </div>
    </CSSTransition>
  );
}
