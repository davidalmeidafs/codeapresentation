import styled from "styled-components";

export const Box = styled.div`
  display: grid;
  text-align: center;
  border-radius: 25px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 15em;
  padding: 2.5em;
  overflow-y: auto;
  color: #333;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  z-index: 101;
  width: 30vw;
  height: 60vh;
  margin-top: 25%;
`;

export const Input = styled.input`
  min-height: 35px;
  line-height: 21px;
  resize: vertical;
  box-sizing: border-box;
  border: 1px solid rgb(217, 217, 217);
  padding: 4px 11px;
`;

export const Label = styled.label`
  margin: 2%;
  font-size: 25px;
`;

export const Button = styled.button`
  font-size: 15px;
  color: #fff;
  padding: 0.5rem 0.8rem;
  margin-top: 1rem;
  margin-right: 1rem;
  background: ${(props: {background?: string}) => {
    const {background = '#3bb75e'} = props;
    return background
}};
  border: none;
  border-radius: 4px;
  text-transform: capitalize;
  cursor: pointer;
`;
