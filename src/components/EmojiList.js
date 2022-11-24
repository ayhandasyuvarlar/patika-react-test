import { Col, Row } from "reactstrap";
import { useEmoji } from "../context/EmojiContext";
import "./style.css";
function EmojiList() {
  const elementId = document.querySelectorAll(".info");
  const handleClick = (emoji, index) => {
    navigator.clipboard.writeText(`${emoji.symbol}`);
    for (let i = 0; i < elementId.length; i++) {
      if (parseInt(elementId[i].id) === index) {
        let value = elementId[i];
        value.innerText = "Copied";
        setTimeout(() => {
          return (value.innerText = "Click to copy emoji");
        }, 350);
      }
    }
  };

  const { emojiList } = useEmoji();
  return (
    <div>
      <ul className="list-group">
        {emojiList.map((emoji, index) => (
          <li
            key={index}
            className="list-group-item"
            onClick={() => {
              handleClick(emoji, index);
            }}
          >
            <Row>
              <Col>
                <span style={{ fontSize: "27px" }}>{emoji.symbol}</span>
                <span className="title">{emoji.title}</span>
                <span className="info" id={index}>
                  Click to copy emoji
                </span>
              </Col>
            </Row>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmojiList;
