
/**
 * this function do ...
 */

import styled from "styled-components";

const Name = styled.h1`
  margin: 1rem;
  color: ${(props) => props.theme.forground};
`;
export default function Home() {
  return (
    <>
      <Name>Home</Name>
    </>
  );
}