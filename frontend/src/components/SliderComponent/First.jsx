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

const First = () => {
  return (
    <>
      {preInput(
        "Title",
        "Title for your place. should be short and catchy as in advertisement"
      )}
      <input
        type="text"
        // value={title}
        // onChange={(ev) => setTitle(ev.target.value)}
        placeholder="title, for example: My lovely apt"
      />
      {preInput("Address", "Address to this place")}
      <input
        type="text"
        // value={address}
        // onChange={(ev) => setAddress(ev.target.value)}
        placeholder="address"
      />
      {preInput("Description", "description of the place")}
      <textarea
      // value={description}
      // onChange={(ev) => setDescription(ev.target.value)}
      />
    </>
  );
};

export default First;
