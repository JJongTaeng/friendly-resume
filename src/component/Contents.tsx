import React from 'react';
import { ContentsType } from "../type";
import { v4 as uuidv4 } from 'uuid';
import { Col, Row } from "react-row-col";
import styled from "@emotion/styled";
import Linksvg from "./Linksvg";

interface ContentsProps {
  contents: ContentsType[] | string[];
  deps: number;
}

const contentsSpan = { xs: 24, sm: 24, md: 24, lg: 6, xl: 4, xxl: 4 }
const listSpan = { xs: 24, sm: 24, md: 24, lg: 18, xl: 20, xxl: 20 }

const Contents = ({ contents, deps }: ContentsProps) => {
  return <>
    <Row>
      {
        contents.map((content) => {
          if(typeof content !== 'string') {
            return (
              <Col key={uuidv4()}>
                <Row gutter={[10, 10]}>
                  <Col {...contentsSpan}>
                    <Row>
                      <Col>
                        <Title deps={deps}>
                          {content.title}
                          { content.link && <a target='_blank' href={content.link}><Linksvg/></a>}
                        </Title>
                      </Col>
                      <Col>
                        <Period>{content?.period}</Period>
                      </Col>
                    </Row>
                  </Col>
                  <Col {...listSpan}>
                    <Contents key={uuidv4()} contents={content.children} deps={deps + 1}/>
                  </Col>
                </Row>
              </Col>
            );
          } else {
            return (
              <Col key={uuidv4()}>
                <ul>
                  <li>
                    {content}
                  </li>
                </ul>
              </Col>
            )
          }
        })
      }
    </Row>
    { deps === 1 ? <hr/> : null }
  </>

};

const Period = styled.span`
  color: #999;
  font-size: 0.6rem;
`

const Title = styled.span<{deps: number}>`
  font-size: ${props => `calc(1.4rem - ${props.deps * 6}px)`};
  font-weight: bold;
  word-break: keep-all;
`

export default Contents;