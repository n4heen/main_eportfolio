//template_lhwmh29
//service_u5fxijb
//ypzgOSunxrv_S4tiD

async function contact(event) {

    event.preventDefault()
    //    await emailjs
    //         .sendForm(
    //             'service_u5fxijb',
    //             'template_lhwmh29',
    //             event.target,
    //             ' ypzgOSunxrv_S4tiD'
    //         )

    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList+=" modal__overlay--visible"
    setTimeout(()=>{
        console.log('It worked')
    },500)
}