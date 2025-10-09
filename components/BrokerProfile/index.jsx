import { useState } from "react";
import LandingPageHeader from "components/LandingPageHeader1";
import LandingPageFooter from "components/LandingPageFooter";

const BrokerForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    address: "",
    city: "",
    locality: "",
    pinCode: "",
    experience: "",
    interestedIn: "",
    operatingArea: "",
    description: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      photo: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., send data to server, etc.)
    console.log(formData);
  };

  return (
    <div className="flex flex-col">
      <LandingPageHeader className="bg-white-A700 flex gap-2 h-20 md:h-auto items-center justify-between md:px-5 px-8 py-[19px] w-full" />
      <div
        className="container mx-auto bg: #D9AFD9
      bg-gradient-to-r "
      >
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto bg-gradient-to-r from-linGrad1_O to-linGrad2_O rounded-xl p-4 my-4"
        >
          <h1 className="text-4xl my-4 ">Broker Profile</h1>
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-md font-medium ">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="mt-1 p-2 border w-full rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="age" className="block text-md font-medium ">
              Age
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="mt-1 p-2 border w-full rounded-md"
              required
            />
          </div>

          {/* Add similar fields for other details */}
          <div className="mb-4">
            <label htmlFor="address" className="block text-md font-medium ">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 p-2 border w-full rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="locality" className="block text-md font-medium ">
              Locality
            </label>
            <input
              type="text"
              id="locality"
              name="locality"
              value={formData.locality}
              onChange={handleChange}
              className="mt-1 p-2 border w-full rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="city" className="block text-md font-medium ">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="mt-1 p-2 border w-full rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="pinCode" className="block text-md font-medium ">
              Pin Code
            </label>
            <input
              type="number"
              id="pinCode"
              name="pinCode"
              value={formData.pinCode}
              onChange={handleChange}
              className="mt-1 p-2 border w-full rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="experience" className="block text-md font-medium ">
              Experience
            </label>
            <input
              type="number"
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="mt-1 p-2 border w-full rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="operatingArea"
              className="block text-md font-medium "
            >
              Operating area
            </label>
            <input
              type="number"
              id="operatingArea"
              name="operatingArea"
              value={formData.operatingArea}
              onChange={handleChange}
              className="mt-1 p-2 border w-full rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor=" interestedIn"
              className="block text-md font-medium "
            >
              Intrested in
            </label>
            <input
              type="text"
              id=" interestedIn"
              name="interestedIn"
              value={formData.interestedIn}
              onChange={handleChange}
              className="mt-1 p-2 border w-full rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-md font-medium ">
              Description
            </label>
            <input
              type="text"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="mt-1 p-2 border w-full rounded-md"
              required
            />
          </div>

          {/* Add more fields for other details similarly */}

          <div className="mb-4">
            <label htmlFor="photo" className="block text-md font-medium ">
              Photo
            </label>
            <input
              type="file"
              id="photo"
              name="photo"
              onChange={handleFileChange}
              className="mt-1 p-2 border w-full rounded-md"
              accept="image/*"
              required
            />
          </div>

          <div className="mb-4 justify-center flex">
            <button
              type="submit"
              className=" bg-cyan-900 text-white-A700 px-4 py-2 rounded-md hover:bg-cyan-700 onFocus: border-6"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <LandingPageFooter className="bg-white-A700 flex gap-2 items-center justify-center md:px-5 px-[120px] py-20 w-full" />
    </div>
  );
};

export default BrokerForm;
