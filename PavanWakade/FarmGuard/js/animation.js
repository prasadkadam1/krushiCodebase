document.addEventListener('DOMContentLoaded', () => {
  // Hero Section 3D Background
  const heroCanvasContainer = document.getElementById('hero-canvas-container');
  if (heroCanvasContainer && typeof THREE !== 'undefined') {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, heroCanvasContainer.offsetWidth / heroCanvasContainer.offsetHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(heroCanvasContainer.offsetWidth, heroCanvasContainer.offsetHeight);
    heroCanvasContainer.appendChild(renderer.domElement);

    const particleCount = 5000;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 30;
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x4ade80,
      size: 0.05,
      transparent: true,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    const mouse = new THREE.Vector2();

    const onMouseMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', onMouseMove, false);

    camera.position.z = 10;

    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      particleSystem.rotation.y = elapsedTime * 0.1;

      // Animate particles
      const positions = particleSystem.geometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const x = particleSystem.geometry.attributes.position.getX(i);
        positions[i3 + 1] += Math.sin(elapsedTime + x) * 0.001;
      }
      particleSystem.geometry.attributes.position.needsUpdate = true;
      
      // Make camera follow mouse
      camera.position.x += (mouse.x * 2 - camera.position.x) * 0.05;
      camera.position.y += (-mouse.y * 2 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };
    animate();

    window.addEventListener('resize', () => {
      camera.aspect = heroCanvasContainer.offsetWidth / heroCanvasContainer.offsetHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(heroCanvasContainer.offsetWidth, heroCanvasContainer.offsetHeight);
    });
  }

  // Scroll-triggered animations
  const animatedElements = document.querySelectorAll('.feature-card, .stat-item, .service-card, .pricing-card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-slide-in');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
  });

  animatedElements.forEach(el => {
    observer.observe(el);
  });
});
