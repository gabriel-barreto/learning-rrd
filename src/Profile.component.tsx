import localforage from 'localforage'
import { RouteObject, useActionData, useLoaderData } from 'react-router-dom'
import { delay, parseFormDataIntoObject } from './utils'

interface User {
  email: string
  password: string
}

const storageKey = 'gabriel-barreto@user'

function Profile() {
  const data = useLoaderData() as { email: string }
  const actionData = useActionData()
  return (
    <>
      <p className="welcome">Welcome, {data.email}!</p>
      <div className="preview">
        <h2>Loader data:</h2>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
      {actionData && (
        <div className="preview">
          <h2>Action data:</h2>
          <pre>{JSON.stringify(actionData, null, 2)}</pre>
        </div>
      )}
    </>
  )
}

export const route: RouteObject = {
  async action({ request }) {
    const formData = await request.formData()
    const data = parseFormDataIntoObject<User>(formData)
    await delay(5000)
    await localforage.setItem(storageKey, data)
    return data
  },
  element: <Profile />,
  async loader() {
    const user = await localforage.getItem(storageKey)
    return user
  },
  path: '/profile',
}