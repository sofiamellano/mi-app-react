function MyButton({name, title, parrafo, onClick}) {

    return(
        <>
            <h1>{title}</h1>
            <button onClick={onClick}>{name}</button>
            <p>{parrafo}</p>
        </>
    );
}

export default MyButton;