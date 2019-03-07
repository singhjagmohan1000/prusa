import React from 'react';
import {Carousel} from 'react-bootstrap';
import {Image, Transformation} from "cloudinary-react";
export class PRUSACarousel extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleSelect = this.handleSelect.bind(this);

        this.state = {
            index: 0,
            direction: null
        };
    }

    handleSelect(selectedIndex, e) {
        this.setState({
            index: selectedIndex,
            direction: e.direction
        });
    }

    render() {
        const { index, direction } = this.state;

        return (
            <Carousel
                activeIndex={index}
                direction={direction}
                onSelect={this.handleSelect}
                className="content container content-row prusa">
                <Carousel.Item>
                    <Image cloudName="prusa" className="img-responsive" publicId="carousel/1450AMYubaCity_1903x802_valljg.png">
                        <Transformation height="860"  width="1280" crop="scale"/>
                    </Image>
                </Carousel.Item>
                <Carousel.Item>
                    <Image cloudName="prusa" className="img-responsive" publicId="carousel/1470_AM_Sacramento_1903_802_b5itua.png">
                        <Transformation height="860"  width="1280"  crop="scale"/>
                    </Image>
                </Carousel.Item>
                <Carousel.Item>
                    <Image cloudName="prusa" className="img-responsive" publicId="carousel/1300_AM_Fresno_website_ospovi.png">
                        <Transformation height="860"  width="1280"  crop="scale"/>
                    </Image>
                </Carousel.Item>
            </Carousel>
        );
    }
}
