import React, { useState } from "react";
import { Button } from "../styled-components/Buttons";
import Error from "../styled-components/Error";
import { Input, Select } from "../styled-components/input";
import { FormField } from "../styled-components/FormField";
import { Label } from "../styled-components/Label";
import styled from "styled-components";

function SignUpForm({ onLogin }) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [title, setTitle] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [email, setEmail] = useState("")
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname,
        lastname,
        title,
        email,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormField>
        <Label htmlFor="name">First Name</Label>
        <Input
          type="text"
          id="firstname"
          autoComplete="off"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
      </FormField>
      <FormField>
        <Label htmlFor="name">Last Name</Label>
        <Input
          type="text"
          id="lastname"
          autoComplete="off"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
      </FormField>
      <FormField>
        <Label htmlFor="email">Email</Label>
        <Input
          type="text"
          id="email"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormField>
      <FormField>
        <Label htmlFor="Title">Role</Label>
        <Select
          type="select"
          id="Title"
          autoComplete="off"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        >
          <option value="Select">Select Role</option>
          <option value="Manager">Manager</option>
          <option value="Case Worker">Case Worker</option>
        </Select>
      </FormField>
      <FormField>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
      </FormField>
      <FormField>
        <Label htmlFor="password">Password Confirmation</Label>
        <Input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
      </FormField>
      <FormField>
        <Button type="submit">{isLoading ? "Loading..." : "Sign Up"}</Button>
      </FormField>
      <FormField>
        {errors.map((err) => (
          <Error key={err}>{err}</Error>
        ))}
      </FormField>
    </form>
  );
}


export default SignUpForm;