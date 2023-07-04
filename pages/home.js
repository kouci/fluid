// pages/home.js
import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout style={{ width: "100%" }} title="Home">
      <div className={styles.container}>
        <Image
          src="/images/Recto-min.png" // Remplacez ceci par le chemin de votre image
          alt="Image de fond"
          layout="fill"
          objectFit="contain"
        />
        <div className={styles.overlay}>
          <h1>LET IT FLOW</h1>
          <div className={styles.divTexte}>
            <p>
              Laisser couler, un slogan mais également une façon de vivre. Ne
              pas se laisser bloquer par les petits problèmes de la vie. Ne pas
              se prendre la tête pour pouvoir avancé !
            </p>
          </div>
          <div className={styles.button}>
            <p>pré-commander dès maintenant</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
