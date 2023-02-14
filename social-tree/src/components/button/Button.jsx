import './style.css'

export function Button( { url, text} ) {
    return(
        <a href={ url }  className='button' target="_blank">{ text }</a>
    )
}