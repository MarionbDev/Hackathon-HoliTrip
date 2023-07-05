import React, { useState } from "react";

function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };
  return (
    <div>
      <header className=" h-40 md:h-72  -mt-8 bg-slate-500 mb-8" />
      <div className="flex flex-col items-center h-screen">
        <h1 className="text-4xl font-bold mb-16 text-[#9EBA9B]">
          VoyageVoyage
        </h1>
        <div className="text-center md:w-2/5">
          <h2 className="text-2xl font-bold mb-10">Contactez-nous</h2>
          {isSubmitted ? (
            <div className="bg-[#4110C7] rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Merci pour votre message !
              </h3>
              <p className="text-white">
                Nous avons bien reçu votre message et nous vous répondrons dès
                que possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="flex font-bold mb-2">
                  Nom, Prénom :
                </label>
                <input
                  type="text"
                  required
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="flex font-bold mb-2">
                  Email:
                </label>
                <input
                  type="email"
                  required
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="flex  font-bold mb-2">
                  Message:
                </label>
                <textarea
                  required
                  id="message"
                  name="message"
                  className="w-full px-3 py-2 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                />
              </div>
              <button
                type="submit"
                className="bg-[#4110C7] text-white font-bold py-2 px-4 rounded mt-5"
              >
                Envoyer
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
export default ContactForm;
