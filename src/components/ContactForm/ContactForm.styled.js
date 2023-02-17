import styled from 'styled-components';

export const Form = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px;
  border: 1px solid grey;
`;

export const Label = styled.label`
  font-size: 16px;
  display: block;
  width: 200px;
  margin-bottom: 8px;
  line-height: 1.17;
  letter-spacing: 0.01em;
  text-align: left;
  cursor: pointer;
`;

export const Input = styled.input`
  padding-left: 20px;
  width: 200px;
  height: 20px;
  border: 1px solid grey;
  border-radius: 4px;
  outline: transparent;
  cursor: pointer;
  :focus {
    border: 3px solid #7fabe4;
  }
`;

export const AddButton = styled.button`
  color: grey;
  border-radius: 4px;
  border: 1px solid grey;
  cursor: pointer;
  font-size: 13px;
  width: 100px;
  height: 20px;
`;
