import React from 'react'

function Button({
  children, // El contenido del boton
  variant = 'primary', //Estilo visual
  href, // Si existe  → se renderiza como enlace
  onClick, // funcion de hacer click del <button>
  type= 'button', // type del <button>
  className, 
  ...props // Cualquier otra cosa prop(id,disables,etc.)
}){
    const baseClass = `btn btn-${variant}`;
    const combinedClass = `${baseClass} ${className}`.trim();
   

    if(href){
        return (
            <a href={href} className={combinedClass} {...props}>
                {children}
            </a>
        );
    }

    return(
        <button
        type={type}
        className={combinedClass}
        onClick={onclick}
        {...props}
        >
            {children}
        </button>
    );
}

export default Button;