import styled from 'styled-components';


export const Container = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 15px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  cursor: pointer;

  background-color: #f3f6f9;

  /* background-color: #20bcc6; */
  -webkit-box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12),
    0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.1);
    background-color: #c0c9d8;
  }
`;