import styled from 'styled-components';

export const Button = styled.button`
  font-size: 1rem;
  padding: 0.5rem;
  margin: 0.5rem;
  width: 100px;
  height: 50px;
  font-family: 'Poppins';
  text-transform: uppercase;
  color: #FFF;
  background-image: linear-gradient(to left, #C3CEF5, #577E9E, #A784D1);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background-size: 100%;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  transition: background-image 0.3s ease-in-out;
  
  &:hover {
    background-image: linear-gradient(to left, #A7CCD1, #E09FDD, #9DD6ED);

    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);
  }
`;

