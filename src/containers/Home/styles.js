import styled from "styled-components";
import Background from "../../assets/background1.svg";

export const Container = styled.div`
  background: url("${Background}");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  height: 100vh;
`;

export const Image = styled.img`
  margin-top: 30px;
`;

export const InputLabel = styled.p`
  color: #eeeeee;
  font-size: 18px;
  font-weight: bold;
  font-style: normal;
  line-height: 22px;
  letter-spacing: -0.408px;
  text-align: left;
  margin-left: 25px;
`;

export const Input = styled.input`
  width: 342px;
  height: 58px;
  border: none;
  padding: 15px 20px 15px 25px;

  border-radius: 14px;

  background: linear-gradient(
    157.44deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%
  );
  outline: none;
  color: #ffffff;
  font-size: 24px;
  font-weight: normal;
  font-style: normal;
  line-height: 28px;
  margin-bottom: 34px;
`;
