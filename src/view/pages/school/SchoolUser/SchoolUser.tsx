import React from "react";
import {TextField} from "../../../component/TextField/TextField";
import {TextArea} from "../../../component/TextArea/TextArea";
import {Button} from "../../../component/Button/Button";
import {FooterSpace} from "../../../component/FooterSpace/FooterSpace";
import {Footer} from "../../../component/Footer/Footer";

export const SchoolUser = () => {
    return (
        <section className='h-max flex w-[95%] flex-col justify-center'>
            <section className='text-[#005285] flex flex-row justify-start mt-5'>
                <h3>Teachers and Uses &gt; Manage Users</h3>
            </section>
            {/*url display section*/}
            <section
                className='bg-white flex flex-row flex-wrap items-center justify-center mt-5 p-5 rounded-xl shadow-md'>
                <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                    <TextField
                        name="name"
                        placeholder={'ex- Nimal'}
                        label={'Name'}
                        important={"*"}
                    />
                    <TextField
                        name="contact"
                        placeholder={'ex- 070 000 0000'}
                        label={'Contact'}
                        important={"*"}
                    />
                    <TextField
                        name="nic"
                        placeholder={'ex- 000000000000 or 000000000v'}
                        label={'NIC'}
                        important={"*"}
                    />
                </div>
                <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                    <TextField
                        name="username"
                        placeholder={'ex- Isuru123'}
                        label={'Username'}
                        important={"*"}

                    />
                    <TextField
                        name="email"
                        placeholder={'ex- example@gmail.com'}
                        label={'Email'}
                        important={"*"}

                    />
                    <div className='grow w-[220px] mx-3 my-3 gap-1 flex flex-col justify-start'>
                        <div className='flex flex-row'>
                            <label className='text-black flex justify-start'>Password</label>
                        </div>
                        <input
                            className={`text-input p-[7px]`}
                            type={"text"}
                            placeholder={"*******"}
                            disabled={true}
                            name={"Password"}
                        ></input>
                        <div className={`h-[5px]`}>
                            <small
                                className={`text-start text-red-600 block`}>
                                {"The password is automatically generated and sent to the user's provided email address."}
                            </small>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row flex-wrap items-center justify-center w-full'>
                    <TextArea
                        name="address"
                        placeholder={'ex- ABC Road, Galle'}
                        label={'Address'}

                    />
                </div>
                <div className='flex flex-row flex-wrap items-center justify-end w-full'>
                    <Button
                        name={'Save'}
                        color={'bg-[#2FEB00]'}
                    />
                </div>
            </section>
            <section
                className='bg-white flex flex-row flex-wrap items-center justify-center mt-5 p-5 rounded-xl shadow-md'>
            </section>
            <FooterSpace/>
        </section>
    );
};
