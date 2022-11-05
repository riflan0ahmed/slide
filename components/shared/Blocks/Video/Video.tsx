import { FC, useEffect, useRef } from "react";
import { When } from "react-if";
import { MdKeyboardArrowDown } from "react-icons/md";
import ReactPlayer from "react-player";
import IBlockVideo from "util/interface/video.interface";
import Header from "components/shared/Header/Header";
import classes from "./block.module.scss";

interface BlockVideoProps {
    item: IBlockVideo;
    scrollNext: any;
    nextBtnEnabled: boolean;
}

const BlockVideo: FC<BlockVideoProps> = ({ scrollNext, nextBtnEnabled, item }) => {
    const { videoURL, title, description } = item;

    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef?.current.play();
        }
    }, []);

    return (
        <div className={classes.video}>
            <video ref={videoRef} muted loop className={classes.player} poster="/video.png">
                <source src={videoURL} type="video/mp4" />
            </video>
            <div className={classes.overlay}>
                <Header color="black" link={false} />

                <div className={classes.content}>
                    <div className={classes.title}>
                        <h1>{title}</h1>
                        <span></span>
                    </div>

                    <p className="h3">{description}</p>
                </div>

                <When condition={nextBtnEnabled}>
                    <div className={classes.nextButton}>
                        <MdKeyboardArrowDown onClick={() => scrollNext()} />
                    </div>
                </When>
            </div>
        </div>
    );
};

export default BlockVideo;
