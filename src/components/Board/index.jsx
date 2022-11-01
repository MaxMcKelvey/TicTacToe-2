import "./Board.css";

const Board = (props) => {
    
    return (
        <div className="board">
            <div className="row">
                {props.getChild(0)}
                {props.getChild(1)}
                {props.getChild(2)}
            </div>
            <div className="row">
                {props.getChild(3)}
                {props.getChild(4)}
                {props.getChild(5)}
            </div>
            <div className="row">
                {props.getChild(6)}
                {props.getChild(7)}
                {props.getChild(8)}
            </div>
        </div>
    );
}

export default Board;