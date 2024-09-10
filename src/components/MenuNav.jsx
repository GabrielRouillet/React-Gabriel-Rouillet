import './MenuNav.css'

export default function MenuNav(props) {
    return (
        <>
        <li type="button" className="menu nav-link btn btn-secondary" aria-current="page">{props.pagina}</li>
        </>
    )
}
