import React from 'react';
import { RiStarLine } from "react-icons/ri";
import { IconContext } from "react-icons";

export default class MySkill extends React.Component<any> {
    render() {
        return (
            <tr>
                <td className="font-weight-bold">
                    {this.props.name}
                </td>
                <td>
                    <IconContext.Provider value={{ className: "text-warning mb-1" }}>
                        {this.props.rate}/5 <RiStarLine />
                    </IconContext.Provider>
                </td>
            </tr>
        )
    }
}