import React from 'react';
import { Title } from '../../components/common/Title/Title';

export const Music = () => {
    return (
        <section className='music' id='music'>
            <div className="section-content">
                <Title Title='MUSIC' SpanTitle='' Description='BURN IT OR BURN OUT'/>
                <div className='d-flex justify-content-center'>
                    <iframe
                        width="100%" 
                        height="450" 
                        title='spotify'
                        src="https://open.spotify.com/embed/artist/4RCCHZWNDMVcI92So1QxMD?utm_source=generator" 
                        style={{borderRadius:"12px"}} 
                        frameBorder="0" 
                        allowfullscreen="" 
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                        loading="lazy"
                    />
                </div>
            </div> 
        </section>
    )
}
