import { Metadata } from 'next'
import Link from 'next/link'
import { RegisterForm } from '../../../components/auth/register-form'

export const metadata: Metadata = {
  title: 'Register',
  description: 'Create a new account',
}

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="container max-w-lg p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <div className="flex flex-col space-y-6">
          <div className="text-center">
            <h1 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Create an account
            </h1>
            <p className="text-sm text-muted-foreground dark:text-gray-300">
              Enter your details to create a new account
            </p>
          </div>
          <RegisterForm />
          <p className="text-center text-sm text-muted-foreground dark:text-gray-400">
            Already have an account?{' '}
            <Link
              href="/"
              className="underline underline-offset-4 hover:text-primary dark:hover:text-primary-400 font-medium"
            >
              Sign in
            </Link>
          </p>
          <p className="text-center text-xs text-muted-foreground dark:text-gray-500">
            By creating an account, you agree to our{' '}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary dark:hover:text-primary-400"
            >
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary dark:hover:text-primary-400"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
