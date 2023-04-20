// Ce composant va être un exemple de l'ancienne syntaxe react avec les 'class component'
import { useState } from 'react';
import { InputWrapper, StyledLabel, StyledInput } from './emailInputStyle';

function EmailInput({ theme }) {
    const [inputValue, setInputValue] = useState('')
  
    return (
      <InputWrapper theme={theme}>
        <StyledLabel theme={theme}>Adresse email</StyledLabel>
        <StyledInput
          theme={theme}
          onChange={(e) => setInputValue(e.target.value)}
        />
        {inputValue}
      </InputWrapper>
    )
  }
  
  export default EmailInput
