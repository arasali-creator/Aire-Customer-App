import MaintenenceQuestion from "./MaintenenceQuestion";
import globalStyles from "../shared/Shared.module.scss";
function MaintenenceQuestions({ handleChange, values, errors }) {
  return (
    <div className={`${globalStyles.mb_60}`}>
      <MaintenenceQuestion
        handleChange={handleChange}
        values={values}
        questionNumber={1}
        questionText={"   ➢ Is the unit cooling?"}
        noText="Turn the unit off and wait for the technician"
        isNoText={"no"}
      />
      <MaintenenceQuestion
        handleChange={handleChange}
        values={values}
        questionNumber={2}
        questionText={"   ➢ Is the unit in the attic?"}
        noText="Please book before 10am due to heat"
        isNoText={"yes"}
      />
      <MaintenenceQuestion
        handleChange={handleChange}
        values={values}
        questionNumber={3}
        questionText={"   ➢ Is the coil frozen?"}
        noText="Please turn off unit and wait till the coil is not frozen to request service."
        isNoText={"yes"}
      />
      <MaintenenceQuestion
        handleChange={handleChange}
        values={values}
        questionNumber={4}
        questionText={
          "   ➢ Do you live in condo/apartment?And have access to the roof?"
        }
        noText="Please gain access and book technician."
        isNoText={"no"}
      />

      <p
        style={{
          marginTop: "5px",
          color: "red",
          fontSize: "12px",
          fontWeight: "500",
          paddingLeft: "0",
        }}
      >
        {errors.questions}
      </p>
    </div>
  );
}
export default MaintenenceQuestions;
