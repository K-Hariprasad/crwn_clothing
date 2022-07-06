import styled from "styled-components";

export const BaseButton = styled.button`
  margin: 10px;
  padding: 10px;
  height: 38px;
  border-radius: 4px;
  border: 1px solid #5d5d5d;
  cursor: pointer;
`;

export const GoogleButton = styled(BaseButton)`
  background-color: #4285f4;
  border: 0;
  outline: 0;
  color: #fff;
  &:hover {
    background-color: #fff;
    color: #4285f4;
    border: 2px solid #4285f4;
  }
`;

export const DarkButton = styled(BaseButton)`
  width: 80%;
  opacity: 0;
  position: absolute;
  top: 255px;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
  color: #fff;
  border: 1px solid white;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export const CheckoutButton = styled(BaseButton)`
  margin-top: auto;
  padding: 10px;
  background: black;
  color: #fff;
  border: 1px solid white;
  letter-spacing: 1px;
  text-transform: uppercase;
  &:hover {
    background: #fff;
    color: #000;
    border: 1px solid #000;
  }
`;
