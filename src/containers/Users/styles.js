import styled from "styled-components";
import Background from "../../assets/background2.svg";

export const Container = styled.div`
  background: url("${Background}");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  height: 100%;
  min-height: 100vh;
`;

export const Image = styled.img`
  margin-top: 30px;
`;

export const User = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 342px;
  height: 58px;
  margin-top: 20px;
  border-radius: 14px;

  background: linear-gradient(
    157.44deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%
  );
  outline: none;
  border: none;

  p {
    color: #ffffff;
    font-size: 20px;
    font-weight: normal;
    font-style: normal;
    line-height: 28px;
  }

  button {
    border: none;
    cursor: pointer;
    background: none;
  }
`;
