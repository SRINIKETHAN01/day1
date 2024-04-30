import React, { useContext, useCallback } from 'react';
import { CounterContext } from './App';
import { useNavigate } from 'react-router-dom';

const MyCounter = () => {
  const { state, dispatch } = useContext(CounterContext);
  const navigate = useNavigate();

  const incrementMyCounter = useCallback(() => {
    dispatch({ type: 'INCREMENT_MY_COUNT' });
  }, [dispatch]);

  const decrementMyCounter = useCallback(() => {
    dispatch({ type: 'DECREMENT_MY_COUNT' });
  }, [dispatch]);

  return (
    <div>
      <h2>My Counter</h2>
      <p>My Count: {state.myCount}</p>
      <button onClick={incrementMyCounter}>Increment My Count</button>
      <button onClick={decrementMyCounter}>Decrement My Count</button>
      <button onClick={() => navigate('/')}>Go to Home</button>
    </div>
  );
};

export default MyCounter;
