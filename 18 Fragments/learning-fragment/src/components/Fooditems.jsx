import Item from "./Item";

const FoodItems = ({items}) => {

    let foodItems = ['Apple', 'Green veg', 'Chapati', 'Rice', 'Milk']


    return (
        <ul className="list-group">
            {items.map((item) => (
                <Item key={item} foodItems={item}></Item>
            ))}
        </ul>
    );
};

export default FoodItems;