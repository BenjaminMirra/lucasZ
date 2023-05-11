import React from 'react'
import styles from './header.module.css'
import Image from 'next/image'
import logoImage from '../../utils/images/Logo 01.png'
import Button from '@mui/material/Button';
import { typographyClasses } from '@mui/material';

const Header = () => {
    return (
        <div className={styles.header}>
            <div>
                <Image
                    src={logoImage}
                    alt="logo"
                    width={86}
                    height={33}
                />
            </div>
            <div className={styles.buttonContainer}>
                <Button sx={{
                    color: "#FAE208",
                    borderColor: "#FAE208",
                    '&:hover': {
                        backgroundColor: "#FAE208",
                        color: "#181818",
                        borderColor: '#FAE208',
                    },
                    textTransform: "none",
                    fontWeight: "700",
                    marginRight: "20px"
                }} variant="outlined">
                    Ingresar
                </Button>
                <Button sx={{
                    color: "#181818",
                    border: 1,
                    bgcolor: "#FAE208",
                    '&:hover': {
                        bgcolor: '#181818',
                        color: "#FAE208"
                    },
                    textTransform: "none",
                    fontWeight: "700"
                }} variant="contained">
                    Crear Cuenta
                </Button>
            </div>


        </div>
    )
}

export default Header