import React from 'react';
import { useTransition, animated } from 'react-spring';

import Toast from './Toast';

import { ToastMessage } from '../../hooks/toast';
import { Container } from './styles';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const transitions = useTransition(messages, {
    from: { transform: 'translateX(120px)', opacity: 0 },
    enter: { transform: 'translateX(0px)', opacity: 1 },
    leave: { transform: 'translateX(120px)', opacity: 0 },
  });

  return (
    <Container>
      {transitions((props, item) => (
        <animated.div style={props}>
          <Toast key={item.id} message={item} />
        </animated.div>
      ))}
    </Container>
  );
};

export default ToastContainer;
