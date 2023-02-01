import { RouteObject } from 'react-router-dom'
import { route as profile } from './Profile.component'
import { route as root } from './Root.component'
import { route as signup } from './SignUp.component'

export const routes: RouteObject[] = [
  root, 
  signup,
  profile
]

console.log({ routes })