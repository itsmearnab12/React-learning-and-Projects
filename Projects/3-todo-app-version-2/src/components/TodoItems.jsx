import Todoitem from "./Todoitem"

const TodoItems = ({ todoItems }) => {
    return (
        <div className='items-container'>
            <Todoitem todoDate="4/10/2023" todoName="Buy Milk"></Todoitem>
            <Todoitem todoDate="4/10/2023" todoName="Go To Collage"></Todoitem>
        </div>
    )
}

export default TodoItems;