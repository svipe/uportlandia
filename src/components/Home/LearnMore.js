import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import { CapsuleHeading } from "../shared/elements";
import * as theme from "../shared/theme";
import { large, medium } from "../shared/grid";
import learnMoreImage from "../../images/learn-more.png";
import sertoWhite from "../../images/serto-white-horiz.png";
import popupIcon from "../../images/popup-arrow.svg";

function LearnMore () {
  const { t } = useTranslation();
  return (<Wrapper>
    <CapsuleHeading>{t("Learn More About Serto Ecosystem")}</CapsuleHeading>
    <Container>
      <Article>
        <img src={learnMoreImage} alt="Article" />
        <div className="content">
          <h5>The title of the article goes here and it might be long</h5>
          <p>
            Caption goes here. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation.
          </p>
        </div>
        <div>
          <a className="capsule-link" href="#">
            Read More
            <img className="popup-icon" src={popupIcon} alt="" />
          </a>
        </div>
      </Article>
      <Aside>
        <img className="logo" src={sertoWhite} alt="uPort Serto Logo" />
        <h5>Want to build your own ecosystem?</h5>
        <p>
          Tell your manager and collegues about possibilites that uPort
          brings.  Build uPort Ecosystem with your customer in mind.
        </p>
        <a className="capsule-link inverse" href="#">Contact Us</a>
      </Aside>
    </Container>
  </Wrapper>);
}

const Wrapper = styled.div`
  background-color: #EEEDF4;
  padding: 3rem 20px 7rem;
  ${medium(`padding: 3rem 10vw 7rem;`)}

  ${CapsuleHeading} {
    background-color: #EEEDF4;
  }
  .capsule-link {
    align-items: center;
    background: ${theme.colors.primary};
    border-radius: 50px;
    color: #fff;
    display: flex;
    font-weight: 600;
    padding: 16px 38px;
    font-size: ${12/16}rem;
    justify-content: center;
    text-decoration: none;
    text-transform: uppercase;

    &.inverse {
      background: #fff;
      color: ${theme.colors.primary};
    }

    .popup-icon {
      margin-left: 8px;
    }
  }
`;
const Container = styled.div`
  ${medium("display: flex;")}
`;
const Article = styled.article`
  align-items: flex-start;
  background: #fff;
  box-shadow: 0 0 50px rgba(50, 48, 57, 0.2);
  border-radius: 5px;
  flex: 2;
  padding: 40px 20px;
  ${medium(`
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 40px;

    div:last-child {
      grid-area: 2 / 1 / 3 / 3;
      .capsule-link {
        float: right;
      }
    }
  `)}
  ${large(`padding: 40px`)}

  img {
    display: block;
    max-height: 100%;
    max-width: 100%;
  }
  h5 {
    font-size: ${20/16}rem;
    font-weight: 700;
    margin: 1rem 0;
    ${medium(`margin: 0 0 1rem;`)}
  }
  p {
    font-size: 1rem;
    margin-bottom: 1rem;
  }

`;
const Aside = styled.aside`
  align-items: center;
  background: #5952FF;
  box-shadow: 0 0 50px rgba(50, 48, 57, 0.2);
  border-radius: 5px;
  color: #fff;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  margin: 40px 0 0 0;
  padding: 40px 20px;
  text-align: center;
  ${medium("margin: 0 0 0 2rem;")}
  ${large(`padding: 40px`)}
  .logo {
    max-height: 100%;
    max-width: 100%;
  }
  h5 {
    font-size: ${20/16}rem;
    font-weight: 700;
    margin: 1.5rem 0 1rem;
  }
  p {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`;

export default LearnMore;