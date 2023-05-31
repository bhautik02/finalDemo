import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FirstStep from "./SliderComponent/FirstStep";
import SecondStep from "./SliderComponent/SecondStep";
import ThirdStep from "./SliderComponent/ThirdStep";
import { useSelector } from "react-redux";

const steps = ["Add basic Details", "Add Perks & Photos", "Add extra info"];

export default function HostingSlider() {
  const data = useSelector((state) => state.addPlace.hostPlaceData);

  const ref = React.useRef();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  // const [disabled, setDisabled] = React.useState(data ? false : true);

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    console.log("handleNext.......");
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    ref.current.click();
    console.log("handleComplete called---->", data);
  };

  React.useEffect(
    () => {
      if (data.title) {
        console.log("------------ DATA -------------");
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
      }
    },
    // eslint-disable-next-line
    [data]
  );

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step
            key={label}
            completed={completed[index]}
            sx={{
              "& .MuiStepLabel-root .Mui-active": {
                color: "#F5385D",
              },
            }}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>

      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                pt: 2,
              }}>
              <Box sx={{ flex: "1 1 auto" }} />
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Box>{activeStep === 0 && <FirstStep ref={ref} />}</Box>
            <Box>{activeStep === 1 && <SecondStep />}</Box>
            <Box>{activeStep === 2 && <ThirdStep ref={ref} />}</Box>

            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{
                  mr: 1,
                  color: "#F5385D",
                  ":hover": {
                    bgcolor: "#F5385D",
                    color: "white",
                  },
                }}>
                Back
              </Button>
              <Button
                onClick={handleNext}
                sx={{
                  mr: 1,
                  color: "#F5385D",
                  ":hover": {
                    bgcolor: "#F5385D",
                    color: "white",
                  },
                }}>
                Next
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />

              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography
                    variant="caption"
                    sx={{ display: "flex", alignItems: "center" }}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button
                    onClick={handleComplete}
                    sx={{
                      color: "#F5385D",
                      ":hover": {
                        bgcolor: "#F5385D",
                        color: "white",
                      },
                    }}>
                    {completedSteps() === totalSteps() - 1
                      ? "Finish"
                      : "Complete Step"}
                  </Button>
                ))}
            </Box>
          </React.Fragment>
        )}
      </div>
    </Box>
  );
}
