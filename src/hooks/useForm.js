import { useState } from "react";


export const useForm = (initialForm = {}) => {
    const [formState, setFormState] = useState(initialForm);
    
    
      //cogemos el name para saber que campo es y su value para cambiarlo
      const onInputChange = (e) => {
        const { name, value } = e.target;
        setFormState(() => ({
          ...formState,
          [name]: value,
        }));
      };
  return {
    formState,
    onInputChange
  }
}
