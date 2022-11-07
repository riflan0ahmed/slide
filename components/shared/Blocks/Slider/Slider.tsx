import { FC } from "react";
import IBlockSlider from "util/interface/slider.interface";
import Carousel from "react-multi-carousel";
import Image from "next/image";
import Header from "components/shared/Header/Header";
import CardContent from "components/shared/Card/Content/Content";
import classes from "./block.module.scss";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

interface BlockSliderProps {
    item: IBlockSlider;
}

<style>.react-multi-carousel--right-arrow {}</style>;

const BlockSlider: FC<BlockSliderProps> = ({ item }) => {
    const { title, slides } = item;

    return (
        <div className={classes.slider}>
            <div className={classes.image_mobile}>
                <Image src={"/lg.jpg"} alt="background-image" layout="fill" priority />
            </div>
            <div className={classes.image_tablet}>
                <Image src={"/xl.jpg"} alt="background-image" layout="fill" priority />
            </div>
            <div className={classes.image_laptop}>
                <Image src={"/3xl.jpg"} alt="background-image" layout="fill" priority />
            </div>
            <div className={classes.overlay}>
                <Header color="white" link />
                <div className={classes.wrapper}>
                    <h1>{title}</h1>
                    <div className={classes.carouselWrapper}>
                        <Carousel
                            className={classes.carousel}
                            additionalTransfrom={0}
                            arrows={true}
                            itemClass="px-2"
                            autoPlaySpeed={3000}
                            centerMode={false}
                            focusOnSelect={false}
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
                            slidesToSlide={1}
                            swipeable
                            draggable
                            // customButtonGroup={<ButtonGroup />}
                            responsive={{
                                superLargeDesktop: {
                                    breakpoint: { min: 1920, max: 4000 },
                                    items: 2.5,
                                },
                                desktop: {
                                    breakpoint: { min: 1024, max: 1920 },
                                    items: 2,
                                },
                                tablet: {
                                    breakpoint: { min: 640, max: 1024 },
                                    items: 1.5,
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
                    </div>
                </div>
            </div>
        </div>
    );
};

// export const ButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
//     const {
//         carouselState: { currentSlide, totalItems },
//     } = rest;

//     return (
//         <div className={classes.buttonGroup}>
//             {/* {currentSlide > 0 ? (
//                 <div className={classes.prev}>
//                     <button
//                         onClick={() => {
//                             previous();
//                         }}
//                     >
//                         <MdNavigateBefore size={100} />
//                     </button>
//                 </div>
//             ) : (
//                 <div></div>
//             )} */}

//             {currentSlide + 1 !== totalItems ? (
//                 <div className={classes.next}>
//                     <button
//                         onClick={() => {
//                             next();
//                         }}
//                     >
//                         <MdNavigateNext size={100} />
//                     </button>
//                 </div>
//             ) : (
//                 <div></div>
//             )}
//         </div>
//     );
// };

export default BlockSlider;
