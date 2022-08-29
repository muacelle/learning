import React, {useState} from "react";

export default function Todo() {

    let storedList = localStorage.getItem('list').split(',')

    let [list, setList] = useState(storedList)
    let [newItem, setNewItem] = useState('')

    return (
        <div className="container">

            <h1>To Do</h1>

            <input 
                className="input" 
                type="text" 
                value={newItem}
                placeholder="New task..."
                onChange={value => setNewItem(value.target.value)}
                onKeyDown={(key) => isEnter(key)}
            />

            <button className="add-btn" onClick={addNewItem}>Add</button>

            <ul className='list'>
                {list.map((item, index) => (
                    <li>
                        {item}
                        <button className="del-btn" onClick={() => deleteItem(index)}> x </button>
                    </li>
                ))}
            </ul>

        </div>
    )

    function addNewItem() {
        if (!newItem.length) {
            alert('Você não digitou uma tarefa. :(')
            return;
        }
        setList([...list, newItem]);
        setNewItem('');
        saveLocalStorage([...list, newItem])
    }

    function deleteItem(index) {
        let tempArr = [...list];
        tempArr.splice(index, 1);
        setList(tempArr);
        saveLocalStorage(tempArr);
    }
    
    function isEnter(e) {
        if (e.key == 'Enter') {
            addNewItem()
        }
    }

    function saveLocalStorage(value) {
        localStorage.setItem('list', value)
    }
}