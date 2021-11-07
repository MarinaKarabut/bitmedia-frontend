import Button from '../../shared/components/Button';
import FormInput from '../../shared/components/FormInput'
import { fields } from './fields'

import s from './Form.module.scss'

const Form = () => {
    return (
        <div>
            <form className={s.form}>
                <FormInput {...fields.email}/>
                <Button className={s.btn}>Subscribe</Button>
            </form>
        </div>
            
    )
};

export default Form;
