import { FC } from "react";
import ISlide from "util/interface/slide.interface";
import classes from "./card.module.scss";

interface CardContentProps {
    item: ISlide;
}

const CardContent: FC<CardContentProps> = ({ item }) => {
    const { title, description } = item;

    return (
        <div className={classes.content}>
            <span className={classes.title}>{title}</span>
            <p className={classes.description}>{description}</p>
        </div>
    );
};

export default CardContent;
