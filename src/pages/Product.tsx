import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { SigninForm } from "../types";

import SignInBack from "../assets/images/signup-bg.jpg";
import { axiosInstance } from "../utils/axios";

const HOST_URL = "https://test.v5.pryaniky.com";

const Product: FC = () => {
  const [fields, setFields] = React.useState<SigninForm>({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChangeField = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFields({
      ...fields,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!fields.username || !fields.password) {
      alert("Необходимо ввести username и пароль!");
      return;
    }

    try {
      const { data } = await axiosInstance.post(
        "/ru/data/v3/testmethods/docs/login",
        JSON.stringify({
          username: fields.username,
          password: fields.password,
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const token = data.data.token;
      window.localStorage.setItem("pryaniki-token", token);

      console.log(token);

      if (token) {
        navigate("/table");

        setFields({
          username: "",
          password: "",
        });
      } else {
        alert("Ошибка! Неверное имя пользователя или пароль");
      }
    } catch (error) {
      console.error(error);
      alert(`Ошибка! ${error}`);
    }
  };
  return <div></div>;
};

export default Product;
