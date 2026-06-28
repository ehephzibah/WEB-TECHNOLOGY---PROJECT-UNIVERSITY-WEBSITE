const container =
    document.getElementById(
        "network-bg"
    );

const scene =
    new THREE.Scene();

const camera =
    new THREE.PerspectiveCamera(
        75,
        window.innerWidth /
        window.innerHeight,
        0.1,
        1000
    );

camera.position.z = 80;

const renderer =
    new THREE.WebGLRenderer({
        alpha: true,
        antialias: true
    });

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

renderer.setPixelRatio(
    window.devicePixelRatio
);

container.appendChild(
    renderer.domElement
);

const particlesCount = 180;

const particlesGeometry =
    new THREE.BufferGeometry();

const positions = [];

for (
    let i = 0;
    i < particlesCount;
    i++
) {

    positions.push(
        (Math.random() - 0.5) * 180
    );

    positions.push(
        (Math.random() - 0.5) * 100
    );

    positions.push(
        (Math.random() - 0.5) * 100
    );

}

particlesGeometry.setAttribute(
    'position',
    new THREE.Float32BufferAttribute(
        positions,
        3
    )
);

const particlesMaterial =
    new THREE.PointsMaterial({

        size: 1.4,

        color: 0x3b82f6,

        transparent: true,

        opacity: 0.8

    });

const particles =
    new THREE.Points(
        particlesGeometry,
        particlesMaterial
    );

scene.add(
    particles
);

const lineMaterial =
    new THREE.LineBasicMaterial({

        color: 0x06b6d4,

        transparent: true,

        opacity: 0.12

    });

function createConnections() {

    const positions =
        particlesGeometry.attributes.position.array;

    const points = [];

    for (
        let i = 0;
        i < positions.length;
        i += 3
    ) {

        for (
            let j = i + 3;
            j < positions.length;
            j += 3
        ) {

            const dx =
                positions[i] - positions[j];

            const dy =
                positions[i + 1] - positions[j + 1];

            const dz =
                positions[i + 2] - positions[j + 2];

            const distance =
                Math.sqrt(
                    dx * dx +
                    dy * dy +
                    dz * dz
                );

            if (distance < 25) {

                points.push(
                    positions[i],
                    positions[i + 1],
                    positions[i + 2]
                );

                points.push(
                    positions[j],
                    positions[j + 1],
                    positions[j + 2]
                );

            }

        }

    }

    const geometry =
        new THREE.BufferGeometry();

    geometry.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(
            points,
            3
        )
    );

    const lines =
        new THREE.LineSegments(
            geometry,
            lineMaterial
        );

    scene.add(lines);

}

createConnections();

let mouseX = 0;
let mouseY = 0;
function animate() {

    requestAnimationFrame(
        animate
    );

    particles.rotation.y += 0.0008;

    particles.rotation.x += 0.0003;

    camera.position.x =
        mouseX * 5;

    camera.position.y =
        -mouseY * 5;

    renderer.render(
        scene,
        camera
    );

}

animate();

window.addEventListener(
    'resize',
    () => {

        camera.aspect =
            window.innerWidth /
            window.innerHeight;

        camera.updateProjectionMatrix();

        renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );

    }
);



document.addEventListener(
    'mousemove',
    (e) => {

        mouseX =
            (e.clientX /
                window.innerWidth)
            - 0.5;

        mouseY =
            (e.clientY /
                window.innerHeight)
            - 0.5;

    });

window.addEventListener(
    "scroll",
    () => {

        const totalHeight =

            document.documentElement.scrollHeight
            -
            window.innerHeight;

        const progress =

            (window.scrollY /
                totalHeight)
            * 100;

        document.querySelector(
            ".progress-bar"
        ).style.width =
            progress + "%";

    });