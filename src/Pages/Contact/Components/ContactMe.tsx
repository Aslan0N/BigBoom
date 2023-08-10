import React from 'react'

const ContactMe = () => {
  return (
    <section id='contact-me'>
    <div className="container-fluid">
        <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-4">
                <div className="item">
                    <h4>CONTACT US</h4>
                    <p>Have a question? You may find an answer in our FAQs.
                        But you can also contact us:</p>
                    <h5>(+800) 123 456 7890</h5>
                    <p>No 40 Baria Sreet 133/2 NewYork City, NY, USD.</p>
                    <ul>
                        <li>Opening Hours:</li>
                        <li>Saturday 9:00 am - 4:00 pm</li>
                        <li>Monday to Friday 9:00 am - 6:00 pm</li>
                    </ul>
                    <span>contact@ytcvn.com</span>
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-8">
            <h4>SEND A MESSAGE</h4>
                    <p>We’re happy to answer any questions you have or provide you with an estimate. Just send us a message in the form below with any questions you may have.</p>
                <form>
                    <div className="row g-3" >
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                            <input type="text" placeholder='Your Name*' />
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                            <input type="email" placeholder='E-mail Address'  />
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
                            <textarea name="" id="" placeholder='Enqury'></textarea>
                        </div>
                    </div>
                    <button>SUBMIT</button>
                </form>
            </div>
        </div>
    </div>
    </section>
  )
}

export default ContactMe