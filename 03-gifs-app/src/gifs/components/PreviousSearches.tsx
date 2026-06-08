interface Props {
  subtitle: string;
  searches: string[];
  onLabelClicked: (term: string) => void
}

export const PreviousSearches = ({ subtitle, searches, onLabelClicked }: Props) => {
  return (
    <div className="previous-searches">
      <h2>{subtitle}</h2>
      <ul className="previous-searches-list">
        {
          searches.map((search) => (
            <li key={search} onClick={() => onLabelClicked(search)}>{search}</li>
          ))
        }
      </ul>
    </div>
  )
}