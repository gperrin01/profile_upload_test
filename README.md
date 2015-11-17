- Implement a single page application or script
- That presents a form to the user to fill out
- The form should ask for basic profile information, and allow the user to upload a photo (optional)
- The backend should then validate (using an API such as http://apicloud.me/apis/facerect/demo/ ) that the photo contains a face, and that the user's IP is in the UK (using an API such as https://freegeoip.net/?q=104.59.124.28 )
- if it is, send an email to the user confirming their account is created, otherwise display an error message
- Provide the code in an open github repo and give a test URL 


- upload with Multer
- specifc jQ syntax with new FormData and contentType
-