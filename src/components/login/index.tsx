import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InputValue } from '../../types/types';
import { createUser } from '../../services/userAPI';

const initialValue = {
  name: '',
};

function Login() {
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState<InputValue>(initialValue);
  const navigate = useNavigate();
  const handleClick = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    await createUser(inputValue);
    setLoading(false);
    navigate('/search');
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const disable = inputValue.name.length < 3;
  if (loading) {
    return <h2>Carregando...</h2>;
  }

  return (
    <form onSubmit={ handleClick }>
      <label htmlFor="login">
        <input
          id="login"
          name="name"
          onChange={ handleChange }
          type="text"
          data-testid="login-name-input"
        />
      </label>
      <button
        type="submit"
        disabled={ disable }
        data-testid="login-submit-button"
      >
        Entrar

      </button>
    </form>
  );
}

export default Login;
