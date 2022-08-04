import { Container } from '@mui/material'
import Header from './Header'
import UserName from "./UserName";

export default function Home() {
  return (
    <>
      <Container maxWidth="sm">
        <div>Here is Home</div>
        <UserName />
        <Header />
      </Container>
    </>
  );
}
