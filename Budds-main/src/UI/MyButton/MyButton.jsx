import React from 'react';
import './MyButton.css'
import Modal from "../../sections/Modal/Modal"
import close from "./close.svg"
import { useForm } from "react-hook-form";
import { useState } from 'react';
import thankBoy from "./thankBoy.svg";
const MyButton = ({children, style}) => {
    const [modalActive,setModalActive] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [formSubmit,setFormSubmit] = useState(false);
    const onSubmit = (data) =>  {
        console.log(data);
        setModalActive(false);
        setFormSubmit(true)
    }
    return (
        <div>
            <button className="ContactButton" style={style} onClick={()=>setModalActive(true)}>
                {children}
            </button>
            <Modal active={modalActive} setActive={setModalActive}>
                <form className='registration_modal' onSubmit={handleSubmit(onSubmit)}>
                    <div className='registration_box'>
                        <div className='registration_close'>
                                <img src={close} alt="" onClick={()=>setModalActive(false)}/>
                        </div>
                      <h5 className='registration_title'>Name <span style={{color:"red"}}>*</span></h5>
                        <input type="text" 
                            className='registration_input' 
                            placeholder='Enter name' 
                            {...register("Name", { required: true })}
                            style={errors.Name &&{border:"1px solid red"}}
                        />
                        {errors.Name && <span style={{ color: "red" , fontSize:12}}>
                        This field is required. </span>}
                    </div>
                    <div className='registration_box'>
                      <h5 className='registration_title'>Email <span style={{color:"red"}}>*</span></h5>
                          <input type="email" 
                            className='registration_input' 
                            placeholder='Enter email' 
                            {...register("email", { required: true })}
                            style={errors.email && {border:"1px solid red"}}
                          />
                          {errors.email && <span style={{ color: "red" , fontSize:12}}>
                          This field is required. </span>}
                    </div>
                    <div className='registration_box'>
                      <h5 className='registration_title'>Phone Number <span style={{color:"red"}}>*</span></h5>
                          <input type="text" 
                            className='registration_input' 
                            placeholder='+ 1 900 000 00 00' 
                            {...register("number", { required: true })}
                            style={errors.number && {border:"1px solid red"}}
                        />
                        {errors.number && <span style={{ color: "red" , fontSize:12}}>
                        This field is required. </span>}
                    </div>
                    <div className='registration_box'>
                      <h5 className='registration_title'>Company</h5>
                          <input type="text" className='registration_input' placeholder='Enter company' {...register("Company")}/>
                    </div>
                    <div className='registration_box'>
                      <h5 className='registration_title'>Website/store URL</h5>
                      <input type="text" className='registration_input'placeholder='Enter Website/Store URL' {...register("Website")}/>
                    </div>
                        {errors.Name || errors.email || errors.number ? 
                            <div style={{ color: "red" , fontSize:16,marginTop:20}}>
                            Please fill in all required fields </div>
                            :
                            null
                        }
                      <p className='registration_text'>
                      By submitting this form you 
                      are agreeing to Budss’s <a href=""> Pricacy Policy</a> and <a href=""> Terms of Use</a> 
                      </p>
                    <input type={"submit"} className='ContactButton' style={{backgroundColor:"#B9B9B9",borderStyle:"none"}} value={"Contact sales"}/>
                </form>
            </Modal>
            {formSubmit === true &&
                <Modal active={formSubmit} setActive={setFormSubmit}>
                    <div className='Thank'>
                        <div style={{position:"relative"}}>
                            <div className='Thank_close'>
                                <img src={close} alt="" onClick={()=>setFormSubmit(false)} />
                            </div>
                            <img src={thankBoy} alt="" />
                        </div>
                            <p className='Thank_Title'>Thank you!</p>
                            <p className='Thank_text'>Thank you, we have received your application and will contact you soon!</p>
                            <button className='ContactButton' style={{width:"100%",border:"none"}} onClick={()=>setFormSubmit(false)}>Super!</button>
                    </div>
                </Modal>
            }
        </div>
    );
};

export default MyButton;