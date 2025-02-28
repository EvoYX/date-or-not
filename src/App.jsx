import { useState } from "react";
import lovesvg from "./assets/All You Need Is Love SVG Cut File.svg";
import lovesvg2 from "./assets/Love In The Air SVG Cut File.svg";
import "./index.css";
export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const CardOption = () => {
    return (
      <div className="card-container">
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              The Ultimate Movie-Music-Dinner Adventure
            </div>
            <div className="card-back">
              <ul>
                <li>Captain America: Brave New World @ 4.40pm @Orchard</li>
                <li>
                  Listening to Music Busker Jeff Wong @ 7.30pm @ Dhoby Ghaut
                </li>
                <li>Dinner @ Plaza Singapura</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <div className="card-front">Cats, Games & Samgyetang Date</div>
            <div className="card-back">
              <ul>
                <li>
                  Mecafegames. Play console games while cuddling adorable cats!
                </li>
                <li>
                  MODU Samgyetang. Treat yourself to Singapore’s first premium
                  samgyetang
                </li>
                <li>Captain America: Brave New World </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <div className="card-front">Sanrio Wonderland + Foodie Fun</div>
            <div className="card-back">
              <ul>
                <li>
                  Step into the magical world of Sanrio @ Rochor (Netflix Room)
                </li>
                <li>Dinner or café hopping (we’ll check it out together!)</li>
                <li>
                  Tired? Just rest lah! Chill with me, do nothing also can 😆
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
      "Is that your final answer?",
      "You're breaking my heart ;(",
      "Plsss? :( You're breaking my heart",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="overflow-hidden flex flex-col items-center justify-center pt-4 h-screen -mt-16 selection:bg-rose-600 selection:text-white text-zinc-900">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="text-2xl md:text-3xl font-bold my-4">
            Ok Yayyyyy!!!
          </div>
          <div>✨Too Many Plans, Not Enough Time! ✨</div>
          <div className="text-4sm md:text-6sm font-bold my-4">
            Eh, too many stuff wan to do with you liao. Sibei long, so I only
            short list these 3. Pick one la! 😆 After you choose, text me hor!
          </div>
          {CardOption()}
        </>
      ) : (
        <>
          <img
            src={lovesvg}
            className="fixed animate-pulse top-10 md:left-24 left-6 md:w-40 w-28"
          />
          <img
            src={lovesvg2}
            className="fixed bottom-16 -z-10 animate-pulse md:right-24 right-10 md:w-40 w-32"
          />
          <img
            className="h-[230px] rounded-lg shadow-lg"
            src="https://gifdb.com/images/high/cute-Love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="text-3xl md:text-3xl my-3 text-center">
            你很累, 我很懒 … so Saturday’s perfect for us. Still on? 😌
          </h1>
          <div className="flex flex-wrap justify-center gap-2 items-center">
            <button
              className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}

      <Footer />
    </div>
  );
}

const Footer = () => {
  return (
    <a
      className="fixed bottom-2 right-2 backdrop-blur-md opacity-80 hover:opacity-95 border p-1 rounded border-rose-300"
      href="https://github.com/Xeven777/valentine"
      target="__blank"
    >
      Made with{" "}
      <span role="img" aria-label="heart">
        ❤️
      </span>
    </a>
  );
};
