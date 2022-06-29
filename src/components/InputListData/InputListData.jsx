import React from "react";
import { BtnTag, FormTag, InputTag } from "./styled";

function InputListData({ handleInputChanged, textValue, handleOnKeyUp }) {
  return (
    <FormTag onSubmit={() => console.log(textValue)}>
      <InputTag
        onChange={handleInputChanged}
        value={textValue}
        onKeyUp={handleOnKeyUp}
      />
      <BtnTag>Submit</BtnTag>
    </FormTag>
  );
}

export default InputListData;
