import React from 'react';
import { Col, Row } from "react-row-col";
import Link from "./Link";
import { useHeader } from "../hooks/useHeader";
import { v4 as uuidv4 } from 'uuid';
import styled from "@emotion/styled";
import profile from '../assets/profile.jpg'

const Heading = () => {
  const { header } = useHeader();

  return (
    <Row gutter={[20, 0]}>
      <Col {...{ xxl: 20, xl: 18, lg: 16, md: 14, sm: 12, xs: 24 }}>
        <h1>
          { header.title }
        </h1>
      </Col>
      <Col {...{ xxl: 4, xl: 6, lg: 8, md: 10, sm: 12, xs: 24 }}>
        <FlexRow>
          {
            header.links?.map(({ link, name, image }) => {
              return <Col span={24 / (header.links?.length || 1)} key={uuidv4()}>
                <Link image={image} link={link} name={name}/>
              </Col>
            })
          }
        </FlexRow>
      </Col>
      <Col>
        <Row gutter={[0, 20]}>
          <Col {...{ xxl: 6, xl: 6, lg: 6, md: 8, sm: 12, xs: 24 }}>
            <FlexCenter>
              <Image src={profile} alt='profile'/>
            </FlexCenter>
          </Col>
          <Col {...{ xxl: 18, xl: 18, lg: 18, md: 16, sm: 12, xs: 24 }}>
            <Row>
              <Col>
                <h2>{ header.introduction.title }</h2>
              </Col>
              <Col>
                <span>
                  { header.introduction.description }
                </span>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

const FlexRow = styled(Row)`
  align-items: center;
  height: 100%;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 250px;
  max-height: 250px;
`

const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export default Heading;
