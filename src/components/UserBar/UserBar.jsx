import { Form, Input, Label, Title } from "./UserBar.styled";
import { useDebounce } from "../hooks/debounceHook";
import { useEffect, useState } from "react";

export default function UserBar({ user, changeUser }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (!user) {
      setName("");
      setEmail("");
      setPhone("");
      setAddress("");
    }
  }, [user]);
  const debouncedRequest = useDebounce(() => {
    changeUser({ name, email, phone, address });
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "address":
        setAddress(value);
        break;
      default:
        return;
    }

    debouncedRequest();
  };

  return (
    <Form>
      <Label htmlFor="name">
        <Title>Name:</Title>
        <Input
          type="text"
          name="name"
          id="name"
          autoComplete="off"
          placeholder="Only letters, dash and spaces"
          required
          value={name}
          onChange={handleChange}
        />
      </Label>
      <Label htmlFor="email">
        <Title>Email:</Title>
        <Input
          type="text"
          name="email"
          id="email"
          autoComplete="off"
          pattern="/.+@.+\..+/i"
          placeholder="your email"
          required
          value={email}
          onChange={handleChange}
        />
      </Label>
      <Label htmlFor="phone">
        <Title>Phone:</Title>
        <Input
          type="tel"
          name="phone"
          id="phone"
          autoComplete="off"
          placeholder="+380xxxxxxxxx"
          required
          value={phone}
          onChange={handleChange}
        />
      </Label>
      <Label htmlFor="address">
        <Title>Address:</Title>
        <Input
          type="tel"
          name="address"
          id="address"
          autoComplete="off"
          title="Enter the address where the goods need to be delivered"
          required
          value={address}
          placeholder="delivery address"
          onChange={handleChange}
        />
      </Label>
    </Form>
  );
}
