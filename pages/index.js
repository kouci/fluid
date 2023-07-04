// pages/home.js
import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "@/components/Layout";
import Link from "next/link";
import InstagramLink from "@/components/InstagramLink";

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
              Laisser couler, une façon de vivre. Ne
              pas se laisser bloquer par les petits problèmes de la vie. Ne pas
              se prendre la tête pour pouvoir avancé !
            </p>
          </div>
          <div className={styles.button}>
            <Link
              href="/precommander"
              style={{
                color: "black",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              <p>Pré-Commander dès Maintenant</p>
            </Link>
          </div>
        </div>
      </div>
      <InstagramLink />
    </Layout>
  );
}
