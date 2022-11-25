import styled from "styled-components";
import {
  COLOR_ACCENT,
  COLOR_DARK,
  COLOR_PRIMARY,
  COLOR_PRIMARY_VARIANT,
  COLOR_TEXT,
  MOBILE_WIDTH,
} from "../../config";

interface Props {
  photoUrl: string;
}

export const Container = styled.div`
  width: 350px;
  border-bottom: 2px solid ${COLOR_ACCENT};
  padding: 5px 10px;
  color: ${COLOR_TEXT};
  display: flex;
  transition: .3s;
  transition: 10px left;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;
  
  @media (max-width: ${MOBILE_WIDTH}) {
    width: 100%;
    background-color: ${COLOR_DARK};
  }
  &:hover{
    border-bottom: 2px solid ${COLOR_PRIMARY};
  }
`;

export const ProfilePic = styled.div<Props>`
    width: 60px;
    height: 60px;
  background-image: url(${(props) => props.photoUrl});
  background-position: center;
  background-size: cover;
  border-radius: 30px;
`;

export const userInfoWrapper = styled.div`
display: flex;
flex-direction: column;
margin-left: 10px;
cursor: pointer;
`

export const ProfileAge = styled.p`
font-weight: 200;
font-size: 12px;

`

export const ProfileName = styled.h3`

  font-weight: 300;

`;


