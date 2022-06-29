import React, { useState } from "react";
import InputListData from "../InputListData/InputListData";
import UlListData from "../UlListData/UlListData";
import { DivTagContainer } from "./styled";
import CityList from "../../dist/fakerListData";
function DataList({ onChangedFunction }) {
  const [text, setText] = useState("");
  const [filterCity, setfilterCity] = useState([]);

  function handleOnChanged(e) {
    setText(e.target.value);
  }
  function handleOnKeyUp() {
    onChangedFunction(CityList, text, setfilterCity);
  }
  function handleClick(cityText) {
    setText(cityText);
  }

  return (
    <DivTagContainer>
      <InputListData
        handleInputChanged={handleOnChanged}
        handleOnKeyUp={handleOnKeyUp}
        textValue={text}
      />
      <UlListData listData={filterCity} handleClick={handleClick} />
    </DivTagContainer>
  );
}

export default DataList;
