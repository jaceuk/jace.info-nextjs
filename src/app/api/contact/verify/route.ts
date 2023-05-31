import axios from 'axios';

export async function POST(req: Request) {
  const { reCaptchaKey } = await req.json();

  const captchaURL = 'https://www.google.com/recaptcha/api/siteverify';

  if (!reCaptchaKey) return new Response(JSON.stringify({ error: true }));

  const response = await axios({
    url: captchaURL,
    method: 'POST',
    // reCaptcha demands x-www-form-urlencoded requests
    headers: {
      ContentType: 'application/x-www-form-urlencoded; charset=utf-8',
    },
    params: {
      secret: process.env.RECAPTCHA_SECRET_KEY,
      response: reCaptchaKey,
    },
  }).catch((error) => {
    console.log(error);
  });

  const data = response?.data;
  // check if successfully requested, and that a score over .5 is met
  if (data.success === true && data.score > 0.5) {
    return new Response(JSON.stringify({ error: false }));
  } else {
    return new Response(JSON.stringify({ error: true }));
  }
}
