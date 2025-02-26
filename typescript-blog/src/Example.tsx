import React, { useRef, useState } from "react";
import styled from "styled-components";

interface MyButtonProps {
  primary?: boolean;
  height?: number;
}

const MyButton = styled.button<MyButtonProps>`
  color: white;
  padding: 10px;
  ${(props) => props.height && `height:${props.height}px;`};
  ${(props) => (props.primary ? `background-color:blue` : `background-color:lightblue`)};
`;

interface ButtonProps {
  label: string;
}

function CustomButton() {
  return (
    <MyButton height={50} primary>
      Click me
    </MyButton>
  );
}

const Button: React.FC<ButtonProps> = ({ label }: ButtonProps) => {
  return <button>{label}</button>;
};

interface User {
  id: number;
  name: string;
}

function ExmapleFunc() {
  const [count, setCount] = useState<number>(0);
  const [user, setUser] = useState<User | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  const handleClick = (event: React.MouseEvent<HTMLInputElement>) => {
    console.log("button clicked");
  };

  return (
    <>
      <div></div>
    </>
  );
}

export { CustomButton, Button, ExmapleFunc };
