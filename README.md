- Implement a single page application or script
- That presents a form to the user to fill out
- The form should ask for basic profile information, and allow the user to upload a photo (optional)
- The backend should then validate (using an API such as http://apicloud.me/apis/facerect/demo/ ) that the photo contains a face, and that the user's IP is in the UK (using an API such as https://freegeoip.net/?q=104.59.124.28 )
- if it is, send an email to the user confirming their account is created, otherwise display an error message
- Provide the code in an open github repo and give a test URL 


Learnt quite a lot of new cool features:

- Node Multer middleware to handle file uploads and save to disk
- use Html5 FormData to send a file through Ajax request + specify processData and contenType attribute  (must put enctype in the form and not in the contenttype as it would remove the boundary and get an error)

- API for face recognition using unirest quick http request and the node file system

- Nodemailer for mails