import React, { useState } from "react";

//create your first component
const ToDoList = () => {

    const [tasks, setTasks] = useState('');
    const [list, setList] = useState([]);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [items, setItems] = useState(0);

    const handleAdd = (e) => {
        if (e.key === 'Enter') {
            setList([...list, {
                todo: e.target.value,
            }])
            setTasks('');
            setItems(() => items + 1);
        }
    }

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    }

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    }

    const handleDelete = (index) => {
        const updatedList = [...list];
        updatedList.splice(index, 1);
        setList(updatedList);
        setItems(() => items - 1);
    }

    return (
        <>
            <div className="container mt-4">
                <h1 style={{ color: '#7f7f7f', textAlign: 'center', fontSize: '5rem' }}>todos</h1>
                <div style={{ textAlign: 'center', justifyContent: 'center' }}>
                    <input type="text" placeholder="What needs to be done?" value={tasks} onKeyUp={handleAdd} onChange={(e) => setTasks(e.target.value)}></input>
                    {
                        list.map((tod, index) => {
                            return <li className="form-control" key={index} style={{ backgroundColor: hoveredIndex === index ? 'grey' : 'grey', margin: '0.5rem' }} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}>
                                {tod.todo}
                                {hoveredIndex === index && (<button onClick={() => handleDelete(index)} style={{ cursor: 'pointer', border: 'none', marginLeft: '5rem', backgroundColor: '#ABEBC6' }}>Done</button>)}
                            </li>
                        })
                    }
                    {items > 1 ? (<p className="d-flex align-items-start" style={{ marginLeft: '0.5rem', background: '#EBEDEF', width: '100%' }}>{items} items left</p>) : (<p className="d-flex align-items-start" style={{ marginLeft: '0.5rem', marginTop: '0.5rem', background: '#EBEDEF', width: '100%' }}>{items} item left</p>)}
                </div>
            </div>
        </>
    );
};

export default ToDoList;