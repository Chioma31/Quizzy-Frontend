import "./RecorderItem.css";

export default function RecorderItem(props) {
    return(
        <div className="item">
            <span>{props.number}</span>
        </div>
    );
}