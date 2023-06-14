import { forwardRef, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addPlaceActions } from "../../store/addPlace";

function preInput(header) {
  return (
    <>
      <label className="text-2xl mt-4 block">{header}</label>
    </>
  );
}

function errorinInput(errorMessage) {
  return (
    <>
      <p className="text-red-500">*{errorMessage}</p>
    </>
  );
}

const FirstStep = forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const hostedPlaceInfo = props.editingPlaceInfo;

  useEffect(() => {
    if (hostedPlaceInfo) {
      setTitle(hostedPlaceInfo.title);
      setAddress(hostedPlaceInfo.address);
      setDescription(hostedPlaceInfo.description);
    }
  }, []);

  const [title, setTitle] = useState("");
  const [titleIsTouched, setTitleIsTouched] = useState(false);

  const [address, setAddress] = useState("");
  const [addressIsTouched, setAddressIsTouched] = useState(false);

  const [description, setDescription] = useState("");
  const [descriptionIsTouched, setDescriptionIsTouched] = useState(false);

  const titleIsInvalid = title.trim().length === 0;
  const titleInputIsInvalid = titleIsInvalid && titleIsTouched;

  const addressIsInvalid = address.trim().length === 0;
  const addressInputIsInvalid = addressIsInvalid && addressIsTouched;

  const descriptionIsInvalid = description.trim().length === 0;
  const descriptionInputIsInvalid =
    descriptionIsInvalid && descriptionIsTouched;

  const onclickHandler = (event) => {
    event.preventDefault();
    setTitleIsTouched(true);
    setAddressIsTouched(true);
    setDescriptionIsTouched(true);

    if (titleIsInvalid || addressIsInvalid || descriptionIsInvalid) {
      return;
    }

    const firstSlideInput = {
      title,
      address,
      description,
    };
    console.log(firstSlideInput);
    dispatch(addPlaceActions.addPlaceData(firstSlideInput));

    setTitleIsTouched(false);
    setAddressIsTouched(false);
    setDescriptionIsTouched(false);
    setTitle("");
    setAddress("");
    setDescription("");
  };

  return (
    <form className="p-4" onSubmit={onclickHandler}>
      {preInput("Title")}
      <input
        type="text"
        value={title}
        required
        onChange={(event) => setTitle(event.target.value)}
        onBlur={() => setTitleIsTouched(true)}
        placeholder="Title for your place."
      />
      {titleInputIsInvalid && errorinInput("Title must not be empty!")}

      {preInput("Address")}
      <input
        type="text"
        value={address}
        required
        onChange={(event) => setAddress(event.target.value)}
        onBlur={() => setAddressIsTouched(true)}
        placeholder="Address to this place"
      />
      {addressInputIsInvalid && errorinInput("Address must not be empty!")}

      {preInput("Description")}
      <textarea
        value={description}
        required
        onChange={(event) => setDescription(event.target.value)}
        onBlur={() => setDescriptionIsTouched(true)}
        placeholder="Description of the place"
        rows="4"
        cols="75"
        className="w-full border my-1 py-2 px-3 rounded-2xl"
      />
      {descriptionInputIsInvalid &&
        errorinInput("Description must not be empty!")}

      <button style={{ display: "none" }} type="submit" ref={ref}></button>
    </form>
  );
});

export default FirstStep;
