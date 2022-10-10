import React from 'react';
import styled from "@emotion/styled";

interface LinkProps {
  image: string;
  link: string;
  name: string;
}

const Link = ({ image, link, name }: LinkProps) => {
  return (
    <Flex href={link} target="_blank">
      <Image src={image} alt={name} />
    </Flex>
  );
};

const Flex = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Image = styled.img`
  max-width: 80px;
  max-height: 80px;
`

export default Link;