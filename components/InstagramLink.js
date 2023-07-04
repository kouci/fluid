import useStyles from "@/utils/styles";
import React from "react";
import Image from "next/image";
import styles from "../styles/InstagramFooter.module.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import Button from "@mui/material/Button";
const InstagramLink = () => {
    return (
        <div className={styles.InstagramFooter}> 
            <Button variant="outlined" startIcon={<InstagramIcon />}>
                Rejoins-nous
            </Button>
        </div>
    );
};

export default InstagramLink;