import React, { useContext, useEffect, useRef, useState } from 'react'
import { AuthContext } from "../../Context/AuthContext.js";

import { API } from '../../config';

const Subscription = (props) => {

    const BASE_URL = API;
    const RAZORPAY_TEST_KEY = "rzp_test_DJBG3pNEbw0AYg";
    const RAZORPAY_TEST_SECRET = "6dspJ11vdoaCyyWnkxTgdcOP";

    const { showAlert } = props
    const authContext = useContext(AuthContext);
    const { user } = authContext;
    const {username,email}=user;
   
    const makePayment = async () => {
        const res = await initializeRazorpay();

        if (!res) {
            alert("Razorpay SDK Failed to load");
            return;
        }
        const data_to_be_send = {
            amount: 1,
            orderId: Math.floor(Math.random * Date.now())
        }

        const data = await fetch(`${BASE_URL}/payments/razorpay`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data_to_be_send)
        }).then((t) =>
            t.json()
        );

        let options = {
            key: RAZORPAY_TEST_KEY,
            name: "Flint",
            currency: data.currency,
            amount: data.amount,
            order_id: data.id,
            description: "Thankyou for subscribing to Cazoova",
            image: `${BASE_URL}/logo.png`,
            handler: function (response) {
                showAlert("Payment success", "success")
                // alert(response.razorpay_payment_id)
                // alert(response.razorpay_order_id)
                // alert(response.razorpay_signature)
            },
            prefill: {
                name: username,
                email: email,
            },
            "theme": {
                "color": "#3f8679"
            }
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    };
    const initializeRazorpay = () => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";
            // document.body.appendChild(script);

            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };

            document.body.appendChild(script);
        });
    };


    return (
        <>
           
            <div style={{ marginTop: "70px" }}>
                <button className='btn btn-dark m-3' onClick={makePayment}>Subscribe</button>
            </div>
          
        </>
    )
}

export default Subscription