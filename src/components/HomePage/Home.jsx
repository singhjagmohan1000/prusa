import React from 'react';
import {PRUSACarousel} from "./PRUSACarousel";
import {PRUSAInfoBox} from "./PRUSAInfoBox";
import {PRUSASocialMedia} from "./PRUSASocialMedia";
import {Banner} from "./Banner";


export class Home extends React.Component {

    render() {

        return (
            <div>


                <PRUSACarousel/>
                <Banner/>
                <PRUSAInfoBox/>
                <PRUSASocialMedia/>

            </div>
        );
    }
}