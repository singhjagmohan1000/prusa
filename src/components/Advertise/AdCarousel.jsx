import React from 'react';
import {Carousel} from 'react-bootstrap';
import {Image, Transformation} from "cloudinary-react";
import {MediaKit} from "./MediaKit";
export class AdCarousel extends React.Component {
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
        const coverageIconStyle={color:"#2881ce"};
        const coverageHeaderStyle={color:"#000e34"};

        return (
            <section className="blog-widget parallax">
                <div className="container content">
                    <div className="advertise">
                        Punjabi Radio USA through its presence across North American cities
                        caters to over 2 million listeners. Punjabi Radio USA offers advertisers a number of distinctive opportunities to reach
                        their target audiences using any of our specialized verticals. Our advertising team offers
                        you opportunities to drive your communication through our multiple verticals.
                    </div>
                    <h3 style={coverageHeaderStyle}><span style={coverageIconStyle} className="icon flaticon-podcast6"></span>&nbsp;Our Coverage Area</h3>
            <Carousel
                activeIndex={index}
                direction={direction}
                onSelect={this.handleSelect}
                className="content container content-row prusa">
                <Carousel.Item>
                    <Image cloudName="prusa" className="img-responsive" publicId="saccoverage_1x_zpfqaq.png">
                        <Transformation height="400"  width="1170"  crop="scale"/>
                    </Image>
                </Carousel.Item>
                <Carousel.Item>
                    <Image cloudName="prusa" className="img-responsive" publicId="yubacity_dizqre.png">
                        <Transformation height="400"  width="1170" crop="scale"/>
                    </Image>
                </Carousel.Item>
                <Carousel.Item>
                    <Image cloudName="prusa" className="img-responsive" publicId="fresno_x7rssh.png">
                        <Transformation height="400"  width="1170"  crop="scale"/>
                    </Image>
                </Carousel.Item>
                <Carousel.Item>
                    <Image cloudName="prusa" className="img-responsive" publicId="bakersfield_ndmunj.png">
                        <Transformation height="400"  width="1170"  crop="scale"/>
                    </Image>
                </Carousel.Item>
                <Carousel.Item>
                    <Image cloudName="prusa" className="img-responsive" publicId="stockton_lodi.png">
                        <Transformation height="400"  width="1170"  crop="scale"/>
                    </Image>
                </Carousel.Item>                
            </Carousel>
                <MediaKit/>
                </div>

        </section>
        );
    }
}
