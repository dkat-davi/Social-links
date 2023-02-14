import './style.css'

export function Icon( { linkUrl, imageUrl} ) {
    return (
        <a href={ linkUrl } className="icon" target="_blank">
            <img src={ imageUrl }/>
        </a>
    )
}