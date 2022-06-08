import './Header.scss'

export default function Header({ brandName }) {
  return (
    <header className="App-header">
      <h1 className="App-header__brand">{brandName}</h1>
      <nav className="App-header__nav">
        <a className="App-header__nav__item" href="#">Nav item 1</a>
        <a className="App-header__nav__item" href="#">Nav item 2</a>
        <a className="App-header__nav__item" href="#">Nav item 3</a>
      </nav>
    </header>
  )
}