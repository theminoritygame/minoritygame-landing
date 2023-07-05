import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import "./FAQComponent.scss";

const faqData = [
  {
    id: 1,
    question: "What are the Game Stages?",
    answer: 
    <>
      Every Game goes through the following stages:<br></br>
      1. &nbsp;&nbsp;Inital&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -&nbsp;&nbsp; A new game is hosted.<br></br>
      2. &nbsp;&nbsp;Voting Started&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -&nbsp;&nbsp;  Voting is open for the game.<br></br>
      3. &nbsp;&nbsp;Voting Ended&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -&nbsp;&nbsp;  Voting period ends. The game host computes the results using the securely kept game private key<br></br>
      4. &nbsp;&nbsp;Result Published&nbsp; -&nbsp;&nbsp;  The results are published by the game host. Challenge phase begins. Published results can be &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;challenged by anyone for correctness by triggerring onchain computation.<br></br>
      5. &nbsp;&nbsp;Result Locked&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -&nbsp;&nbsp;  After challenge phase ends, results are locked and players can burn their votes to claim the &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rewards in BNB.<br></br>

      <br></br>Read more in the whitepaper.
    </>
  },
  {
    id: 2,
    question: "How long does the Voting Phase last?",
    answer:
      "Voting for each game is open for 24 hours. A new game starts each day."
  },
  {
    id: 3,
    question: "How long does it take for Results to get published?",
    answer:
    <>
      It takes a maximum of 12 hours for results to get published onchain. <br></br>
      Post which, the game enters 'Challenge Phase' which is open for 12 hours. <br></br>
      After Challenge Phase ends, players can claim their winnings.
    </>
  },
  {
    id: 4,
    question: "What is the payout?",
    answer:
    <>
      For each winning vote (vote for minority choice), you would get twice the vote price, of that particular game.<br></br> 
      In addition, there is often an incentive pool declared at start of game that is shared by winners in proportion of their winning vote counts.<br></br>
      Losing Votes get nothing.
    </>
  },
  {
    id: 5,
    question: "What happens in case of tie?",
    answer:
    <>
      There is no winner or loser in case the game ties i.e., both choices receive equal number of votes<br></br> 
      Each vote is worth the vote mint Price and can be burned to claim back the investment.<br></br>
      Shared Incentive Pool is not distributed in this case.
    </>
  }
];

const Faq: React.FC = () => {
  const [active, setActive] = useState<number | null>(null);

  const handleClick = (id: number) => {
    if (active === id) {
      setActive(null);
    } else {
      setActive(id);
    }
  };

  return (
    <div className="faq">
      {faqData.map((faq) => (
        <div className="faq-item" key={faq.id}>
          <div className="faq-question" onClick={() => handleClick(faq.id)}>
            <div className="faq-question-text">{faq.question}</div>
            <FontAwesomeIcon
              icon={active === faq.id ? faChevronUp : faChevronDown}
              className="faq-icon"
            />
          </div>
          {active === faq.id && <div className="faq-answer">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default Faq;