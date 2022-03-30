import React, { useState, useRef } from "react";
import { Heading } from "@chakra-ui/react";
import emailjs from "emailjs-com";
import { FormLabel, Input, Textarea } from "@chakra-ui/react";
import Button from "react-bootstrap/Button";

export default function ContactMe() {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msgBody, setMsgBody] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);
    emailjs.sendForm("service_oktpcue", "template_5qhux7e", form.current, "HRIUa5IBDOWJUQGfg").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <>
      <Heading size="2xl" className="mb-3">
        Contact me
      </Heading>
      <div id="contactForm">
        <form ref={form} onSubmit={sendEmail}>
          <FormLabel htmlFor="Full-name">Full name</FormLabel>
          <Input
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
            name="user_name"
          />
          <FormLabel htmlFor="Email">Email</FormLabel>
          <Input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            name="user_email"
          />
          <FormLabel htmlFor="Message">Message</FormLabel>
          <Textarea
            onChange={(e) => {
              setMsgBody(e.target.value);
            }}
            required
            rows="5"
            name="message"
          />
          <Button
            type="submit"
            onClick={(e) => sendEmail(e)}
            variant="outline-dark"
            size="lg"
            value="Send"
            disabled={!name || !email || msgBody}
          >
            Submit
          </Button>
        </form>
      </div>
    </>
  );
}
