import React from 'react';
import ReactCompareImage from 'react-compare-image';
import './compare.scss'
import image11 from '../../assets/projects/Dining room before.jpg'
import image12 from '../../assets/projects/Dining room After.jpg'
// import image21 from '../../assets/projects/Entryway Before.jpg'
// import image22 from '../../assets/projects/Entryway After.PNG'
import image31 from '../../assets/projects/Fireplace Before.jpg'
import image32 from '../../assets/projects/Fireplace After.jpg'
import image41 from '../../assets/projects/Foyer Before.PNG'
import image42 from '../../assets/projects/Foyer After.JPG'
import image51 from '../../assets/projects/Kitchen before 1.jpg'
import image52 from '../../assets/projects/Kitchen After 1.jpg'
import image61 from '../../assets/projects/Kitchen before 2.jpg'
import image62 from '../../assets/projects/Kitchen after 2.jpg'
import image71 from '../../assets/projects/Master before.jpg'
import image72 from '../../assets/projects/Master after.jpg'

const CompareProjects = () => {
    return (
        <div>
            <div className='compare-slider'>
                <ReactCompareImage
                    aspectRatio='wider'
                    leftImageLabel="Before"
                    rightImageLabel='After'
                    leftImage={image11}
                    rightImage={image12}
                />
            </div>
            {/*<div className='compare-slider'>*/}
            {/*    <ReactCompareImage*/}
            {/*        aspectRatio='wider'*/}
            {/*        leftImageLabel="Before"*/}
            {/*        rightImageLabel='After'*/}
            {/*        leftImage={image21}*/}
            {/*        rightImage={image22}*/}
            {/*    />*/}
            {/*</div>*/}
            <div className='compare-slider'>
                <ReactCompareImage
                    aspectRatio='wider'
                    leftImageLabel="Before"
                    rightImageLabel='After'
                    leftImage={image31}
                    rightImage={image32}
                />
            </div>
            <div className='compare-slider'>
                <ReactCompareImage
                    aspectRatio='wider'
                    leftImageLabel="Before"
                    rightImageLabel='After'
                    leftImage={image41}
                    rightImage={image42}
                />
            </div>
            <div className='compare-slider'>
                <ReactCompareImage
                    aspectRatio='wider'
                    leftImageLabel="Before"
                    rightImageLabel='After'
                    leftImage={image51}
                    rightImage={image52}
                />
            </div>
            <div className='compare-slider'>
                <ReactCompareImage
                    aspectRatio='wider'
                    leftImageLabel="Before"
                    rightImageLabel='After'
                    leftImage={image61}
                    rightImage={image62}
                />
            </div>
            <div className='compare-slider'>
                <ReactCompareImage
                    aspectRatio='wider'
                    leftImageLabel="Before"
                    rightImageLabel='After'
                    leftImage={image71}
                    rightImage={image72}
                />
            </div>
        </div>
    );
};

export default CompareProjects;