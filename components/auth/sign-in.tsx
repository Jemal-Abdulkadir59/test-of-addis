import {
  Auth,
  AuthDescription,
  AuthForm,
  AuthHeader,
  AuthTitle,
} from "./auth-layout"
import { SignInForm } from "./sign-in-form"

export function SignIn() {
  return (
    <Auth imgSrc="/img/gallery/meal.jpg">
      <AuthHeader>
        <AuthTitle>Sign In</AuthTitle>
        <AuthDescription>
          Enter your email below to sign in to your account
        </AuthDescription>
      </AuthHeader>
      <AuthForm>
        <SignInForm />
      </AuthForm>
    </Auth>
  )
}
