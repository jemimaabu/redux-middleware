export const AUTHORISE = 'AUTHORISE';
export const UNAUTHORISE = 'UNAUTHORISE'

export function authUser(user) {
  return { type: AUTHORISE, payload: user };
}

export function unauthUser() {
  return { type: UNAUTHORISE }
}