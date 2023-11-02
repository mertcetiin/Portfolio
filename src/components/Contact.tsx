import emailjs from '@emailjs/browser';

function Contact() {

    const sendEmail = (e: any) => {
        e.preventDefault();

        emailjs.sendForm('service_5t1vlqp', 'template_1uyvtbd', e.target, '_iK-H1UxjsZ_PV63Q')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    return (
        <div className="w-full">
            <div className="flex flex-col mt-60 justify-center max-w-md mx-auto bg-white shadow-xl rounded-xl p-5">
                <form onSubmit={sendEmail} className="bg-white p-4 rounded-lg shadow-lg">

                    <div className="mb-4">
                        <input type="text" className="w-full py-2 px-3 rounded border" placeholder="Email" name="email" />
                    </div>

                    <div className="mb-4">
                        <input type="text" className="w-full py-2 px-3 rounded border" placeholder="Name" name="name" />
                    </div>

                    <div className="mb-4">
                        <input type="text" className="w-full py-2 px-3 rounded border" placeholder="Subject" name="subject" />
                    </div>

                    <div className="mb-4">
                        <textarea className="w-full py-2 px-3 rounded border" placeholder="Message" name="message" />
                    </div>

                    <div className="mb-4">
                        <button type="submit" className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-blue-800" name="subject">
                            Send Message</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Contact;