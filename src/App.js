import React, { useState } from "react";
import todo from "./todo.png"
import PulseLoader from "react-spinners/PulseLoader";
const App = () => {
  const [name, setName] = useState("Translation will come here!");
  const [input, setInput] = useState("")
  const [menu, setMenu] = useState(true);
  const [btnName, setBtnName] = useState("Show More")
  const [len, setLen] = useState(50);
  const [loading, setLoading] = useState(false);


  var emojiDictionary = {
    "😃": "Grinning Face with Big Eyes",
    "😀": "Grinning Face",
    "😄": "Grinning Face with Smiling Eyes",
    "😁": "Beaming Face with Smiling Eyes",
    "😆": "Grinning Squinting Face",
    "😅": "Grinning Face with Sweat",
    "🤣": "Rolling on the Floor Laughing",
    "😂": "Face with Tears of Joy",
    "🙂": "Slightly Smiling Face",
    "🙃": "Upside-Down Face",
    "😉": "Winking Face",
    "😊": "Smiling Face with Smiling Eyes",
    "😇": "Smiling Face with Halo",
    "🥰": "Smiling Face with Hearts",
    "😍": "Smiling Face with Heart-Eyes",
    "🤩": "Star-Struck",
    "😘": "Face Blowing a Kiss",
    "😗": "Kissing Face",
    "💀": "Skull",
    "☠️": "Skull and Crossbones",
    "💩": "Pile of Poo",
    "🤡": "Clown Face",
    "👹": "Ogre",
    "👺": "Goblin",
    "👻": "Ghost",
    "👽": "Alien",
    "👾": "Alien Monster",
    "🤖": "Robot",
    "🥡": "takeout box",
    "❤️": "love",
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
    "😚": "Kissing Face with Closed Eyes",
    "😙": "Kissing Face with Smiling Eyes",
    "🥲": "Smiling Face with Tear",
    "😋": "Face Savoring Food",
    "😛": "Face with Tongue",
    "😜": "Winking Face with Tongue",
    "🤪": "Zany Face",
    "😝": "Squinting Face with Tongue",
    "🤑": "Money-Mouth Face",
    "🤗": "Smiling Face with Open Hands",
    "🤭": "Face with Hand Over Mouth",
    "🤫": "Shushing Face",
    "🤔": "Thinking Face",
    "🤐": "Zipper-Mouth Face",
    "🤨": "Face with Raised Eyebrow",
    "😐": "Neutral Face",
    "😑": "Expressionless Face",
    "😶": "Face Without Mouth",
    "😏": "Smirking Face",
    "😒": "Unamused Face",
    "🙄": "Face with Rolling Eyes",
    "😬": "Grimacing Face",
    "😮‍💨": "Face Exhaling",
    "🤥": "Lying Face",
    "😌": "Relieved Face",
    "😔": "Pensive Face",
    "😪": "Sleepy Face",
    "🤤": "Drooling Face",
    "😴": "Sleeping Face",
    "😷": "Face with Medical Mask",
    "🤒": "Face with Thermometer",
    "🤕": "Face with Head-Bandage",
    "🤢": "Nauseated Face",
    "🤮": "Face Vomiting",
    "🤧": "Sneezing Face",
    "🥵": "Hot Face",
    "🥶": "Cold Face",
    "🥴": "Woozy Face",
    "😵": "Face with Crossed-Out Eyes",
    "😵‍💫": "Face with Spiral Eyes",
    "🤯": "Exploding Head",
    "🤠": "Cowboy Hat Face",
    "🥳": "Partying Face",
    "🥸": "Disguised Face",
    "😎": "Smiling Face with Sunglasses",
    "🤓": "Nerd Face",
    "🧐": "Face with Monocle",
    "😕": "Confused Face",
    "😟": "Worried Face",
    "🙁": "Slightly Frowning Face",
    "☹️": "Frowning Face",
    "😮": "Face with Open Mouth",
    "😯": "Hushed Face",
    "😲": "Astonished Face",
    "😳": "Flushed Face",
    "🥺": "Pleading Face",
    "😦": "Frowning Face with Open Mouth",
    "😧": "Anguished Face",
    "😨": "Fearful Face",
    "😰": "Anxious Face with Sweat",
    "😥": "Sad but Relieved Face",
    "😢": "Crying Face",
    "😭": "Loudly Crying Face",
    "😱": "Face Screaming in Fear",
    "😖": "Confounded Face",
    "😣": "Persevering Face",
    "😞": "Disappointed Face",
    "😓": "Downcast Face with Sweat",
    "😩": "Weary Face",
    "😫": "Tired Face",
    "🥱": "Yawning Face",
    "😤": "Face with Steam From Nose",
    "😡": "Enraged Face",
    "😠": "Angry Face",
    "🤬": "Face with Symbols on Mouth",
    "😈": "Smiling Face with Horns",
    "👿": "Angry Face with Horns",
    "🐕": "Dog",
    "🦮": "Guide Dog",
    "🐕‍🦺": "Service Dog",
    "🐩": "Poodle",
    "🐺": "Wolf",
    "🦊": "Fox",
    "🦝": "Raccoon",
    "🐱": "Cat Face",
    "🐭": "Mouse Face",
    "🐈": "Cat",
    "🐈‍⬛": "Black Cat",
    "🦁": "Lion",
    "🐯": "Tiger Face",
    "🐅": "Tiger",
    "🐗": "Boar",
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
    "🎂": "Birthday Cake",
    "🍰": "Shortcake",
    "🎈": "Balloon",
    "🎉": "Party Popper",
    "🎁": "Wrapped Gift",
    "🕯️": "Candle",
    "🥜": "Peanuts",
    "👋": "Waving Hand",
    "🤚": "Raised Back of Hand",
    "🖐️": "Hand with Fingers Splayed",
    "✋": "Raised Hand",
    "🖖": "Vulcan Salute",
    "👌": "OK Hand",
    "🤌": "Pinched Fingers",
    "🤏": "Pinching Hand",
    "✌️": "Victory Hand",
    "🤞": "Crossed Fingers",
    "🤟": "Love-You Gesture",
    "🤘": "Sign of the Horns",
    "🤙": "Call Me Hand",
    "👈": "Backhand Index Pointing Left",
    "👉": "Backhand Index Pointing Right",
    "👆": "Backhand Index Pointing Up",
    "🖕": "Middle Finger",
    "👇": "Backhand Index Pointing Down",
    "☝️": "Index Pointing Up",
    "👍": "Thumbs Up",
    "👎": "Thumbs Down",
    "✊": "Raised Fist",
    "👊": "Oncoming Fist",
    "🤛": "Left-Facing Fist",
    "🤜": "Right-Facing Fist",
    "👏": "Clapping Hands",
    "🙌": "Raising Hands",
    "👐": "Open Hands",
    "🤲": "Palms Up Together",
    "🤝": "Handshake",
    "🪲": "Beetle",

  };
  var length = Object.keys(emojiDictionary).length;

  // console.log(length);

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

      if (btnName === "Show More" && len === 50) {
        setLen(len + 50);
        setBtnName("Show More")
      }
      if (btnName === "Show More" && len === 100) {
        setLen(len + 50);
        setBtnName("Show More")
      }
      if (btnName === "Show More" && len === 150) {
        setLen(len + (length - len));
        setBtnName("Show Less")

      }
     
      if (btnName === "Show Less") {
        setLen(50);
        setBtnName("Show More")
      }

    }, 800);

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

