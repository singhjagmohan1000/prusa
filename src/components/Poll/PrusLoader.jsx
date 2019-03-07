import { MoonLoader } from 'react-spinners';
import React from 'react';

export class PrusLoader extends React.Component {

    render() {
        return (
            <div className='poll-loader'>
                <MoonLoader
                    sizeUnit={"px"}
                    size={80}
                    color={'#FF5F18'}
                />
            </div>
        )
    }
}