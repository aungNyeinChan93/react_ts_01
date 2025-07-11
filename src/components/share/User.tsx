import React from "react";
import type { FC } from "react";

type UserProps = {
  name: string;
  age: number;
  isUser: boolean;
}

const User: FC<UserProps> = ({ name, age, isUser }) => {
  return (
    <React.Fragment>
      <section>
        <p>
          My name is {name} .I am {age} years old.{isUser && " I am user"}
        </p>
      </section>
    </React.Fragment>
  );
};

export default User;
