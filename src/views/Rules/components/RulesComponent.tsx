import React from 'react';
import './RulesComponent.scss';
import Ballot from "src/assets/images/ballot.jpg";
import Clock from "src/assets/images/clock.jpg";
import Coins from "src/assets/images/coins2.jpg";
import TimeBackImage from "src/assets/images/time-back.png";


const rulesText = [
  "New Game everyday!",
  "Goal: Predict which option will be chosen the least (Minority) and vote for that.",
  "Vote for any choice, any number of times till voting lasts (24 hrs)",
  "Each vote costs a price in BNB.",
  "Your vote is encrypted using a secret key and commited onchain",
  "Wait for up to 24 hours for the votes to be counted, tested on-chain, and results published.",
  "If you believe there's a counting issue (not possible as everything is on-chain and ECC encrypted - check whitepaper), challenge it to win a prize. Read more in FAQs.",
  // "Challenge Phase: If you think the results are inaccurate, you can challenge them by running the computation on-chain. Read more in FAQs.",
  "The winning votes can be burned to claim the prize.",
  "Payout is twice your investment and more."
]

const CARDS = [
  {
    title: "Voting Phase",
    textList: [
      "Minority Choice will win",
    ],
    img: Ballot,
  },
  {
    title: "Vote Counting",
    textList: ["Lasts upto 24 hours"],
    img: Clock,
  },
  {
    title: "Claim Prize",
    textList: ["Minimum 2X payout"],
    img: Coins,
  }]

const rules = [
  <React.Fragment>
    {rulesText[0]}
    <br></br>
  </React.Fragment>,
  <React.Fragment>
    {rulesText[1]}
  </React.Fragment>,
  <React.Fragment>
    <div className="list-item-left" key={0}>
      <img className="item-bg" src={TimeBackImage} alt="" />
      <div className="item-content">
        <h2 className="item-title">{CARDS[0].title}</h2>
        <div className="item-img">
          <img className="item-icon" src={CARDS[0].img} alt="time" />
        </div>
        {CARDS[0].textList.map((text, index) => (
          <p className="item-desc" key={index}>
            {text}
          </p>
        ))}
      </div>
    </div>
    <p className='left-text'>
      {rulesText[2]}
      <br></br>
      {rulesText[3]}
      <br></br><br></br>
      {rulesText[4]}
    </p>
  </React.Fragment>,
  <React.Fragment>
    <p className='right-text'>
      {rulesText[5]}
      <br></br><br></br>
      {rulesText[6]}
      {/* <Tooltip title={<h3 style={{}}>{"hello"}</h3>} placement="right-end">
      <IconButton>
        <HelpSharp style={{ color: "rgba(225, 255, 255, 0.6)", width: "20px", height: "20px" }} />
      </IconButton>
    </Tooltip> */}
    </p>
    <div className="list-item-right" key={1}>
      <img className="item-bg" src={TimeBackImage} alt="" />
      <div className="item-content">
        <h2 className="item-title">{CARDS[1].title}</h2>
        <div className="item-img">
          <img className="item-icon" src={CARDS[1].img} alt="time" />
        </div>
        {CARDS[1].textList.map((text, index) => (
          <p className="item-desc" key={index}>
            {text}
          </p>
        ))}
      </div>
    </div>
  </React.Fragment>,

  <React.Fragment>
    <div className="list-item-left" key={2}>
      <img className="item-bg" src={TimeBackImage} alt="" />
      <div className="item-content">
        <h2 className="item-title">{CARDS[2].title}</h2>
        <div className="item-img">
          <img className="item-icon" src={CARDS[2].img} alt="time" />
        </div>
        {CARDS[2].textList.map((text, index) => (
          <p className="item-desc" key={index}>
            {text}
          </p>
        ))}
      </div>
    </div>
    <p className='left-text'>
      {rulesText[7]}
      <br></br><br></br>
      {rulesText[8]}
    </p>
  </React.Fragment>
];

const RulesComponent: React.FC = () => {
  return (
    <div className="rules-container">
      <ul className="rules-list">
        <li className="rules-subheading">{rules[0]}</li>
        <li className="rules-subheading">{rules[1]}</li>
        <li className="rule">{rules[2]}</li>
        <li className="rule">{rules[3]}</li>
        <li className="rule">{rules[4]}</li>
        <li className="rule">{rules[5]}</li>
      </ul>
    </div>
  );
};

export default RulesComponent;
