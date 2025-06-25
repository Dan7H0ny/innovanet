import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  variant = 'default',
  padding = 'default',
  shadow = 'default'
}) => {
  const baseClasses = 'bg-white rounded-xl';
  
  const variants = {
    default: 'border border-gray-200',
    elevated: 'border-0',
    outlined: 'border-2 border-gray-300',
    highlighted: 'border-2 border-blue-500 bg-blue-50'
  };

  const paddings = {
    none: '',
    small: 'p-4',
    default: 'p-6',
    large: 'p-8'
  };

  const shadows = {
    none: '',
    small: 'shadow-sm',
    default: 'shadow-lg',
    large: 'shadow-xl',
    hover: 'shadow-lg hover:shadow-xl'
  };

  const cardClasses = `${baseClasses} ${variants[variant]} ${paddings[padding]} ${shadows[shadow]} ${className}`;

  return (
    <div className={cardClasses}>
      {children}
    </div>
  );
};

export default Card;