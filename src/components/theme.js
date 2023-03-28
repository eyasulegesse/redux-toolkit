import { useState } from 'react';
import { changeColor } from '../feature//theme';
import { useDispatch } from 'react-redux';
const Theme = () => {
  const [color, setColor] = useState('');
  const dispatch = useDispatch();
  return (
    <div>
      <input type='text' onChange={(e) => setColor(e.target.value)} />
      <button
        onClick={() => {
          dispatch(changeColor(color));
        }}
      >
        Change Color
      </button>
    </div>
  );
};

export default Theme;
