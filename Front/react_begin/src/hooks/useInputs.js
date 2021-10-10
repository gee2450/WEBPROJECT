import { useState, useCallback } from 'react';
// import useReducer from 'react';
// import InputSample from '../InputSample';

// // useReducer를 이용한 useInputs code
// // 아직 reducer의 'RESET' 코드를 이해 못함
// function reducer(state, action) {
//   switch (action.type) {
//     case 'CHANGE_INPUT':
//       return {
//         ...state, 
//         [action.name]: action.value
//       };
//     case 'RESET':
//       return Object.keys(state).reduce((acc, current) => {
//         acc[current] = '';
//         return acc;
//       }, {});
//     default:
//       return state;
//   }
// }

// function useInputs(initialForm) {
//   const [state, dispatch] = useReducer(reducer, initialForm);
  
//   const onChange = useCallback(e => {
//     const {name, value} = e.target;
//     dispatch({
//       type: 'CHANGE_INPUT',
//       name,
//       value
//     })
//   }, []);

//   const reset = useCallback(() => {
//     dispatch({type: 'RESET'});
//   }, [])

//   return [state, onChange, reset];
// }

function useInputs(initialForm) {
  const [input, setInput] = useState(initialForm);

  const onChange = useCallback( e => {
    const { name, value } = e.target;
    setInput(input => ({ ...input, [name]: value }));
  }, [input]);

  const reset = useCallback( () => setInput( initialForm ), [initialForm]);
  return [input, onChange, reset];
}

export default useInputs;