import React from 'react';
import { Link } from 'react-router-dom';

function StoryCard({
    stryIMg,
    text,
    btnText,
    Brainquest,
    id,
    onStoryTextClick,
    Storyadvenure,
    Wordexplore,
    endPoints,
    StoryTitle
}) {
    // console.log(Brainquest)
    // console.log(id)
    let textColorClass = '';

    if (btnText === 'New') {
        textColorClass = 'new-text';
    } else if (btnText === 'In Progress') {
        textColorClass = 'progress-text';
    } else if (btnText === 'Completed') {
        textColorClass = 'completed-text';
    }


    return (
        <>
            <div className='sciStryCard'>
                <div className='stryimgbox'>
                    <img src={` https://ik.imagekit.io/dev24/${stryIMg}`} alt='StoryImage' />
                </div>

                {/* <Link to="/mainStory"> */}
                <div onClick={() => onStoryTextClick(id, Brainquest, Storyadvenure, Wordexplore, endPoints,StoryTitle)}>
                    <p className='font-poppins font-semibold text-lg'>
                        {text}
                    </p>
                </div>
                {/* </Link> */}

                <div className='w-[100%]'>
                    <button className={`font-poppins font-semibold text-lg btnTextSciStry ${textColorClass}`}>{btnText}</button>
                </div>
            </div>
        </>


    )
}

export default StoryCard