import React from "react";
import preloader from '../../../assets/images/preloader.gif'

let Preloader = (props) => {
    return (
        <div>
            <img src={preloader} style={{ height: 50, width: 50 }} />
        </div>
    )
}

export default Preloader;