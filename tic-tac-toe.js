
window.addEventListener('load',
    () => {

        document.getElementById("reset")
            .addEventListener('click', reset)

        function reset() {
            console.log('click')
            const cases = document.querySelectorAll("#gri>div")
            for (let element of cases) {
                element.classList.remove('green')
                element.classList.remove('red')
            }
        }

        classes = ['green', 'red']
        turn = 0

        document.getElementById('gri')
            .addEventListener('click',
                (event) => {
                    if ((event.target.classList.contains('red')) || (event.target.classList.contains('green'))) {
                        return
                    } else {
                        event.target.classList.add(classes[turn])
                        turn = (turn + 1) % 2
                    }
                }
            )
    }
)



