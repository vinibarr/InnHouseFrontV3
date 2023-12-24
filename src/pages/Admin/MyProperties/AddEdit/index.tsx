import './style.scss';
import { Box, Grid, MobileStepper, Typography } from "@mui/material";
import ContentTitle from "../../../../components/Content/ContentTitle";
import { ActionButton } from "../../../../components/Button";
import { useCallback, useState } from "react";
import { history } from "../../../../router/BrowserHistory";
import FormHelper from "../../../../helpers/FormHelper";
import Step1_1 from "./Step1_1";
import Step1_2 from "./Step1_2";
import Step1_3 from "./Step1_3";
import Step1_4 from './Step1_4';
import Step1_5 from './Step1_5';
import Step1_6 from './Step1_6';
import Step2_1 from './Step2_1';
import Step2_2 from './Step2_2';
import Step2_3 from './Step2_3';
import { useLanguageContext } from '../../../../contexts/LanguageContext';
import ArrayHelper from '../../../../helpers/ArrayHelper';
import Step2_4 from './Step2_4';
import Step2_5 from './Step2_5';
import Step2_6 from './Step2_6';
import Step3_1 from './Step3_1';
import Step4_1 from './Step4_1';
import Step4_2 from './Step4_2';
import Completed from './Completed';


const stepList = [
    {
        stepNumber: 1,
        component: Step1_1,
    }, {
        stepNumber: 1,
        component: Step1_2,
    }, {
        stepNumber: 1,
        component: Step1_3,
    }, {
        stepNumber: 1,
        component: Step1_4,
    }, {
        stepNumber: 1,
        component: Step1_5,
    }, {
        stepNumber: 1,
        component: Step1_6,
    }, {
        stepNumber: 2,
        component: Step2_1,
    }, {
        stepNumber: 2,
        component: Step2_2,
    }, {
        stepNumber: 2,
        component: Step2_3,
    }, {
        stepNumber: 2,
        component: Step2_4,
    }, {
        stepNumber: 2,
        component: Step2_5,
    }, {
        stepNumber: 2,
        component: Step2_6,
    }, {
        stepNumber: 3,
        component: Step3_1,
    }, {
        stepNumber: 4,
        component: Step4_1,
    }, {
        stepNumber: 4,
        component: Step4_2,
    }
]

const AddEditProperty = () => {
    const { translate } = useLanguageContext();

    const [step, setStep] = useState<number>(0);
    const [completed, setCompleted] = useState<boolean>(false);

    const currentStep = stepList[step];
    const numberOfSteps = ArrayHelper.DistinctBy(stepList, 'stepNumber');


    const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (step < stepList.length - 1) {
            handleNextStep();
            return;
        }

        const formData = FormHelper.Create(event);
        console.log(Object.fromEntries(formData));

        setCompleted(true);
        // eslint-disable-next-line
    }, [step]);


    const handleNextStep = useCallback(() => {
        setStep(step + 1);
    }, [step]);


    const handleBackStep = useCallback(() => {
        setStep(step - 1);
    }, [step]);


    return <>
        <Grid item xs={12} className='grid-header'>
            <Grid item className='grid-title'>
                <ContentTitle 
                    name='addProperty'
                />
            </Grid>
        </Grid>

        <Grid container component='form' onSubmit={handleSubmit} className={`grid-content ${completed ? 'overflow-enabled justifycontent-center' : 'with-footer'}`}>
            {
                completed ? (
                    <Completed />
                ) : (
                    <>
                        <Grid item xs={12} className='section-content myproperty-steps-content'>
                            {
                                stepList.map((s, index) => {
                                    const active = index === step;

                                    return <s.component 
                                        active={active}
                                        key={index} 
                                        className={active ? '' : 'display-none'} 
                                    />;
                                })
                            }
                        </Grid>

                        <Grid item xs={12} className='section-footer myproperty-steps-footer'>
                            {
                                step === 0 ? (
                                    <ActionButton action="cancel" onClick={() => history.goBack()} />
                                ) : (
                                    <ActionButton action="back" onClick={handleBackStep} />
                                )
                            }

                            <Box className='stepper-box'>
                                <Typography className='stepper-box-title'>
                                    {translate('step')} {currentStep.stepNumber} {translate('of').toLowerCase()} {numberOfSteps.length}
                                </Typography>
                                
                                <MobileStepper
                                    variant="progress"
                                    steps={numberOfSteps.length}
                                    position="static"
                                    activeStep={currentStep.stepNumber - 1}
                                    backButton={<></>}
                                    nextButton={<></>}
                                />
                            </Box>

                            {
                                step === (stepList.length - 1) ? (
                                    <ActionButton action="save" type='submit' className='flexdirection-rowreverse' />
                                ) : (
                                    <ActionButton action={step === (stepList.length - 1) ? 'save' : step === 0 ? 'start' : 'next'} type='submit' className='flexdirection-rowreverse' />
                                )
                            }
                        </Grid>
                    </>
                )
            }
        </Grid>
    </>;
}


export default AddEditProperty;