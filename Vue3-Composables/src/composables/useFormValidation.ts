import { reactive, Ref, computed } from 'vue';  
  
export function useFormValidation(initialValues: Record<string, any>, validationRules: Record<string, (value: any) => string | null>) {  
  const formState = reactive({  
    values: initialValues,  
    errors: {} as Record<string, string>,  
    touched: {} as Record<string, boolean>,  
  });  
  
  const validateField = (fieldName: string) => {  
    const value = formState.values[fieldName];  
    const error = validationRules[fieldName](value);  
    formState.errors[fieldName] = error || '';  
    formState.touched[fieldName] = true;  
  };  
  
  const validateForm = () => {  
    let isValid = true;  
    for (const fieldName in validationRules) {  
      validateField(fieldName);  
      if (formState.errors[fieldName]) {  
        isValid = false;  
      }  
    }  
    return isValid;  
  };  
  
  const resetForm = () => {  
    formState.values = { ...initialValues };  
    formState.errors = {} as Record<string, string>;  
    formState.touched = {} as Record<string, boolean>;  
  };  
  
  const setValue = (fieldName: string, value: any) => {  
    formState.values[fieldName] = value;  
    validateField(fieldName);  
  };  
  
  const getFieldError = (fieldName: string): string | null => {  
    return formState.touched[fieldName] && formState.errors[fieldName] ? formState.errors[fieldName] : null;  
  };  
  
  return {  
    formState,  
    validateField,  
    validateForm,  
    resetForm,  
    setValue,  
    getFieldError,  
  };  
}