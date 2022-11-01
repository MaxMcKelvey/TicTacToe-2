import "./Box.css";

const Box = (props) => {
    return (
        <div onClick={() => props.handleClick(props.board, props.index)} className="box">
            {props.char}
        </div>
    );
}

export default Box;