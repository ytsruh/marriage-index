import { Button, Icon } from "react-materialize";

export default function Results(props) {
  if (!props.data) {
    return null;
  }
  if (props.data.results.length === 0) {
    return <NoData />;
  }
  const rows = props.data.results.map((row, i) => {
    return <Row key={i} data={row} />;
  });
  return (
    <div className="card results">
      <div className="card-content black-text" id="table-container">
        <span className="card-title center-align">Search Results</span>
        <table className="bordered highlight centered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Spouse</th>
              <th>Location / Parish</th>
              <th>Date (DD/MM/YYYY)</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
        <Button
          className="teal"
          fab
          floating
          large
          node="button"
          icon={<Icon>arrow_upward</Icon>}
          onClick={() =>
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            })
          }
        />
      </div>
    </div>
  );
}

const Row = (props) => {
  const data = props.data;
  return (
    <tr>
      <td>{`${data.FirstName} ${data.PartitionKey}`}</td>
      <td>{`${data.SpouseFirstName} ${data.SpouseFamilyName}`}</td>
      <td>{data.Parish}</td>
      <td>{`${data.Day}/${data.Month}/${data.Year}`}</td>
      <td>{data.notes}</td>
    </tr>
  );
};

const NoData = () => {
  return (
    <div className="card results brown lighten-5" style={{ margin: 0 }}>
      <div className="card-content black-text">
        <span className="card-title center-align">Sorry we couldn't find any results</span>
        <p className="center-align">Please try again with a new search</p>
      </div>
    </div>
  );
};
