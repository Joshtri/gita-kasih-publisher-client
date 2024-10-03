// import React from 'react';
import backgroundImage from '../../assets/contact-phone.png'; // Make sure to replace this path with your actual image path

function ContactMain() {
    return (
        <div
            className="relative bg-cover bg-center bg-no-repeat py-20"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Content */}
            <div className="relative container mx-auto px-5 text-white text-center">
                <h2 className="text-4xl font-bold mt-24 mb-12 pb-10">Contact Us</h2>
                {/* <p className="mb-8">
                Jika Anda ingin bertanya ataupun mengetahui tentang Penerbit Buku Deepublish lebih lanjut, silakan email ke marketing.deepublish@gmail.com atau cs@deepublish.co.id
                </p> */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Address */}

                    {/* Email */}
                </div>
            </div>
        </div>
    );
}

export default ContactMain;
