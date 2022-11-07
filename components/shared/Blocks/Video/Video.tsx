import { FC, useEffect, useRef } from "react";
import IBlockVideo from "util/interface/video.interface";
import Header from "components/shared/Header/Header";
import classes from "./block.module.scss";

interface BlockVideoProps {
    item: IBlockVideo;
}

const BlockVideo: FC<BlockVideoProps> = ({ item }) => {
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
            </div>
        </div>
    );
};

export default BlockVideo;
