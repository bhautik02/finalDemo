import Perks from "../Perks";
import PhotosUploader from "../PhotosUploader";

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
    <div className="p-4">
      {preInput("Perks", "select all the perks of your place")}
      <div className="grid mt-2 gap-2 lg:grid-cols-2  md:grid-cols-2 sm:grid-cols-1 ">
        <Perks
        // selected={perks} onChange={setPerks}
        />
      </div>
      {preInput("Photos", "more = better")}
      <PhotosUploader
      // addedPhotos={addedPhotos} onChange={setAddedPhotos}
      />
    </div>
  );
};

export default SecondStep;
