import { Container } from '@mui/material'
import Header from './Header'
import UserName from './UserName'
import FirstView from './FirstView'

export default function Home() {
  return (
    <>
      <Container maxWidth="sm">
        <div>Here is Home</div>
        <UserName />
        <Header />
        <FirstView />
      </Container>
    </>
  );
}
