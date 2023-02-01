import { useState } from 'react';
import { Form, RouteObject } from 'react-router-dom';
import { Loading } from '../components';

function SignUp() {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <>
      {isLoading && <Loading />}
      <Form method="post" action="/profile" onSubmit={() => setIsLoading(true)}>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input aria-label="email" id="email" name="email" type="email" />
        </div>
        <div className="field">
          <label htmlFor="password">Password</label>
          <input 
            aria-label="password"
            type="password"
            name="password"
            id="password"
          />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </>
  );
}

export const route: RouteObject = {
  element: <SignUp />,
  path: '/sign-up'
}
