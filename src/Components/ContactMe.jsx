import React, { useState } from "react";
import { Heading } from "@chakra-ui/react";
import axios from "axios";
import { FormControl, FormLabel, FormErrorMessage, FormHelperText, Input } from "@chakra-ui/react";

export default function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msgBody, setMsgBody] = useState("");

  const formId = "FyTV01dM";
  const formSparkUrl = `https://submit-form.com/${formId}`;
  const submitForm = async (e) => {
    e.preventDefault();
    await formSubmission();
  };
  const formSubmission = async () => {
    const payload = {
      message: "testing 123",
    };
    try {
      const res = await axios.post(formSparkUrl, payload);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Heading size="2xl" className="mb-3">
        Contact me
      </Heading>
      <div id="contactForm">
        <FormControl>
          <FormLabel htmlFor="Full-name">Full name</FormLabel>
          <Input
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
          <FormLabel htmlFor="Email">Email</FormLabel>
          <Input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
          <FormLabel htmlFor="Message">Message</FormLabel>
          <Input
            onChange={(e) => {
              setMsgBody(e.target.value);
            }}
            required
          />
          <button type="submit" onClick={() => submitForm()} className="btn">
            Submit
          </button>
        </FormControl>
      </div>
    </>
  );
}
