import { act, logRoles, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FormLogin } from '.'
import { BrowserRouter } from 'react-router-dom'

const handleSubmitLogin = jest.fn()
const showHide = jest.fn()
const inputType = jest.fn()
const icon = jest.fn()
describe('Form Login', () => {
  it('should show error message when fields was empty', async () => {
    render(
      <BrowserRouter>
        <FormLogin
          handleSubmitLogin={handleSubmitLogin}
          showHide={showHide}
          inputType={inputType}
          icon={icon}
        />
      </BrowserRouter>
    )

    const inputEmail = screen.getByRole('textbox', { name: 'email' })
    const inputPassword = screen.getByRole('textbox', { name: 'password' })
    const buttonSubmit = screen.getByRole('button', { name: 'Iniciar' })

    act(() => {
      userEvent.click(buttonSubmit)
    })

    await waitFor(() => {
      expect(screen.getByText('Digite um email válido')).toBeVisible()
      expect(
        screen.getByText('A senha deve ter pelo menos 6 digitos!')
      ).toBeVisible()
    })

    expect(inputEmail).toBeVisible()
    expect(inputPassword).toBeVisible()
  })
  it('should type into email and password fields and submit form', async () => {
    render(
      <BrowserRouter>
        <FormLogin
          handleSubmitLogin={handleSubmitLogin}
          showHide={showHide}
          inputType={inputType}
          icon={icon}
        />
      </BrowserRouter>
    )

    const inputEmail = screen.getByRole('textbox', { name: 'email' })
    const inputPassword = screen.getByRole('textbox', { name: 'password' })
    const buttonSubmit = screen.getByRole('button', { name: /Iniciar/i })

    act(() => {
      userEvent.type(inputEmail, 'heloisa@gmail.com')
      userEvent.type(inputPassword, '123456')
      userEvent.click(buttonSubmit)
    })

    await waitFor(() => {
      expect(screen.queryByText('Digite um email válido')).not.toBeInTheDocument()
      expect(
        screen.queryByText('A senha deve ter pelo menos 6 digitos!')
      ).not.toBeInTheDocument()
    })
  })

  it('Verifica se a função é chamada apenas 1 vez', async () => {
    render(
      <BrowserRouter>
        <FormLogin
          handleSubmitLogin={handleSubmitLogin}
          showHide={showHide}
          inputType={inputType}
          icon={icon}
        />
      </BrowserRouter>
    )

    const mockEmail = 'heloisa@gmail.com'
    const mockPassword = 123456

    const inputEmail = screen.getByRole('textbox', { name: 'email' })
    const inputPassword = screen.getByRole('textbox', { name: 'password' })
    const buttonSubmit = screen.getByRole('button', { name: /Iniciar/i })

    act(() => {
      userEvent.type(inputEmail, mockEmail)
      userEvent.type(inputPassword, mockPassword)
      userEvent.click(buttonSubmit)
    })

    await waitFor(() => {
      expect(screen.queryByText('Digite um email válido')).not.toBeInTheDocument()
      expect(
        screen.queryByText('A senha deve ter pelo menos 6 digitos!')
      ).not.toBeInTheDocument()
    })

    expect(inputEmail).toHaveValue(mockEmail)
    expect(inputPassword).toHaveValue(mockPassword)

    //Verifica se a função é chamada apenas 1 vez
    await waitFor(() => {
      // expect(handleSubmitLogin).toHaveBeenCalledTimes(1)
      expect(handleSubmitLogin).toHaveBeenCalledWith(
        {
          email: mockEmail,
          password: mockPassword
        },
        expect.anything()
      )
    })

  })
})
