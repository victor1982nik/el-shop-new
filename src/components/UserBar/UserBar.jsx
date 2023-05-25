import { Form, Input, Label, Title } from "./UserBar.styled";

export default function UserBar({ user, setUser }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    const obj = {};
    obj[name] = value;

    setUser(obj);
  };

  return (
    <Form>
      <Label htmlFor="name">
        <Title>Name:</Title>
        <Input
          type="text"
          name="name"
          title="The name can only consist of letters, apostrophe, dash and spaces."
          required
          //defaultValue={user.name}
          onChange={handleChange}
        />
      </Label>
      <Label htmlFor="email">
        <Title>Email:</Title>
        <Input
          type="text"
          name="email"
          pattern="/.+@.+\..+/i"
          title="Enter your email address to receive order tracking emails"
          required
          //defaultValue={user.email}
          onChange={handleChange}
        />
      </Label>
      <Label htmlFor="phone">
        <Title>Phone:</Title>
        <Input
          type="tel"
          name="phone"
          pattern="^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          //defaultValue={user.phone}
          onChange={handleChange}
        />
      </Label>
      <Label htmlFor="address">
        <Title>Address:</Title>
        <Input
          type="tel"
          name="address"
          title="Enter the address where the goods need to be delivered"
          required
          //defaultValue={user.address}
          onChange={handleChange}
        />
      </Label>
    </Form>
  );
}
