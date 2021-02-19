import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillFacebook, AiFillTwitterCircle, AiOutlineMinusCircle, AiOutlineRetweet } from "react-icons/ai";
import { IconContext } from "react-icons";

export default class LeftBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isRealAvatar: false
        }
    }
    changeAvatar = () => {
        this.setState(
            {
                isRealAvatar: !this.state.isRealAvatar
            }
        )
    }
    render() {
        return (
            <div className="h-100 position-relative">
                <div className="p-4 text-center justify-items-center position-relative avatar">
                    <img src={this.state.isRealAvatar ? "https://i.imgur.com/45qbwq3.jpg" : "https://i.imgur.com/NwyqlNU.jpg"} alt="avatar" className="hoverable object-fit-cover rounded-circle shadow" width="165" height="160" onClick={this.changeAvatar} />
                    <div className="swich-avatar text-danger">
                        <AiOutlineRetweet />
                    </div>
                </div>
                <div className="p-2 text-center justify-items-center">
                    <a href="https://github.com/quanndhe130577" rel="noopener noreferrer" target="_blank" className="mr-2">
                        <IconContext.Provider value={{ className: "icon-2x" }}>
                            <AiFillGithub />
                        </IconContext.Provider>
                    </a>
                    <a href="https://www.linkedin.com/in/ren572" rel="noopener noreferrer" className="mr-2" target="_blank">
                        <IconContext.Provider value={{ className: "icon-2x" }}>
                            <AiFillLinkedin />
                        </IconContext.Provider>
                    </a>
                    <a href="https://www.facebook.com/ducquanhd1999/" rel="noopener noreferrer" target="_blank" className="mr-2">
                        <IconContext.Provider value={{ className: "icon-2x" }}>
                            <AiFillFacebook />
                        </IconContext.Provider>
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                        <IconContext.Provider value={{ className: "icon-2x twitter-color" }}>
                            <AiFillTwitterCircle />
                        </IconContext.Provider>
                    </a>
                </div>
                <div className="p-2 text-center">
                    <h1 className="h4 font-weight-bold">Nguyễn Đức Quân</h1>
                    <div className="text-muted">
                        Hai Duong, Viet Nam
          </div>
                </div>
                <div className="p-2">
                    <div className="text-muted mt-2">
                        Email
          </div>
                    <div className="font-weight-bold">
                        <a href="@gmail.com">quanndhe130577@fpt.edu.vn</a>
                    </div>
                    <div className="text-muted mt-3">
                        Phone
                    </div>
                    <div className="font-weight-bold">
                        <a href="@tele.com">(+84) 966 848 112</a>
                    </div>
                    <div className="text-muted mt-3">
                        Date Of Birth
                    </div>
                    <div className="font-weight-bold">
                        Octobor 21, 1999
                    </div>
                </div>
                <div className="toggle-persional-info d-none d-md-block">
                    <AiOutlineMinusCircle />
                </div>
            </div>
        )
    }
}