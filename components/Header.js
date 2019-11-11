import Link from 'next/link'

const linkStyle = {
    marginRight: 15
}

const Header = () => (
    <div>
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
            <a style={linkStyle}>About</a>
        </Link>
        <Link href="/fetch">
            <a style={linkStyle}>Fetch</a>
        </Link>
        <Link href="/styled-blog">
            <a style={linkStyle}>Styled Blog</a>
        </Link>
    </div>
)

export default Header
