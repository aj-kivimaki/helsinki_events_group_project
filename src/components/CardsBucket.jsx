import Card from "./Card";
import "../styles/cardsBucket.css";
import useFetch from "./useFetch";

function CardsBucket({
  search,
  onOpen,
  data,
  getArea,
  getDate,
  getTime,
  getDataForModal,
}) {
  // console.log(data);

  return (
    <div className="cardsBucket">
      <h2>EVENTS</h2>
      <div className="eventCardsBucket">
        <div>
          {data
            .filter((elem) => {
              return (
                elem.name?.fi?.toLowerCase().includes(search.toLowerCase()) ||
                elem.name?.en?.toLowerCase().includes(search.toLowerCase()) ||
                elem.description?.fi
                  ?.toLowerCase()
                  .includes(search.toLowerCase()) ||
                elem.description?.en
                  ?.toLowerCase()
                  .includes(search.toLowerCase())
              );
            })
            .map((event) => (
              <Card
                key={event.id}
                id={event.id}
                name={event.name.fi}
                date={getDate(event.start_time, event.end_time)}
                time={getTime(event.start_time, event.end_time)}
                // area={event.location["@id"]}
                onOpen={onOpen}
                getDataForModal={getDataForModal}
              />
            ))}
        </div>
      </div>
    </div>
  ); //end of return
}

export default CardsBucket;
