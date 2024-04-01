import styled from "styled-components";

const StyledDiv = styled.div`
  max-width: 150px;
  margin: 20px;
  padding: 15px;
  background: red;
  border: 5px solid blue;
  border-radius: 15px;
  color: white;
  font-weight: 600;
`;

export default function StyledComponents() {
  return (
    <StyledDiv>This div element is styled in styled-components.</StyledDiv>
  );
}
