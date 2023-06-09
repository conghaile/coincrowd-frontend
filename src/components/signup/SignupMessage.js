import { Box } from '@chakra-ui/react'

export const SignupMessage = ({ response }) => {
    if (response === "success") {
        return (
            <Box>Thanks for signing up! Please check your email and click the link to verify your account.</Box>
        )
    }

    if (response === "failed") {
        return (
            <Box>An account already exists with that email address. Please sign in.</Box>
        )
    }

    if (response === "error") {
        <Box>We were unable to send a verification email. Either the entered email address was invalid, or our email provider has failed. Please try again.</Box>
    }
}