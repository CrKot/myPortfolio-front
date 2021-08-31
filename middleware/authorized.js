export default function ({ $auth, redirect }) {
  if (!$auth.loggedIn) {
    return redirect('/user/sign-up')
  }
}
