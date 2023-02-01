import { Link, RouteObject } from 'react-router-dom'

function Root() {
  return (
    <>
      <h1>Hello react-router-dom v6!</h1>
      <Link to="/sign-up">Sign Up!</Link>
    </>
  )
}

export const route: RouteObject = {
  element: <Root />,
  path: '/'
}