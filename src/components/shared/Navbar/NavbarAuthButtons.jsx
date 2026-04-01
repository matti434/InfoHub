import React from 'react';
import Button from '../../ui/button/Button';
import './NavbarAuthButtons.css';

const NavbarAuthButtons = () => {
    return (
        <>
            <div className="navbar-auth-buttons d-flex gap-2 justify-content-center justify-content-lg-end">
                <Button variant="outline-primary" href="/login">
                    Iniciar sesión
                </Button>
                <Button variant="primary" href="/register">
                    Registro
                </Button>
            </div>
        </>
    )
}

export default NavbarAuthButtons; 