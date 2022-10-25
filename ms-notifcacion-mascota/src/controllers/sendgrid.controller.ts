/* eslint-disable @typescript-eslint/no-explicit-any */
// Uncomment these imports to begin using these cool features!

import {post, requestBody} from '@loopback/rest';
import {Mail} from '../models';
const sgMail = require('@sendgrid/mail');

// import {inject} from '@loopback/core';

export class SendgridController {
  constructor() {}

  @post('/mail', {
    responses: {
      '200': {
        description: 'Login Mascota Feliz',
      },
    },
  })
  async mail(@requestBody() datamail: Mail) {
    sgMail.setApiKey();
    const msg = {
      to: datamail.to,
      from: 'pcns.gzkai50@myxu.info',
      subject: datamail.subject,
      //text: datamail.text,
      html: datamail.text,
    };

    return sgMail.send(msg, (error: any, result: any) => {
      if (error) {
        return error;
      } else {
        return result;
      }
    });
  }
}
