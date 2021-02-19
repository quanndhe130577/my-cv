import React from 'react';
import Company from './company';

export default class Experience extends React.Component {
    render() {
        return (
            <div className="mt-4">
                <Company logo="https://i.imgur.com/MTPZaKB.jpg"
                    name="E-solutions"
                    description="CÔNG TY CỔ PHẨN GIẢI PHÁP QUẢN LÝ NĂNG LƯỢNG E-SOLUTIONS (Energy management solution JSC)"
                    start="May 2020" end="Now"
                />
            </div>
        )
    }
}