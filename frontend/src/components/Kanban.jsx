import React, { useState } from 'react'

const Kanban = () => {
    const [ dragItem, setDragItem ] = useState()
    const [ list, setList ] = useState([
        "Call my family for a meeting",
        "Organize a reception after the meeting",
        "Ask for inputs and quotations",
        "Delegate responsibilities",
        "Ask for preliminary card designs",
        "Write contracts for suppliers",
        "Visit site, talk to suppliers"
    ])
    
    const handleDragStart = () => { 
        setDragItem(index)
    }

    const handleDragEnter = (e, index) => { 
        e.target.start.backgroundColor = "#336699"
        const newList = [ ...list ]
        const item = newList[ dragItem ]
        newList.splice(dragItem, 1)
        newList.splice(index, 0, item)
        setDragItem(index)
        setList(newList)
    }

    const handleDragLeave = (e) => { 
        e.target.style.backgroundColor = "#0e0e0e"
    }

    const handleDrop = (e) => { 
        e.target.style.backgroundColor = "#0e0e0e"
    }

    const handleAdd = (e) => { 
        e.target.li = "add"
    }
    return (
        <div>
            <ul className='dnd'>
                { list &&
                    list.map((item, index) => (
                        <li
                            draggable
                            key={ index }
                            onDragStart={ () => handleDragStart(index) }
                            onDragEnter={ () => handleDragEnter(e, index) }
                            onDragLeave={ (e) => handleDragLeave(e) }
                            onDrop={ (e) => handleDrop(e) }
                            onDragOver={ (e) => e.preventDefault(e) }
                        >
                            { item }
                        </li>
                  
                    )) }
            </ul>
            <input type="submit" value="Add Column" onClick={handleAdd}/>
        </div>
    )
}

export default Kanban