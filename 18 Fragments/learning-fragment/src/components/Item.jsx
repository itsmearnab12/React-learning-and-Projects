import styles from "./Item.module.css";
const Item = (props) => {
    let { foodItems } = props;
return <li key={props.foodItems} className={`${styles['re-item']} list-group-item`}><span className={styles['re-span']}>{foodItems}</span></li>
};
export default Item;