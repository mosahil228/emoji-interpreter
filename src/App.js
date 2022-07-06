import React, { useState} from "react";
import todo from "./todo.png"
import PulseLoader from "react-spinners/PulseLoader";
const App = () => {
  const [name, setName] = useState("Translation will come here!");
  const [input, setInput] = useState("")
  const [menu, setMenu] = useState(false);
  const [btnName, setBtnName] = useState("Show More")
  const [len, setLen] = useState(43);
  const [loading, setLoading] = useState(false);


  var emojiDictionary = {
    "😊": "smiling",
    "🙄": "disbelief",
    "😞": "sad",
    "🥡": "takeout box",
    "❤️": "love",
    "😡": "annoyance",
    "😃": "Grinning Face with Big Eyes",
    "🤣": "Rolling on the Floor Laughing",
    "😂": "Face with Tears of Joy",
    "😉": "Winking Face",
    "🥰": "Smiling Face with Hearts",
    "🤩": "Star-Struck",
    "😋": "Face Savoring Food",
    "😛": "Face with Tongue",
    "😜": "Winking Face with Tongue",
    "🤑": "Money-Mouth Face",
    "🤭": "Face with Hand Over Mouth",
    "🤫": "Shushing Face",
    "🤔": "Thinking Face",
    "😐": "Neutral Face",
    "🙊": "Speak-No-Evil Monkey",
    "💥": "Collision",
    "💫": "Dizzy",
    "💦": "Sweat Droplets",
    "💨": "Dashing Away",
    "🐵": "Monkey Face",
    "🐒": "Monkey",
    "🦍": "Gorilla",
    "🦧": "Orangutan",
    "🐶": "Dog Face",
    "🐕": "Dog",
    "🦮": "Guide Dog",
    "🐕‍🦺": "Service Dog",
    "🐩": "Poodle",
    "🐺": "Wolf",
    "🦊": "Fox",
    "🦝": "Raccoon",
    "🐱": "Cat Face",
    "🐈": "Cat",
    "🐈‍⬛": "Black Cat",
    "🦁": "Lion",
    "🐯": "Tiger Face",
    "🐅": "Tiger",  //43
    "🍇": "Grapes",
    "🍈": "Melon",
    "🍉": "Watermelon",
    "🍊": "Tangerine",
    "🍋": "Lemon",
    "🍌": "Banana",
    "🍍": "Pineapple",
    "🥭": "Mango",
    "🍎": "Red Apple",
    "🍏": "Green Apple",
    "🍐": "Pear",
    "🍑": "Peach",
    "🍒": "Cherries",
    "🍓": "Strawberry",
    "🫐": "Blueberries",
    "🥝": "Kiwi Fruit",
    "🍅": "Tomato",
    "🫒": "Olive",
    "🥥": "Coconut",
    "🥑": "Avocado",
    "🍆": "Eggplant",
    "🥔": "Potato",
    "🥕": "Carrot",
    "🌽": "Ear of Corn",
    "🌶️": "Hot Pepper",
    "🫑": "Bell Pepper",
    "🥒": "Cucumber",
    "🥬": "Leafy Green",
    "🥦": "Broccoli",
    "🧄": "Garlic",
    "🧅": "Onion",
    "🍄": "Mushroom",
    "🥜": "Peanuts",

  };
  var length = Object.keys(emojiDictionary).length;

  const toggleMode = () => {
    if (!menu) {
      setMenu(true)
    } else {
      setMenu(false)
    }

  }
  const btnToggle = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      if (len === 43 && btnName === "Show More") {
        setLen(length)
        setBtnName("Show less")
      } else {
        setLen(43)
        setBtnName("Show More")
      }

    }, 900);
   
  }
  const [transform, settransform] = useState(false);
  const changeColor = () => {
    if (!transform) {
      settransform(true);
    } else {
      settransform(false);
    }
  }
  const clickEmoji = (elem) => {
    var emoji = emojiDictionary[elem];
    setName(emoji)
  }

  const changeInput = (e) => {
    var icon = e.target.value;

    var res = emojiDictionary[icon];
    if (res === undefined) {
      setName("Sorry! We don't have this emoji in our database.")
    } else {
      setName(res)
    }
    if (icon === "") {
      setName("Translation will come here!")
    }

    setInput(icon)
  }
  return (
    <>
      <div className={menu ? "main-div bg1" : "main-div bg2"}>
        <div className="child-div">
          <figure>
            <img src={todo} alt="todologo" />
            <figcaption className={menu ? "b" : "w"}>Emoji Interpreter ✌</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="&#9787; Emoji here..."
              className="form-control"
              value={input}
              onChange={changeInput}
            />
            <div className="tMain">
              <div className='tDiv' onClick={() => { toggleMode(); changeColor(); }}>
                <div className={transform ? "tBox tBoxX" : "tBox"}></div>
              </div>
            </div>
          </div>
          {/* show our items  */}
          <div className="showItems">
            <div className="eachItem">
              <div className={menu ? "bg4 box1" : "bg3 box1"}>
                {name}
              </div>
              <h1>Emoji's We know</h1>
              <div className="emoji">
                {Object.keys(emojiDictionary).filter((elem, index) => index < len).map((elem, id) => {
                  return <div className="emojiBox" key={id}><span onClick={() => clickEmoji(elem)}>{elem}</span></div>
                })}
              </div>
              <button className="btn" onClick={btnToggle}>{loading ? <PulseLoader
                color={"#fff"} size={8} /> : btnName}</button>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};
export default App;

