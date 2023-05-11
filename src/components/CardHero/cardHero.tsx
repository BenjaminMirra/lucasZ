import React from 'react'
import styles from './cardHero.module.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const CardHero = ({ title, description }: any) => {
    return (
        <Card className={styles.cardHero}>
            <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                    {title}
                </Typography>
                <hr className={styles.hr} />
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CardHero