import React from "react";

type Props = {
    title?: string;
    desc?: string;
    svg?: string;
}

const TextBox = ({ title, desc, svg }: Props) => {
    return (
        <div className="adv-text-box">
            <div className="adv-img-box">
                <img src={svg} alt={`${title}' icon`} />
            </div>
            <h3>{title}</h3>
            <p className="main-p adv-main-p">{desc}</p>
        </div>
    )
}

export default TextBox