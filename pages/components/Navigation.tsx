//Package imports
import styled from "styled-components";
import React, { useEffect, useState } from "react";

import Link from "next/link";

//Style for navigation bar background
const StyledNavigation = styled.nav`
  background-color: transparent;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

interface SectionProps {
  side: string;
}

const Section = styled.div<SectionProps>`
  display: flex;
  justify-content: ${(props) => props.side};
  align-items: center;
  gap: 2rem;
  height: 100%;
  width: 100%;
`;

const Title = styled.button`
  font-size: 1.5rem;
  background: transparent;
  color: #800000;
  border: none;
  font-weight: bold;
`;

const Button = styled.a`
  font-size: 1.25rem;
  background: transparent;
  color: #800000;
  border: none;
  font-weight: bold;
  padding: 1rem;
`;

//Logic for navigation bar
const Navigation = () => {

  return (
    <StyledNavigation>
      <Section side="left">
        <Title>blog.westshae.com</Title>
      </Section>
      <Section side="right">
          <Link href="/">
            <Button>Explore</Button>
          </Link>
        )

      </Section>
    </StyledNavigation>
  );
};

export default Navigation;