import React from 'react';
import {Carousel} from 'react-bootstrap';
import {Image, Transformation} from "cloudinary-react";
import {URL} from "../../constants";
import axios from "axios";
export class PRUSACarousel extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleSelect = this.handleSelect.bind(this);

        this.state = {
            index: 0,
            direction: null,
            images: "",
            load:false
        };
    }

    handleSelect(selectedIndex, e) {
        this.setState({
            index: selectedIndex,
            direction: e.direction
        });
    }

    componentDidMount() {
        axios.get(`${URL}prusaCaraousel`)
            .then((res) => {
               this.setState({images: res.data,load: true})

            }).catch((err)=>{console.log(err)});

    }

    render() {
        const { index, direction } = this.state;

        if(!this.state.load){

        return (
            <Carousel
                activeIndex={index}
                direction={direction}
                onSelect={this.handleSelect}
                className="content container content-row prusa">
                <Carousel.Item>
                    <Image cloudName="prusa" className="img-responsive" publicId="carousel/1470_AM_Sacramento_1903_802_b5itua.png">
                        <Transformation height="860"  width="1280"  crop="scale"/>
                    </Image>
                </Carousel.Item>
                <Carousel.Item>
                    <Image cloudName="prusa" className="img-responsive" publicId="carousel/1450AMYubaCity_1903x802_valljg.png">
                        <Transformation height="860"  width="1280" crop="scale"/>
                    </Image>
                </Carousel.Item>
                <Carousel.Item>
                    <Image cloudName="prusa" className="img-responsive" publicId="carousel/1300_AM_Fresno_website_ospovi.png">
                        <Transformation height="860"  width="1280"  crop="scale"/>
                    </Image>
                </Carousel.Item>
            </Carousel>

        );}
        else{
            return(
            <Carousel
            activeIndex={index}
            direction={direction}
            onSelect={this.handleSelect}
            className="content container content-row prusa">{this.state.images.map((image,index)=>
            <Carousel.Item>
                <Image cloudName="prusa" className="img-responsive" publicId={image.CLOUD_ID}>
                    <Transformation height="860"  width="1280"  crop="scale"/>
                </Image>
                </Carousel.Item>
                )} </Carousel>

            );}
    }
}
