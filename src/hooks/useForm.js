import { useState } from 'react';

const useForm = (initialValues = {}, validationRules = {}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Función para validar un campo específico
  const validateField = (name, value) => {
    const rules = validationRules[name];
    if (!rules) return '';

    // Validación requerida
    if (rules.required && (!value || value.toString().trim() === '')) {
      return rules.required === true ? 'Este campo es requerido' : rules.required;
    }

    // Validación de longitud mínima
    if (rules.minLength && value.length < rules.minLength) {
      return `Debe tener al menos ${rules.minLength} caracteres`;
    }

    // Validación de longitud máxima
    if (rules.maxLength && value.length > rules.maxLength) {
      return `No puede tener más de ${rules.maxLength} caracteres`;
    }

    // Validación de email
    if (rules.email && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return 'Ingrese un email válido';
      }
    }

    // Validación de teléfono boliviano
    if (rules.phone && value) {
      const phoneRegex = /^(\+591|591)?[67]\d{7}$/;
      if (!phoneRegex.test(value.replace(/\s/g, ''))) {
        return 'Ingrese un número de teléfono válido';
      }
    }

    // Validación personalizada
    if (rules.custom && typeof rules.custom === 'function') {
      return rules.custom(value, values);
    }

    return '';
  };

  // Función para validar todos los campos
  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    Object.keys(validationRules).forEach(fieldName => {
      const error = validateField(fieldName, values[fieldName]);
      if (error) {
        newErrors[fieldName] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  // Manejar cambio de valores
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === 'checkbox' ? checked : value;

    setValues(prev => ({
      ...prev,
      [name]: newValue
    }));

    // Limpiar error del campo si existe
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Manejar blur (cuando el usuario sale del campo)
  const handleBlur = (event) => {
    const { name, value } = event.target;

    setTouched(prev => ({
      ...prev,
      [name]: true
    }));

    // Validar el campo cuando el usuario sale de él
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  // Manejar envío del formulario
  const handleSubmit = async (onSubmit) => {
    return async (event) => {
      event.preventDefault();
      setIsSubmitting(true);

      // Marcar todos los campos como tocados
      const allTouched = {};
      Object.keys(validationRules).forEach(key => {
        allTouched[key] = true;
      });
      setTouched(allTouched);

      // Validar formulario
      const isValid = validateForm();

      if (isValid && onSubmit) {
        try {
          await onSubmit(values);
        } catch (error) {
          console.error('Error en el envío del formulario:', error);
        }
      }

      setIsSubmitting(false);
    };
  };

  // Resetear formulario
  const reset = () => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
  };

  // Establecer valores programáticamente
  const setFieldValue = (name, value) => {
    setValues(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Establecer error programáticamente
  const setFieldError = (name, error) => {
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  return {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    reset,
    setFieldValue,
    setFieldError,
    validateForm,
    isValid: Object.keys(errors).length === 0
  };
};

export default useForm;