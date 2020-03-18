import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuidv4 from 'uuid/v4';
// import PropTypes from 'prop-types';
import Toast from './Toast';

const Toaster = ({ toastProps = {}, dismissDelay = 4000 }) => {
  const [toast, setToast] = useState(null);

  const dismissToast = () => setToast(null);

  useEffect(() => {
    setToast(
      <Toast
        type={toastProps.type}
        dismissDelay={dismissDelay}
        dismissToast={dismissToast}
      />
    );

    const timer = setTimeout(() => dismissToast(), dismissDelay);

    return function cleanup() {
      clearTimeout(timer);
    };
  }, [toastProps.type, toastProps.content]); // We can check for whatever we'd like here

  return ReactDOM.createPortal(
    <div aria-live="assertive">
      <TransitionGroup>
        <CSSTransition
          key={uuidv4()}
          appear
          unmountOnExit
          timeout={380}
          classNames="rtgSlideIn"
        >
          <div className="toaster">{toast}</div>
        </CSSTransition>
      </TransitionGroup>
    </div>,
    // eslint-disable-next-line no-undef
    document.body
  );
};

Toaster.propTypes = {};

export default Toaster;
