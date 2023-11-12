const buttons = document.querySelectorAll('button')

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const currentState = button.getAttribute('data-state')
        /* Ended up not using this, Kevin changed too much code
         * when the camera turned off...
         * Never the less, natural discovery here that ternary's
         * can accept logical OR operators, NICE!!*/
        const toggleOpen =
            !currentState || currentState === 'closed' ? 'opened' : 'closed'
        const toggleExpand =
            button.getAttribute('aria-expanded') === 'false' ? 'true' : 'false'
        button.setAttribute('aria-expanded', toggleExpand)
        button.setAttribute('data-state', toggleOpen)
    })
})
