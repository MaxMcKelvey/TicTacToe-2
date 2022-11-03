import "./Box.css";

// a simple 200px*200px box to hold characters (X or O)
const Box = (props) => {
    return (
        <div onClick={() => props.handleClick(props.board, props.index)} className="box">
            {props.char}
        </div>
    );
}

export default Box;