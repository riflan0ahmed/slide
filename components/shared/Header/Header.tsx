import { FC } from "react";
import classNames from "classnames/bind";
import { When } from "react-if";
import Link from "next/link";
import classes from "./header.module.scss";

let cx = classNames.bind(classes);

interface HeaderProps {
    color: "white" | "black";
    link: boolean;
}

const Header: FC<HeaderProps> = ({ color, link }) => {
    let logoCSS = cx({
        logo: true,
        "logo--black-color": color === "black",
        "logo--white-color": color === "white",
    });

    let linkCSS = cx({
        link: true,
        "link--black-color": color === "black",
        "link--white-color": color === "white",
    });

    return (
        <div className={classes.wrapper}>
            <Link href="/" className={logoCSS}>
                Logo
            </Link>

            <When condition={link}>
                <Link href="/" className={linkCSS}>
                    Discover More
                </Link>
            </When>
        </div>
    );
};

export default Header;
