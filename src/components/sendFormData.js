import emailjs from '@emailjs/browser';

export const sendFormData = (formRef) => {

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: USER_ID,
    })

    .then(
        () => {
            console.log('SUCCESS')
        },
        (error) => {
            console.log('FAILED...', error.text)
        },
    )
  }



// export const sendFormData = async(formRef) => {

//     const formData = new FormData(formRef.current)

//     const res = await fetch('https://blockpit-authentication.pages.dev/contact', {
//         method: 'POST',
//         body: formData,
//     })

//     if (!res.ok) {
//         const errorText = await res.text();
//         throw new Error(`Failed to send : ${errorText}`)
//     }
//     return res.json()


//   }