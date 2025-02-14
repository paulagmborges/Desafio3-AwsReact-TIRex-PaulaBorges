import { useState } from "react";
import styles from "./shop.module.css";

interface FilterPopupProps {
  closePopup: () => void;
  setCategory?:(category:string) => void
}

const categories = ["Sofa", "Chair", "Table","teste"];

const FilterPopup = ({ closePopup, setCategory }: FilterPopupProps) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <h2>Selecione uma Categoria</h2>

        <div className={'flex gap-2 w-full justify-center item-center'}>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.categoryButton} ${
                selectedCategory === category ? styles.active : ""
              } px-4 py-2`}
              onClick={() =>{
                setSelectedCategory(category)
                setCategory?.(category)
                closePopup()
              } 
            }
            >
              {category}
            </button>
          ))}
        </div>

        <div className={styles.actions}>
          <button onClick={closePopup}>Fechar</button>
        </div>
      </div>
    </div>
  );
};

export default FilterPopup;
