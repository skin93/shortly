import {
  StyledDiv,
  StyledSection,
  Header,
  Statistics,
  Statistic,
  Name,
  Desc,
  ImgWrapper,
  Img,
} from "./Statistics.styled";
import { Container } from "GlobalStyle";
import iconBrand from "assets/icon-brand-recognition.svg";
import iconDetailed from "assets/icon-detailed-records.svg";
import iconFully from "assets/icon-fully-customizable.svg";

export default function StatisticsSection() {
  return (
    <StyledSection>
      <Container>
        <StyledDiv></StyledDiv>
        <Header>
          <h3>Advanced Statistics</h3>
          <p>
            Track how your links are performing accros the web with our advanced
            statistics dashboard
          </p>
        </Header>
        <Statistics>
          <Statistic>
            <ImgWrapper>
              <Img src={iconBrand} />
            </ImgWrapper>
            <Name>Brand Recognition</Name>
            <Desc>
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instil confidence in your content
            </Desc>
          </Statistic>
          <Statistic>
            <ImgWrapper>
              <Img src={iconDetailed} />
            </ImgWrapper>
            <Name>Detailed Records</Name>
            <Desc>
              Gain insights into who is clicking your links. Knowhing when and
              where people engage with your content helps inform better
              decisions.
            </Desc>
          </Statistic>
          <Statistic>
            <ImgWrapper>
              <Img src={iconFully} />
            </ImgWrapper>
            <Name>Fully Customizable</Name>
            <Desc>
              Improve brand awareness and content discoverbality through
              customizable links, supercharging audience engagement.
            </Desc>
          </Statistic>
        </Statistics>
      </Container>
    </StyledSection>
  );
}
