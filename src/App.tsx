import { Form } from 'react-aria-components'
import { Button } from './components/Button'
import { TextField } from './components/TextField'
import './App.css'

export default function App() {
  return (
    <main>
      <h1>Hello World.</h1>
      <Form className="email-form" onSubmit={(e) => e.preventDefault()}>
        <TextField
          name="email"
          type="email"
          aria-label="Email address"
          placeholder="you@example.com"
          isRequired
        />
        <Button type="submit">Submit</Button>
      </Form>
    </main>
  )
}
