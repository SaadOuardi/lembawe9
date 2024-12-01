import './Title.scss';

export const Title = (Title, SpanTitle, Description)=>{
    return(
        <>
            <div class="Title Primary-Padding">
                <h1>{Title} <span>{SpanTitle}</span></h1>
                <h6>{Description}</h6>
            </div>
        </>
    );
}