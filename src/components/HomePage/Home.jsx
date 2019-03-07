import React from 'react';
import {PRUSACarousel} from "./PRUSACarousel";
import {PRUSAInfoBox} from "./PRUSAInfoBox";
import {PRUSASocialMedia} from "./PRUSASocialMedia";



export class Home extends React.Component {

    render() {

        return (
            <div>
                <PRUSACarousel/>
                <PRUSAInfoBox/>
                <PRUSASocialMedia/>

            </div>
        );
    }
}