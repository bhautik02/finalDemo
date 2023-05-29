import Perks from "../Perks";

function inputHeader(text) {
  return <h2 className="text-2xl mt-4">{text}</h2>;
}

function inputDescription(text) {
  return <p className="text-gray-500 text-sm">{text}</p>;
}

function preInput(header, description) {
  return (
    <>
      {inputHeader(header)}
      {inputDescription(description)}
    </>
  );
}

const SecondStep = () => {
  return (
    <>
      {preInput("Perks", "select all the perks of your place")}
      <div className="grid mt-2 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        <Perks
        // selected={perks} onChange={setPerks}
        />
      </div>
    </>
  );
};

export default SecondStep;
