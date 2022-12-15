import { useState } from "react";
import styles from "./Filter.module.css";

const Filter = ({onChange}) => {

  return (
    <form>
      <div className={styles.wrapperFilter}>
        <select onChange={onChange} name="categories" id="categories">
        <option value="filtre">Filtre</option>
          <option value="Tous">Toutes les catégories</option>
          <option value="bébé">Bébé</option>
          <option value="famille">Famille</option>
          <option value="mariage">Mariage</option>
          <option value="portrait">Portrait</option>
          <option value="couple">Couple</option>
          <option value="grossesse">Grossesse</option>
          <option value="baptême">Baptême</option>
        </select>
      </div>
    </form>
  );
};

export default Filter;
