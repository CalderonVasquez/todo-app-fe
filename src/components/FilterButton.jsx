/* eslint-disable react/prop-types */


const FilterButton = ({ name, isPressed, setFilter, isMobile }) => {
    return (
        <button
            onClick={setFilter}
            className={`${isPressed ? (isMobile ? "mobile-blue-btn" : "blue-btn") : ""}`}
            type="button"
            aria-pressed={isPressed}>
            {name}
        </button>
    )
}


export default FilterButton