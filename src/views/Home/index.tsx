import "./home.scss";
import { Link } from "@material-ui/core";
import BgImage from "src/assets/images/bg33.png";
import Vote from "src/assets/images/atom1.png";
import Abstract from "src/assets/images/abstract.svg";
import Puzzle from "src/assets/images/puzzle.svg";

function Home() {
    return (
        <div className="container home">
            <img className="shine" src={BgImage} alt="" />
            <section className="home__promo">
                <h1 className="title">Minority Game</h1>
                <div className="subtitle">
                    <p className="subtitle-item">Join the ultimate game of strategy and outsmart your opponents in Minority Game - where the minority wins</p>
                </div>
                <Link className="button enter-app-button-style" href="https://app.theminoritygame.com">
                    Enter Game
                </Link>
            </section>
            <section className="promo-item">
                <div className="promo-item__img">
                    <img className="illustration-image" src={Vote} alt="" />
                </div>
                <div className="promo-item__discription">
                    <h3>How It Works</h3>
                    <div className="promo-item__discription-sub">
                        Simple Voting game where players must choose between two options, and the goal is to be in the minority group. Winners get at least 2X payout.
                    </div>
                </div>
            </section>
            <section className="promo-item">
                <div className="promo-item__img">
                    <img className="illustration-image" src={Abstract} alt="" />
                </div>
                <div className="promo-item__discription">
                    <h3>Our Strengths</h3>
                    <div className="promo-item__discription-sub">
                        The game is completely decentralized, with votes being encrypted and stored on the blockchain, ensuring a fair and transparent process.
                    </div>
                </div>
            </section>
            <section className="promo-item">
                <div className="promo-item__img">
                    <img className="illustration-image-puzzle" src={Puzzle} alt="" />
                </div>
                <div className="promo-item__discription">
                    <h3>Daily Challenge</h3>
                    <div className="promo-item__discription-sub">
                        New game everyday with most interesting and craziest of the challenges to to push the limits of even the smartest minds.
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
