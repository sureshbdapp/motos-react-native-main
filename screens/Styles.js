import styled from "styled-components/native";

export const OTPInputContainer = styled.View`
  justify-content: space-between;
  align-items: center;
  align-self: center;
  width:300px;
`;

export const TextInputHidden = styled.TextInput`
  width: 300px;
  border-color: #FF6464;
  border-width: 1px;
  border-radius: 5px;
  padding: 15px;
  margin-top: 50px;
  color: white; 
  position: absolute;
  opacity: 0;
`;

export const SplitOTPBoxesContainer = styled.Pressable`
  width: 80%;
  flex-direction: row;
  justify-content: space-evenly;
  
`;
export const SplitBoxes = styled.View`
  border-color: #80808080;
  border-width: 2px;
  border-radius: 5px;
  padding: 10px;
  min-width: 50px;
`;

export const SplitBoxText = styled.TextInput`
  font-size: 20px;
  text-align: center;
  color: #000;
`;

export const SplitBoxesFocused = styled.View`
  border-color: green;
  border-width: 2px;
  border-radius: 5px;
  padding: 12px;
  min-width: 50px;
`;