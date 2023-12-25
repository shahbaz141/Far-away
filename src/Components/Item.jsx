import React, { useState } from "react";

const Item = ({ description1, quantity1, packed1,deletehandle,id}) => {
  const [checked, setChecked] = useState(packed1);
  return (
    <div>
      <span style={{textDecoration:`${checked?"line-through":""}`}}>
        {quantity1} {description1}
      </span>
      <button onClick={(e)=>deletehandle(id)}>❌</button>
      <input
        type="checkbox"
        value={checked}
        onChange={() => setChecked(!checked)}
      />
    </div>
  );
};

export default Item;
