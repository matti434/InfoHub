import React from 'react'
import Button from '../../ui/button/Button';
const NavbarAuthButtons = () => {
    return (
        <>
            <div className="d-flex gap-2">
                <Button variant="outline-primary" href="/login">
                    Login
                </Button>
                <Button variant="primary" href="/register">
                    Registro
                </Button>
            </div>
        </>
    )
}

export default NavbarAuthButtons; 
