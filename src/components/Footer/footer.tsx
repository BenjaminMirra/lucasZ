import React from 'react'
import styles from './footer.module.css'
import { Typography } from '@mui/material'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Typography variant="subtitle1" sx={{color: "#FAE208"}}>
        © 2022 Digital Money House
      </Typography>
    </div>
  )
}

export default Footer