export const AUTHORIZE = 'AUTHORIZE';
export const UNAUTHORIZE = 'UNAUTHORIZE'

export function authUser(user) {
  return { type: AUTHORIZE, payload: user };
}

export function unauthUser() {
  return { type: UNAUTHORIZE }
}