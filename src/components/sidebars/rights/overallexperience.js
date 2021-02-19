import React from 'react';
import { Link } from 'react-router-dom'
import { BsListTask } from 'react-icons/bs';
import { FaMedapps } from 'react-icons/fa';

export default class OverallExperience extends React.Component {
    render() {
        return (
            <div className="pt-3 text-muted">
                <Link className="nav-link py-4 active border-bottom-dashed" to="/task">
                    <BsListTask />   My Task
                </Link>
                <Link className="nav-link py-4 active border-bottom-dashed" to="/app">
                    <FaMedapps />   My Application
                </Link>
            </div >
        )
    }
}