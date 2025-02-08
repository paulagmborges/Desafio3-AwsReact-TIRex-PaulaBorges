
import './shop.module.css'
interface FilterPopupProps {
  closePopup: () => void;
}

const FilterPopup = ({ closePopup }: FilterPopupProps) => {
  return (
    <div className="filter-popup-overlay">
      <div className="filter-popup">
        <h2>Filters</h2>
        
        
        <label>
          Preço:
          <input type="range" min="0" max="1000" />
        </label>

  

        <div className="filter-actions">
          <button onClick={closePopup}>Fechar</button>
        </div>
      </div>
    </div>
  );
};

export default FilterPopup;
