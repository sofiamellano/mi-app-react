function Task ({id,name, completed, onToggleHandler}) {
    
    const className = completed ? 'task-item completed' : 'task-item';
    
    
    
    const onToggle = () => {
        onToggleHandler(id);
    }

    return (
        <li>
            <div className='className' onClick={onToggle}>
                <span>{name}</span>
            </div>
        </li>
    );
};

export default Task;

