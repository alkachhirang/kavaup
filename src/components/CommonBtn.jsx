import React from 'react'

const Commonbtn = (props) => {
    return (
        <div>
            <button className='common_btn text-nowrap text-center text-white fs_sm  '>{props.name}</button>
        </div>
    );
}

export default Commonbtn;
