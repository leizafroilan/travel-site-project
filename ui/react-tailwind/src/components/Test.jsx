import React, { useState, useEffect, useRef } from "react";

function Test() {

  const sceneOptions = [
    { value: "mountain", label: "Nature" },
    { value: "ocean", label: "Ocean" },
    { value: "forest", label: "Forest" },
    // Add more options as needed
  ];

  const [checkedState, setCheckedState] = useState(
    new Array(sceneOptions.length).fill(false)
  );

  const handleSceneChange = (position) => {
    console.log("Checkbox clicked. Position:", position); 
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
    console.log(updatedCheckedState)
  }
  
  return (
    <div className='mb-4 pt-4'>
    <label htmlFor="scene" className="text-gray-500 text-xs block text-pink-500 font-serif pb-2">What</label>
    <div>
      {sceneOptions.map((option, index) => (
        <label key={index} htmlFor={option.value} className="inline-flex items-center">
          <input
            id={option.value}
            type="checkbox"
            value={option.value}
            checked={checkedState[index]}
            onChange={()=> handleSceneChange(index)}
            className="mr-2"
          />
          {option.label}
        </label>
    ))}
    </div>
  </div>
  );
};

export default Test;
