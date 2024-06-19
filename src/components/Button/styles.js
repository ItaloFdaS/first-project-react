import styled from "styled-components";

export const Button = styled.button`
  width: 342px;
  height: 74px;
  margin-top: 130px;
  border-radius: 14px;

  border: ${(props) => (props.isBack ? "1px solid #ffffff" : "none")};

  background: ${(props) =>
    props.isBack ? "transparent" : "rgba(0, 0, 0, 0.8)"};

  font-size: 17px;
  font-weight: bold;
  font-style: normal;
  line-height: 28px;
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }

  img {
    transform: ${(props) => props.isBack && "rotateY(180deg)"};
  }
`;
