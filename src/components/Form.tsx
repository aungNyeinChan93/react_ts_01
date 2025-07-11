import React, { useRef, useState, type ChangeEvent, type FormEvent } from 'react';


interface FormData {
    name: string,
    email: string,
    password: string
}
const Form = () => {

    const [fromData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        password: ""
    })
    const nameRef = useRef<HTMLInputElement>(null);
    // const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const formSubmit = (e: FormEvent) => {
        e.preventDefault();
        const newFormData: FormData = {
            name: nameRef.current!.value,
            email: fromData.email,
            password: passwordRef.current!.value,
            // email: emailRef.current!.value,
        }
        setFormData(newFormData);
        nameRef.current!.value = ''
        passwordRef.current!.value = ''
        nameRef.current?.focus();
    }

    const changeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(pre => ({ ...pre, [name]: value }))
    }
    return (
        <React.Fragment>
            <form onSubmit={formSubmit}>
                <input type="text" name="name" id="name" placeholder='name' ref={nameRef} />
                <input type="email" name="email" id="email" placeholder='email' value={fromData.email} onChange={changeEmail} />
                <input type="text" name="password" id="password" placeholder='password' ref={passwordRef} />
                <button type='submit'>Submit</button>
            </form>

            <div>
                name - {fromData.name}
                email - {fromData.email}
                password - {fromData.password}
            </div>
        </React.Fragment>
    );
};

export default Form;