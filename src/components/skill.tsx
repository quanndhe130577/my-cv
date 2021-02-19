import React from 'react';
import MySkill from './skills/myskill';

export default class Skill extends React.Component {
    render() {
        return (
            <div className="row mt-4">
                <div className="col-md-6">
                    <table className="table table-borderless">
                        <thead className="border-bottom text-muted text-uppercase">
                            <tr>
                                <th className="font-weight-normal">
                                    Name
                            </th>
                                <th className="font-weight-normal">
                                    Rate
                            </th>
                            </tr>
                        </thead>
                        <tbody>
                            <MySkill name="ReactJs" rate="3"/>
                            <MySkill name="CSS" rate="4"/>
                            <MySkill name="HTML, HTML5" rate="4"/>
                            <MySkill name="Javascript, JQuery" rate="3"/>
                        </tbody>
                    </table>
                </div>
                <div className="col-md-6">
                    <table className="table table-borderless">
                        <thead className="border-bottom text-muted text-uppercase">
                            <tr>
                                <th className="font-weight-normal">
                                    Name
                            </th>
                                <th className="font-weight-normal">
                                    Rate
                            </th>
                            </tr>
                        </thead>
                        <tbody>
                            <MySkill name="C#" rate="4"/>
                            <MySkill name="SQL Server, Oracle" rate="4"/>
                            <MySkill name=".NET, .NET Core" rate="4"/>
                            <MySkill name="ASP.NET, ASP.NET Core" rate="4"/>                         
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}