import React from 'react';
import { Heading } from '@chakra-ui/react';
import whatsapp from '../assets/whatsapp.png';

export default function ContactMe() {
  return (
    <>
      <Heading size="2xl" className="mb-3">
        Contact me
      </Heading>
      <div id="contactForm">
        <img src={whatsapp} title="whatsapp" alt={'whatsapp link'} />
        <a target="_blank" href="https://wa.me/0585009044">
          Amir 0585-009044
        </a>
        <img src={whatsapp} title="whatsapp" alt={'whatsapp link'} />
      </div>
    </>
  );
}
