import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function Header({ children }: QuartzComponentProps){

  return(
    <header>
      <div className="header-content">
        <h1>
          <a href="/">La Cucina di Mica</a>
        </h1>
        <div className="menu">
          <a href="/engineering">Projects</a>
          <a href="/kitchen">Kitchen</a>
        </div>
      </div>
    </header>
  );
}

Header.css = `
header {
  background-color: transparent; /* #fdf1dd Example background color */
  color: #000; /* Example text color */
  padding: 10px;
  border-bottom: 1px solid #000; /* Thin black border at the bottom */
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header h1 {
  margin: 0;
}

.menu {
  display: flex;
  gap: 20px;
}

.menu a {
  text-decoration: none;
  color: #000; /* Menu button text color */
}

/* Media query for smaller screens */
@media (max-width: 600px) {
  .header-content {
    flex-direction: column;
    align-items: flex-start;
  }

  .menu {
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
  }

  header h1 {
    font-size: 1.5rem; /* Adjust the font size if needed */
  }

  .menu a {
    font-size: 1rem; /* Adjust the font size if needed */
  }
}
`

export default (() => Header) satisfies QuartzComponentConstructor;