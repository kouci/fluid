import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Layout from "@/components/Layout";
import { List, ListItem, TextField } from "@mui/material";

const steps = [
  "information personnels",
  "coordonnées bancaire",
  "Récapitilatif de la prévente",
];
const register = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState();

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped;
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("plus d'option");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Layout titre="register">
      <Box sx={{ width: "100%", marginTop: "100px" }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};

            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        
        </Stepper>
        {activeStep === 0 &&
        <List>
        <ListItem>
          <TextField
            variant="outlined"
            fullWidth
            id="nom"
            label="nom"
            inputProps={{ type: "email" }}
            onChange={(e) => setEmail(e.target.value)}
          ></TextField>
        </ListItem>
        <ListItem>
          <TextField
            variant="outlined"
            fullWidth
            id="prenom"
            label="prenom"
            inputProps={{ type: "email" }}
            onChange={(e) => setEmail(e.target.value)}
          ></TextField>
        </ListItem>
        <ListItem>
          <TextField
            variant="outlined"
            fullWidth
            id="email"
            label="Email"
            inputProps={{ type: "email" }}
          
          ></TextField>
        </ListItem>
        <ListItem>
          <TextField
            variant="outlined"
            fullWidth
            id="numero"
            label="téléphone"
            inputProps={{ type: "email" }}
          ></TextField>
        </ListItem>
        <ListItem>
          <TextField
            variant="outlined"
            fullWidth
            id="adresse"
            label="adresse"
            inputProps={{ type: "email" }}
          ></TextField>
        </ListItem>
      </List> } 
        
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }} style={{textAlign: 'center'}}>
            Vous serez livré à l'adresse dans les plus brefs délais.
            </Typography>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Retour
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finaliser" : "Continuer"}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
    </Layout>
  );
};

export default register;
