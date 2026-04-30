import React, { useState } from "react";

const OnlineAdmission = () => {
  const [isEmployee, setIsEmployee] = useState(false);

  return (
    <div className=" min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <form className="w-full max-w-5xl bg-white shadow-lg rounded-2xl p-6 space-y-6">

        <h1 className="text-3xl font-bold text-center text-green-700">
          Admission Form
        </h1>

        {/* Student details */}
        <Section title="Student Information">
          <Input placeholder="Full Name"/>
          <Select options={["Male", "Female", "Other"]} placeholder="Gender"/>
          <DateInput/>
          <Select options={[1,2,3,4,5,6,7,8,9]} placeholder="Select Class" />
          <Input placeholder="Enter session"/>
        </Section>

        {/* Parent Info */}
        <Section title="Parent Information">
          <Input placeholder="Father's Name" />
          <Input placeholder="Mother's Name" />
          <Input placeholder="Father's Occupation" />
          <Input placeholder="Mother's Occupation" />
        </Section>

        {/* Guardian */}
        <Section title="Guardian Information">
          <Input placeholder="Guardian Name" />
          <Input placeholder="Guardian Address" />
        </Section>

        {/* Address */}
        <Section title="Student Address">
          <Textarea placeholder="Present Address" />
          <Textarea placeholder="Permanent Address" />
        </Section>

        {/* Contact */}
        <Section title="Contact Information">
          <Input type="phone" placeholder="Phone" />
          <Input type="email" placeholder="Email" />
        </Section>

        {/* Other */}
        <Section title="Other Information">
          <Input placeholder="Religion" />
          <Input placeholder="Nationality" />
          <Input placeholder="Previous School" />
          <Select options={["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"]} placeholder="Blood Group"/>
        </Section>

        {/* SUST Employee */}
        <div>
          <label className="flex items-center gap-2 font-medium">
            <input
              type="checkbox"
              onChange={(e) => setIsEmployee(e.target.checked)}
            />
            Parent is SUST Employee
          </label>

          {isEmployee && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <Input placeholder="Parent Name" />

              <div>
                <label className="block mb-1 font-medium">Occupation</label>
                <div className="flex gap-4 flex-wrap">
                  {["Teacher", "Officer", "Worker"].map((job) => (
                    <label key={job} className="flex items-center gap-1">
                      <input type="radio" name="job" required/> {job}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Upload */}
        <div>
          <label className="block mb-1 font-medium">Upload Photo</label>
          <input
            type="file"
            className="w-full border p-2 rounded-lg bg-gray-50" required
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-row sm:flex-row gap-4 justify-between">
          <button
            type="reset"
            className="w-full sm:w-auto bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-500 cursor-pointer"
          >
            Clear
          </button>

          <button
            type="submit"
            className="w-full sm:w-auto bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 cursor-pointer"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default OnlineAdmission;

/* Reusable Components */

const Section = ({ title, children }) => (
  <div>
    <h2 className="text-lg font-semibold text-gray-700 mb-2">{title}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{children}</div>
  </div>
);

const Input = ({ type = "text", ...props }) => (
  <input
    type={type}
    className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
    {...props}
    required
  />
);

const Textarea = (props) => (
  <textarea
    rows="3"
    className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
    {...props}
  />
);

// const Select = ({ options, name }) => (
//   <select
//     name={name}
//     required
//     defaultValue=""
//     className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//   >
//     <option value="" disabled>
//       Select
//     </option>

//     {options.map((opt) => (
//       <option key={opt} value={opt}>
//         {opt}
//       </option>
//     ))}
//   </select>
// );

const Select = ({ options, placeholder }) => (
  <select
    className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
    defaultValue=""
    required
  >
    <option value="" disabled hidden>
      {placeholder}
    </option>
    {options.map((opt) => (
      <option key={opt} value={opt}>
        {opt}
      </option>
    ))}
  </select>
);

const DateInput = (props) => {
  const [type, setType] = React.useState("text");

  return (
    <input
      type={type}
      placeholder="Date of Birth"
      onFocus={() => setType("date")}
      onBlur={(e) => !e.target.value && setType("text")}
      className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      {...props}
    />
  );
};




