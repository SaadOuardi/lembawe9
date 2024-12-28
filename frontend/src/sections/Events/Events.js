import React from 'react';
import { Title } from '../../components/common/Title/Title';
import './Events.scss';

export const Events = () => {
    return(
        <>
            <section className='events' id='events'>
                <div className="section-content">
                    <Title Title='LHANGAR' SpanTitle='EVENTS' Description='BURN IT OR BURN OUT'/>
                    <div className='video-container d-flex justify-content-center'>
                        <iframe
                            width="60%"
                            className='youtube-video' 
                            src="https://www.youtube.com/embed/onAZZjB3f0M?si=iZ6KycFFl3wsuPUx" 
                            title="YouTube video player" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerpolicy="strict-origin-when-cross-origin" 
                            allowfullscreen
                        />
                    </div>
                </div> 
            </section>
        </>
    )
}