"use client";
import { useState } from 'react';
const styles = {
    ContactInput: {
      width: '100%',
      height: '45px',
      padding:'10px',
    },
    ContactLabel : {
        fontSize: '16px',         
        fontWeight: '500',   
        padding :' 0px 0px 10px',
    }
  };

const Contact = () => {

  return (
    <div>

        <from className="flex flex-col gap-[30px]">

            <div className='flex flex-col'>
                <label style={styles.ContactLabel}>Full Name:</label>
                <input style={styles.ContactInput} type="text" name="name" placeholder='Enter Full Name'/>
            </div>

            <div className='flex flex-col'>
                <label style={styles.ContactLabel}>Work Email Address:</label>
                <input
                    style={styles.ContactInput}
                    type="email"
                    name="email"
                    placeholder='Enter Email'
                />
            </div>

            <div className='flex flex-col'>
                <label style={styles.ContactLabel}>What is your inquiry about? *</label>
                <select
                    style={styles.ContactInput}
                    name="enquiry"
                >
                <option value="">-- Please Select --</option>
                <option value="United States">United States</option>
                <option value="Canada">Canada</option>
                <option value="India">India</option>
                <option value="Australia">Australia</option>

                </select>
            </div>

            <div className='flex flex-col'>
                <label style={styles.ContactLabel}>Phone Number :</label>
                <input
                    style={styles.ContactInput}
                    type="phone"
                    name="phone"
                    placeholder='Enter Phone Number'
                />
            </div>

            <button type="button" class="width-full text-white bg-[var(--primary-color)] hover:bg-[var(--dark-blue)] font-medium rounded-lg text-sm px-5 py-2.5 ">
                Submit Enquiry
            </button>

        </from>

    </div>
  );
};

export default Contact;
