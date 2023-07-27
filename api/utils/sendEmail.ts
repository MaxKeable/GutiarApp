import { Request, Response } from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

/**
 *
 * @param req The request object from the client.
 * @param res The response object from the server.
 * @returns The data from the email being sent, or the error if it fails.
 */

export const sendEmail = async (
  req: Request,
  res: Response,
 
) => {

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS
    }
  });

  const mailOptions = {
    from: "evan.woods.dev@gmail.com",
    to: "tjcarroll1@me.com",
    subject: `New Enquiry from ${req.body.name} ${req.body.email}`,
    text: `New signup from  ${req.body.name} ${req.body.email}. \n\n ${req.body.message}`,
  };

  const response = await transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err)
    } else {
      console.log(`Email sent! ${info.response}`);
    }
  });
  return response;
};
