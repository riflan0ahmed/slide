import { FC } from "react";
import Image from "next/image";
import { MdNavigateNext, MdNavigateBefore, MdKeyboardArrowUp } from "react-icons/md";
import { If, Then, Else, When } from "react-if";
import Header from "components/shared/Header/Header";
import CardContent from "components/shared/Card/Content/Content";
import classes from "./block.module.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import IBlockSlider from "util/interface/slider.interface";

interface BlockSliderProps {
    item: IBlockSlider;
    prevBtnEnabled: boolean;
    scrollPrev: any;
}

const BlockSlider: FC<BlockSliderProps> = ({ prevBtnEnabled, scrollPrev, item }) => {
    const { title, slides } = item;

    return (
        <div className={classes.slider}>
            <Image src={"/3xl.jpg"} alt="background-image" layout="fill" priority />
            <div className={classes.overlay}>
                <Header color="white" link />
                <div className={classes.wrapper}>
                    <h1>{title}</h1>
                    <div>
                        <Carousel
                            additionalTransfrom={0}
                            arrows
                            autoPlaySpeed={3000}
                            centerMode={false}
                            className=""
                            containerClass="container"
                            dotListClass=""
                            draggable
                            focusOnSelect={false}
                            itemClass=""
                            keyBoardControl
                            minimumTouchDrag={80}
                            pauseOnHover
                            renderArrowsWhenDisabled={false}
                            renderButtonGroupOutside={false}
                            renderDotsOutside
                            rewind={false}
                            rewindWithAnimation={false}
                            rtl={false}
                            shouldResetAutoplay
                            showDots={false}
                            sliderClass=""
                            slidesToSlide={1}
                            swipeable
                            responsive={{
                                superLargeDesktop: {
                                    breakpoint: { min: 1920, max: 4000 },
                                    items: 2.5,
                                },
                                desktop: {
                                    breakpoint: { min: 1024, max: 1920 },
                                    items: 2.5,
                                },
                                tablet: {
                                    breakpoint: { min: 640, max: 1024 },
                                    items: 2,
                                },
                                mobile: {
                                    breakpoint: { max: 640, min: 0 },
                                    items: 1,
                                    slidesToSlide: 1,
                                },
                            }}
                        >
                            {slides.map((item) => (
                                <CardContent key={item.title} item={item} />
                            ))}
                        </Carousel>

                        {/* <div className={classes.swiper_button}>
                            <If condition={true}>
                                <Then>
                                    <MdNavigateNext color="white" size={50} onClick={() => swiper.slideNext()} />
                                </Then>
                                <Else>
                                    <MdNavigateBefore color="white" size={50} />
                                </Else>
                            </If>
                        </div> */}
                    </div>
                </div>

                <When condition={prevBtnEnabled}>
                    <div className={classes.prevButton}>
                        <MdKeyboardArrowUp onClick={() => scrollPrev()} />
                    </div>
                </When>
            </div>
        </div>
    );
};

export default BlockSlider;
