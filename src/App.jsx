import React from 'react';
import './App.css';

export const AppInit = () => {
  return (
  <>
  <div>
    <input placeholder="Todoを入力" />
    <button>追加</button>
  </div>
  <div>
    <p>未完了</p>
    <ul>
      <div>
        <li>ああああ</li>
        <button>完了</button>
        <button>削除</button>
      </div>
      <div>
        <li>いいいい</li>
        <button>完了</button>
        <button>削除</button>
      </div>
    </ul>
  </div>
  <div>
    <p>未完了</p>
    <ul>
      <div>
        <li>うううう</li>
        <button>戻す</button>
      </div>
    </ul>
  </div>
  </>
  );
};

// export default App;