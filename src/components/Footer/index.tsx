import "./footer.scss";
import { SvgIcon, Link } from "@material-ui/core";
import { ReactComponent as Twitter } from "src/assets/icons/twitter.svg";
import { ReactComponent as Discord } from "src/assets/icons/discord.svg";
import { ReactComponent as Medium } from "src/assets/icons/medium.svg";
import { ReactComponent as Reddit } from "src/assets/icons/reddit.svg";

function Footer() {
    return (
        <div className="footer">
            <Link href="https://twitter.com/TheMinorityGame" target="_blank">
                <SvgIcon color="primary" component={Twitter} />
            </Link>

            <Link href="https://discord.gg/9YNT3HKYsh" target="_blank">
                <SvgIcon color="primary" component={Discord} />
            </Link>
        </div>
    );
}

export default Footer;
