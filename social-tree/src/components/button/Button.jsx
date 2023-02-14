import './style.css'

export function Button( { url, text} ) {
    return(
        <div className='button'>
            <a href={ url }  className='text-button' target="_blank">{ text }</a>
        </div>
    )
}