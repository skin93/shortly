import {
  StyledContainer,
  FooterContent,
  FoooterLinkTitle,
  FooterLink,
  FooterLinkItem,
  FooterMediaWrapper,
  FooterMediaLink,
  StyledFooter,
  FooterHeading,
  Icon,
} from "./Footer.styled";

import FBIcon from "assets/icon-facebook.svg";
import TwitterIcon from "assets/icon-twitter.svg";
import PinterestIcon from "assets/icon-pinterest.svg";
import InstagramIcon from "assets/icon-instagram.svg";

export default function Footer() {
  return (
    <StyledFooter>
      <StyledContainer>
        <FooterHeading>Shortly</FooterHeading>
        <FooterContent>
          <FooterLinkItem>
            <FoooterLinkTitle>Features</FoooterLinkTitle>
            <FooterLink>Link Shortening</FooterLink>
            <FooterLink>Branded Links</FooterLink>
            <FooterLink>Analytics</FooterLink>
          </FooterLinkItem>
          <FooterLinkItem>
            <FoooterLinkTitle>Resources</FoooterLinkTitle>
            <FooterLink>Blog</FooterLink>
            <FooterLink>Developers</FooterLink>
            <FooterLink>Support</FooterLink>
          </FooterLinkItem>
          <FooterLinkItem>
            <FoooterLinkTitle>Company</FoooterLinkTitle>
            <FooterLink>About</FooterLink>
            <FooterLink>Our Team</FooterLink>
            <FooterLink>Careers</FooterLink>
            <FooterLink>Contact</FooterLink>
          </FooterLinkItem>
          <FooterMediaWrapper>
            <FooterMediaLink>
              <Icon src={FBIcon} />
            </FooterMediaLink>
            <FooterMediaLink>
              <Icon src={TwitterIcon} />
            </FooterMediaLink>
            <FooterMediaLink>
              <Icon src={PinterestIcon} />
            </FooterMediaLink>
            <FooterMediaLink>
              <Icon src={InstagramIcon} />
            </FooterMediaLink>
          </FooterMediaWrapper>
        </FooterContent>
      </StyledContainer>
    </StyledFooter>
  );
}
