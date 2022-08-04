import * as React from "react";
import styles from "../styles/Home.module.scss";
import { Button } from "../components/Button";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className={styles.rosillo}>
      <Header />
      <h1>Style Guide 2022 v1</h1>

      <h2>Buttons</h2>
      <hr />
      <Button primary size="large" label="This is a button" />
      <Button primary size="medium" label="This is a button" />
      <Button
        primary
        size="small"
        label="This is a button"
        backgroundColor="green"
      />

      <Footer />
    </div>
  );
};

export default Home;
