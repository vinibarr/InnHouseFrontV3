import './style.scss';
import { Grid } from "@mui/material";
import ContentTitle from "../../../../components/Content/ContentTitle";
import { ActionButton } from "../../../../components/Button";
import { useCallback, useState } from "react";
import { history } from "../../../../router/BrowserHistory";
import FormHelper from "../../../../helpers/FormHelper";
import Step1_1 from "./Step1_1";
import Step1_2 from "./Step1_2";
import Step1_3 from "./Step1_3";
import Step1_4 from './Step1_4';


const stepList = [
    {
        component: Step1_1,
    }, {
        component: Step1_2,
    }, {
        component: Step1_3,
    }, {
        component: Step1_4,
    }
]

const AddEditProperty = () => {
    const [step, setStep] = useState<number>(0);

    const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (step < stepList.length - 1) {
            handleNextStep();
            return;
        }

        const formData = FormHelper.Create(event);
        console.log(Object.fromEntries(formData));

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

        <Grid container component='form' onSubmit={handleSubmit} className='grid-content with-footer'>
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

            <Grid item xs={12} className='section-footer'>
                {
                    step === 0 ? (
                        <ActionButton action="cancel" onClick={() => history.goBack()} />
                    ) : (
                        <ActionButton action="back" onClick={handleBackStep} />
                    )
                }

                {
                    step === (stepList.length - 1) ? (
                        <ActionButton action="save" type='submit' className='flexdirection-rowreverse' />
                    ) : (
                        <ActionButton action={step === (stepList.length - 1) ? 'save' : step === 0 ? 'start' : 'next'} type='submit' className='flexdirection-rowreverse' />
                    )
                }
            </Grid>
        </Grid>
    </>;
}


export default AddEditProperty;