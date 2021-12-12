import styled from "styled-components";

export const StyledSection = styled.section`
  position: relative;
  top: -150px;
  z-index: -1;
  background: hsl(230, 25%, 95%);

  @media ${({ theme }) => theme.device.desktop} {
    margin-top: 100px;
  }
`;

export const StyledDiv = styled.div`
  height: 10rem;
`;

export const Header = styled(StyledDiv)`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  & > h3 {
    font-size: 1.5rem;
  }

  & > p {
    line-height: 1.5;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.neutral.gray};
  }
`;

export const Statistics = styled(StyledDiv)`
  position: relative;
  top: 80px;
  margin-block: 0 80px;
  height: 1050px;
  display: flex;
  flex-direction: column;
  gap: 100px;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    width: 10px;
    height: 90%;
    background: ${({ theme }) => theme.colors.primary.cyan};
  }

  @media ${({ theme }) => theme.device.desktop} {
    flex-direction: row;
  }
`;

export const Statistic = styled.div`
  position: relative;
  height: 270px;
  padding-inline: 20px;

  background: #fff;

  gap: 30px;
  text-align: center;
`;

export const Name = styled.h3`
  margin-top: -20px;
  font-size: 1.5rem;
`;

export const Desc = styled.div`
  margin-top: 30px;
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.neutral.gray};
`;

export const ImgWrapper = styled.div`
  position: relative;
  top: -50px;
  left: 50%;
  transform: translate(-50%);
  background: ${({ theme }) => theme.colors.primary.darkViolet};
  width: 90px;
  height: 90px;
  border-radius: 50%;
`;

export const Img = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 45px;
  height: 45px;
`;
