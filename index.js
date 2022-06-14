//template_lhwmh29
//service_u5fxijb
//ypzgOSunxrv_S4tiD

function contact(event) {
    event.preventDefault();
    //     emailjs
    //     .sendForm(
    //         'service_u5fxijb',
    //         'template_lhwmh29',
    //         event.target,
    //         'ypzgOSunxrv_S4tiD'
    //     )
    //     .then(()=>{
    //         console.log('This worked')
    //     })
    //     console.log("knoggs")

    const loading = document.querySelector('modal__overlay--loading')

    const success = document.querySelector('modal__overlay--success')

    loading.classList += " modal__overlay--visible"
    setTimeout(() => {
        console.log('it worked 1')
    }, 500)
}
