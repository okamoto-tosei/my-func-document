import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';

function App() {
  const [arr, setArr] = useState([
    { firstName: "", lastName: "" },
    { firstName: "", lastName: "" }
  ]);
  
  // 値の変更を監視する関数
  const handleChangeInput = (index, event) => {
    const inputArr = [...arr];
    inputArr[index][event.target.name] = event.target.value;

    setArr(inputArr);
  };
  
  // ボタン操作により、フォームを追加する関数
  const addFields = () => {
    setArr([...arr, { firstName: "", lastName: "" }]);
  };
  
  // ボタン操作によりフォームを削除する関数
  const removeFields = (index) => {
    const inputArr = [...arr];
    inputArr.splice(index, 1);
    setArr(inputArr);
  };

  console.log(arr);
  return (
    <div className="App">
      {arr.map((value, index) => {
        return (
          <div>
            <input
              type="text"
              name="firstName"
              value={value.firstName}
              onChange={(event) => handleChangeInput(index, event)}
            />
            <input
              type="text"
              name="lastName"
              value={value.lastName}
              onChange={(event) => handleChangeInput(index, event)}
            />

            <button onClick={() => addFields()}>追加</button>
            <button onClick={() => removeFields(index)}>削除</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
