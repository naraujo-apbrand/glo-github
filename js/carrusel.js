document.addEventListener('DOMContentLoaded', function () {
    const radios = document.querySelectorAll('input[name="indicator"]');
    const elementos = document.querySelectorAll('.elemento-carrusel');

    const mapa = {
        i1: [0, 1, 2],
        i2: [1, 2, 3],
        i3: [2, 3, 4],
        i4: [3, 4, 5],
        i5: [4, 5, 6],
    };

    function actualizarCarrusel() {
        const checked = document.querySelector('input[name="indicator"]:checked');
        const visibles = mapa[checked.id];

        elementos.forEach((el, index) => {
            if (visibles.includes(index)) {
                el.classList.remove('d-none');
            } else {
                el.classList.add('d-none');
            }

            el.classList.remove('selected');
            if (index === visibles[1]) {
                el.classList.add('selected');
            }
        });
    }

    // Estado global autoplay
    let autoplay = true;
    let delay = 4000;
    let autoplayInterval;

    const toggleAutoplayBtn = document.getElementById('toggle-autoplay');

    function actualizarBotonAutoplay() {
        toggleAutoplayBtn.innerHTML = `<i class="fa-solid fa-${autoplay ? 'pause' : 'play'}"></i>`;
    }

    function iniciarAutoplay() {
        if (autoplayInterval) clearInterval(autoplayInterval);
        autoplay = true;
        actualizarBotonAutoplay();

        autoplayInterval = setInterval(() => {
            const checked = document.querySelector('input[name="indicator"]:checked');
            let nextRadio = radios[(Array.from(radios).indexOf(checked) + 1) % radios.length];
            nextRadio.checked = true;
            actualizarCarrusel();
        }, delay);
    }

    function detenerAutoplay() {
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
            autoplayInterval = null;
        }
        autoplay = false;
        actualizarBotonAutoplay();
    }

    radios.forEach(radio => {
        radio.addEventListener('change', () => {
            detenerAutoplay();
            actualizarCarrusel();
        });
    });

    toggleAutoplayBtn.addEventListener('click', function () {
        if (autoplay) {
            detenerAutoplay();
        } else {
            iniciarAutoplay();
        }
    });

    // Detener autoplay y navegar al detalle
    document.querySelectorAll('.btn-superpuesto').forEach(btn => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            detenerAutoplay();
            const url = this.href;
            setTimeout(() => {
                window.location.href = url;
            }, 100);
        });
    });

    document.querySelectorAll('.elemento-carrusel img').forEach(img => {
        img.addEventListener('click', detenerAutoplay);
    });

    // Iniciar autoplay al cargar la página
    iniciarAutoplay();

    // Inicialización visual
    actualizarCarrusel();
});