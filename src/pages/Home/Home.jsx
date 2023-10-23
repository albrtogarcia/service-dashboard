import Button from 'core/Button'
import Input from 'core/Input'

const Home = () => {
  return (
    <div className="card">
      <h2>Home</h2>
      <p>
        Home page in <code>/src/pages/Home</code> with components from Core Library.
      </p>
      <Input type="text" label="Name" />
      <Button>Send</Button>
    </div>
  )
}

export default Home
