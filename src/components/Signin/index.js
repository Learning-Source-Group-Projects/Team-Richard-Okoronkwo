import React from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormH1, Formlabel, FormInput, FormButton, Text} from './SigninElements'

const SignIn = () => {
  return (
    <>
    <Container>
        <FormWrap>
            <Icon to='/'>dolla</Icon>
            <FormContent>
                <Form action='#'>
                    <FormH1>Sign into your account</FormH1>
                    <Formlabel htmlFor='for'>Email</Formlabel>
                    <FormInput type='email' required />
                    <Formlabel htmlFor='for'>Password</Formlabel>
                    <FormInput type='password' required />
                    <FormButton type='submit'>Continue</FormButton>
                    <Text>Forgot Password</Text>
                </Form>
            </FormContent>
        </FormWrap>
    </Container>
    </>
  )
}

export default SignIn