
import React from 'react';
import { WHATSAPP_NUMBER } from '../constants';

const ContactPage: React.FC = () => {
    const message = "Hi 5CRAFT! I'd like to get in touch about a custom project or question.";
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground">Let's Create Together</h1>
        <p className="mt-4 text-lg text-foreground/80">
          Have an idea for a project? Questions about our process? Or just want to say hello? We'd love to hear from you. The best way to reach us is through WhatsApp for a personal and prompt response.
        </p>
        <div className="mt-10">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-4 bg-foreground text-background font-bold rounded-full shadow-lg hover:bg-foreground/80 transition-all duration-300 transform hover:-translate-y-1 text-xl uppercase"
          >
            Chat with Us on WhatsApp
          </a>
        </div>
        <div className="mt-12 text-foreground/70">
            <p className="font-mono">Or shoot us an email:</p>
            <a href="mailto:hello@5craft.com" className="font-bold text-foreground hover:underline uppercase">hello@5craft.com</a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;