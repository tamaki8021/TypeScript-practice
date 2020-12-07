import React, { useState } from 'react'

interface Props {
  text: string;
};

interface UserData {
  id: number;
  name: string;
};

export const TestComponent: React.FC<Props> = (props) => {
  
  const [count, setCount] = useState<number | null>(0); //複数の選択肢をもたせたいときジェネリックスを使う
  const [user, setUser] = useState<UserData>({id: 1, name: "dummy"});
  const [inputData, setInputData] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData(e.target.value);
  };

  return (
    <div>
      <h1>{props.text}</h1>
      <h1>{count}</h1>
      {/* <p>{user.id}</p>
      <p>{setUser.name}</p> */}
      <input type="text" value={inputData} onChange={handleInputChange}/>
      <h1>{inputData}</h1>
    </div>
  )
}

export default TestComponent;
