interface Props {
  subtitle: string;
  searches: string[];
}

export const PreviousSearches = ({ subtitle, searches }: Props) => {
  return (
    <div className="previous-searches">
      <h2>{subtitle}</h2>
      <ul className="previous-searches-list">
        {
          searches.map((search) => (
            <li key={search}>{search}</li>
          ))
        }
      </ul>
    </div>
  )
}